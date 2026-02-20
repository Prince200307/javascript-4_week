// Day 4: Async/await, Promises
// Day 5: Error handling

// Simulates a network delay using a Promise
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

// In-memory data store (simulates a database)
let store = []

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

export { apiClient }
