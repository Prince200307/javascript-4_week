// Day 4: Async/await, Promises, closures in retry logic
// Day 5: Error handling

// Simulates a network delay using a Promise
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

// In-memory data store (simulates a database)
let store = []

// Closure-based retry wrapper — returns a new function that retries on failure
const createRetry = (fn, maxRetries = 3) => {
    return async (...args) => {
        let lastError

        for (let attempt = 1; attempt <= maxRetries; attempt++) {
            try {
                const result = await fn(...args)
                return result
            } catch (error) {
                lastError = error
                console.log(`  Attempt ${attempt} failed: ${error.message}`)

                if (attempt < maxRetries) {
                    await delay(500)
                }
            }
        }

        throw new Error(`Failed after ${maxRetries} retries: ${lastError.message}`)
    }
}

// Generic API client — simulates async CRUD operations
const apiClient = {
    get: async () => {
        await delay(300)
        return [...store]
    },

    post: async (item) => {
        await delay(300)
        store = [...store, item]
        return item
    },

    put: async (id, updates) => {
        await delay(300)
        const index = store.findIndex((item) => item.id === id)

        if (index === -1) {
            throw new Error('Item not found')
        }

        // Day 2: Spread operator for immutable update
        store[index] = { ...store[index], ...updates }
        return store[index]
    },

    del: async (id) => {
        await delay(300)
        const index = store.findIndex((item) => item.id === id)

        if (index === -1) {
            throw new Error('Item not found')
        }

        const deleted = store[index]
        store = store.filter((item) => item.id !== id)
        return deleted
    }
}

export { apiClient, createRetry }
