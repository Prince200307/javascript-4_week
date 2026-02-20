// Input validation utilities using regex and built-in APIs

// Validates email format: local@domain.tld
export const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
}

// Requires: 8+ chars, at least one uppercase letter, at least one digit
export const isValidPassword = (password) => {
    if (password.length < 8) return false
    if (!/[A-Z]/.test(password)) return false
    if (!/[0-9]/.test(password)) return false
    return true
}

// Validates exactly 10 digits (Indian phone number format)
export const isValidPhone = (phone) => {
    const regex = /^\d{10}$/
    return regex.test(phone)
}

// Uses the URL constructor — throws on invalid URLs, so we catch it
export const isValidUrl = (url) => {
    try {
        new URL(url)
        return true
    } catch (error) {
        return false
    }
}