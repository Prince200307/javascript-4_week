// Day 1: Arrow functions, template literals

// Formats a number as INR currency string
const formatPrice = (price) => {
    return `₹${price.toFixed(2)}`
}

// Returns a human-readable stock status
const formatStock = (quantity) => {
    if (quantity === 0) {
        return `Out of Stock`
    }
    if (quantity < 10) {
        return `Low Stock (${quantity} left)`
    }
    return `In Stock (${quantity} available)`
}

export { formatPrice, formatStock }
