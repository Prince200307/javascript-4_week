// Async error handling — using try/catch with fetch API

// Fetches a user by ID; throws a custom error if the response is not OK
async function getUser(id) {
    try {
        const response = await fetch(`/api/users/${id}`)
        if (!response.ok) {
            throw new Error(`User not found ${id}`)
        }
        const data = await response.json()
        return data
    }
    catch (error) {
        console.log("Failed to fetch user ", error)
    }
}

// Note: getUser returns a Promise, so this logs the Promise object, not the resolved value
console.log(getUser(1))