// Product Management System — Demo
// Exercises all concepts from Day 1 through Day 5

import { addProduct, getAllProducts, updateProduct, deleteProduct, searchProducts, getStatistics } from './services/productService.js'
import { formatPrice, formatStock } from './utils/formatters.js'
import { PRODUCT_CATEGORIES } from './config/constants.js'

// Helper to print a product nicely (Day 1: template literals, Day 2: destructuring)
const printProduct = ({ id, name, price, stock, category }) => {
    console.log(`  [${id}] ${name} — ${formatPrice(price)} | ${formatStock(stock)} | ${category}`)
}

const run = async () => {
    try {
        console.log('=== Product Management System ===\n')
        console.log(`Available categories: ${PRODUCT_CATEGORIES.join(', ')}\n`)

        // --- CREATE ---
        console.log('--- Adding Products ---')
        await addProduct({ name: 'Wireless Mouse', price: 599.99, stock: 25, category: 'Electronics' })
        await addProduct({ name: 'JavaScript Book', price: 449, stock: 50, category: 'Books' })
        await addProduct({ name: 'Running Shoes', price: 2999.5, stock: 0, category: 'Sports' })
        await addProduct({ name: 'Cotton T-Shirt', price: 799, stock: 8, category: 'Clothing' })
        console.log('4 products added.\n')

        // --- READ ---
        console.log('--- All Products ---')
        const allProducts = await getAllProducts()
        allProducts.forEach(printProduct)
        console.log()

        // --- UPDATE ---
        console.log('--- Updating Product (id: 1) ---')
        const updated = await updateProduct(1, { price: 499.99, stock: 30 })
        printProduct(updated)
        console.log()

        // --- SEARCH (Day 3: filter) ---
        console.log('--- Search: "book" ---')
        const results = await searchProducts('book')
        results.forEach(printProduct)
        console.log()

        // --- STATISTICS (Day 3: map, filter, reduce) ---
        console.log('--- Statistics ---')
        const stats = await getStatistics()
        console.log(`  Total products : ${stats.totalProducts}`)
        console.log(`  Total value    : ${formatPrice(stats.totalValue)}`)
        console.log(`  Average price  : ${formatPrice(stats.averagePrice)}`)
        console.log(`  Out of stock   : ${stats.outOfStock}`)
        console.log(`  Categories     : ${stats.categories.join(', ')}`)
        console.log()

        // --- DELETE ---
        console.log('--- Deleting Product (id: 3) ---')
        const deleted = await deleteProduct(3)
        console.log(`  Deleted: ${deleted.name}`)
        console.log()

        // --- FINAL LIST ---
        console.log('--- Remaining Products ---')
        const remaining = await getAllProducts()
        remaining.forEach(printProduct)

        // --- VALIDATION ERROR (Day 5: error handling) ---
        console.log('\n--- Trying to add invalid product ---')
        await addProduct({ name: '', price: -10, stock: 5, category: 'InvalidCategory' })

    } catch (error) {
        console.log(`\nError caught: ${error.message}`)
    }
}

run()
