// Day 2: Destructuring in params, spread operator for immutability
// Day 3: map, filter, reduce for statistics and search
// Day 5: ES6 modules, error handling

import { apiClient, createRetry } from '../utils/api.js'
import { validateProduct } from '../utils/validators.js'
import { ERROR_MESSAGES } from '../config/constants.js'

let nextId = 1

// Add a product (with validation)
const addProduct = async ({ name, price, stock, category }) => {
    const product = { id: nextId, name, price, stock, category }

    const validation = validateProduct(product)
    if (!validation.isValid) {
        throw new Error(`${ERROR_MESSAGES.INVALID_PRODUCT}: ${validation.errors.join(', ')}`)
    }

    nextId++
    const saved = await apiClient.post(product)
    return saved
}

// Get all products
const getAllProducts = async () => {
    const products = await apiClient.get()
    return products
}

// Update a product — spread operator merges old + new fields
const updateProduct = async (id, updates) => {
    try {
        const updated = await apiClient.put(id, updates)
        return updated
    } catch (error) {
        throw new Error(`${ERROR_MESSAGES.PRODUCT_NOT_FOUND}: ${id}`)
    }
}

// Delete a product by ID
const deleteProduct = async (id) => {
    try {
        const deleted = await apiClient.del(id)
        return deleted
    } catch (error) {
        throw new Error(`${ERROR_MESSAGES.PRODUCT_NOT_FOUND}: ${id}`)
    }
}

// Day 3: filter — search products by name
const searchProducts = async (query) => {
    const products = await apiClient.get()
    const lowerQuery = query.toLowerCase()

    return products.filter((product) =>
        product.name.toLowerCase().includes(lowerQuery)
    )
}

// Day 3: map, filter, reduce — calculate product statistics
const getStatistics = async () => {
    const products = await apiClient.get()

    if (products.length === 0) {
        return { totalProducts: 0, totalValue: 0, averagePrice: 0, outOfStock: 0, categories: [] }
    }

    // reduce to get total inventory value (price × stock)
    const totalValue = products.reduce((sum, product) => {
        return sum + product.price * product.stock
    }, 0)

    // reduce to get average price
    const averagePrice = products.reduce((sum, p) => sum + p.price, 0) / products.length

    // filter to count out-of-stock items
    const outOfStock = products.filter((product) => product.stock === 0).length

    // map to extract unique categories
    const categories = [...new Set(products.map((product) => product.category))]

    return {
        totalProducts: products.length,
        totalValue,
        averagePrice,
        outOfStock,
        categories
    }
}

// Wrap addProduct with retry logic (Day 4: closures)
const addProductWithRetry = createRetry(addProduct, 3)

export {
    addProduct,
    getAllProducts,
    updateProduct,
    deleteProduct,
    searchProducts,
    getStatistics,
    addProductWithRetry
}
