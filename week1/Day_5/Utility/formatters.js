// String and number formatting utilities using Intl APIs

// Formats a number as currency (defaults to INR with Indian locale grouping)
export const formatCurrency = (amount, currency = 'INR') => {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: currency
    }).format(amount)
}

// Formats a date string into a human-readable long format (e.g. "1 January 2022")
export const formatDate = (dateString) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat('en-IN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).format(date)
}

// Converts a past date into a relative time string (e.g. "5 minutes ago")
// Cascades from seconds → minutes → hours → days
export const formatRelativeTime = (dateString) => {
    const date = new Date(dateString)
    const now = new Date()
    const seconds = Math.round((now - date) / 1000)

    if (seconds < 60) {
        return `${seconds} seconds ago`
    }
    if (seconds < 60 * 60) {
        return `${Math.round(seconds / 60)} minutes ago`
    }
    if (seconds < 60 * 60 * 24) {
        return `${Math.round(seconds / (60 * 60))} hours ago`
    }
    return `${Math.round(seconds / (60 * 60 * 24))} days ago`
}

// Truncates text to maxLength and appends "..." if it exceeds the limit
export const truncateString = (text, maxLength = 50) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...'
}