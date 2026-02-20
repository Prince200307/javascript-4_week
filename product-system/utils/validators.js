// Day 5: Optional chaining, error handling
// Day 1: Arrow functions, const/let

import { PRODUCT_CATEGORIES } from '../config/constants.js'

// Validates a product object and returns an array of error strings
const validateProduct = (product) => {
    const errors = []

    // Optional chaining — safely check nested/missing properties
    if (!product?.name || product.name.trim() === '') {
        errors.push('Product name is required')
    }

    if (product?.price === undefined || product.price < 0) {
        errors.push('Price must be a positive number')
    }

    if (product?.stock === undefined || product.stock < 0) {
        errors.push('Stock must be a non-negative number')
    }

    if (product?.category && !PRODUCT_CATEGORIES.includes(product.category)) {
        errors.push(`Category must be one of: ${PRODUCT_CATEGORIES.join(', ')}`)
    }

    return {
        isValid: errors.length === 0,
        errors
    }
}

export { validateProduct }
