// ============================================================
// CLOSURES - Functions remembering their creation environment
//
// A closure occurs when an inner function "closes over" variables
// from its outer function's scope, remembering them even after
// the outer function has finished executing.
// ============================================================

// PATTERN 1: Event Handler Factory
// Each call to clickhandler creates a new function that remembers
// its specific color value. The returned function closes over the
// 'color' parameter from its parent scope.

function clickhandler(color) {
    return function() {
        document.body.style.backgroundColor = `${color}`;
    }
}

// Each button gets its own closure with a different color "baked in"
document.getElementById("red").onclick = clickhandler("red");
document.getElementById("green").onclick = clickhandler("green");


// PATTERN 2: Configuration Factory
// createTaxCalculator returns a customized function that remembers
// its specific tax rate. This is cleaner than passing the rate
// every time you calculate tax.

function createTaxCalculator(taxRate) {
    return (price) => {
        const tax= price * taxRate;
        const total = price + tax;
        console.log(typeof tax);
        return {price, tax, total};
    }
}

// Each calculator is a separate closure with its own tax rate
const calculateGST = createTaxCalculator(0.18);
const calculateVAT = createTaxCalculator(0.07);

console.log(calculateGST(100));
console.log(calculateVAT(100));


// ============================================================
// PROMISES - Representing future values from async operations
//
// A Promise has three states:
// - Pending: initial state, operation in progress
// - Fulfilled: operation completed successfully (resolve called)
// - Rejected: operation failed (reject called)
// ============================================================

// Basic Promise - resolve after delay
// The executor function (first argument) runs immediately,
// but the .then() callback only runs after resolve() is called.

const promise1= new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log("Promise 1 resolved");
        resolve();
    }, 1000);
})

promise1.then(() => {
    console.log("Promise 1 resolved pt 2");
})

// Promises can be chained without storing in a variable.
// Useful for one-time async operations.

new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log("Promise 2 resolved");
        resolve();
    }, 1000);
}).then(() => {
    console.log("Promise 2 resolved pt 2");
})

// Promises can resolve with data.
// Whatever value you pass to resolve() becomes available
// in the .then() callback as a parameter.

const promise3 = new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve({username: "Prince", email: "prince@example.com"})
    }, 1000);
})
promise3.then((data) => {
    console.log("Promise 3 resolved");
    console.log(data);
})

// Promise with conditional resolve/reject.
// Based on some condition (here, an error flag), the Promise
// either fulfills or rejects. This simulates real-world scenarios
// like API calls that can succeed or fail.

const promise4 = new Promise(function(resolve, reject) {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({username: "Prince", password: "123"});
        } else {
            reject("Error: Something went wrong");
        }
    }, 1000);
})

// Promise chaining - each .then() receives the return value from the previous one.
// Errors anywhere in the chain are caught by the single .catch() at the end.
// .finally() runs regardless of success or failure - useful for cleanup.

promise4
.then((data) => {
    console.log("Promise 4 resolved");
    console.log(data);
    return data.username;
})
.then((username) => {
    console.log(username);
})
.catch((error) => {
    console.log(error);
})
.finally(() => {
    console.log("Promise 4 completed");
})

// Promise states are observable.
// When logged immediately after creation, the Promise is still pending
// because setTimeout hasn't fired yet. This demonstrates that Promises
// start their work immediately but settle asynchronously.

const promise5 = new Promise(function(resolve, reject) {
    setTimeout(() => {
        let error = false
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 5000);
})
console.log(promise5);

// async/await is syntactic sugar for Promises.
// 'await' pauses execution of the async function until the Promise settles.
// Behind the scenes, this is still using Promises - just cleaner syntax.
// try/catch handles errors instead of .catch(), making error handling
// look more like synchronous code.

async function usePromise5() {
    try {
        const response = await promise5;
        console.log("Promise 5 resolved");
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

usePromise5();


// ============================================================
// PARALLEL ASYNC OPERATIONS WITH PROMISE.ALLSETTLED
//
// Promise.allSettled waits for all Promises to complete (resolve OR reject)
// and returns their results regardless of success/failure. Unlike Promise.all,
// which rejects immediately if any Promise fails, allSettled gives you
// complete information about all operations.
// ============================================================

// Simulating multiple API calls with Promise.all

function fetchWeather() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Sunny, 25°C");
    }, 1000);
  });
}

function fetchNews() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Breaking News: JavaScript is awesome!");
    }, 1500);
  });
}

function fetchSports() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Sports Update: Local team wins championship!");
    }, 1200);
  });
}


// Parallel execution of promises using Promise.allSettled
// All three fetch functions run simultaneously (not sequentially).
// We get results for all of them, even if some fail. Each result
// has a 'status' field ('fulfilled' or 'rejected') and either a
// 'value' (if fulfilled) or 'reason' (if rejected).

async function fetchDashboardData() {
  try {
    const [weather, news, sports] = await Promise.allSettled([
      fetchWeather(),
      fetchNews(),
      fetchSports()
    ]);
    console.log("state of promises: ", weather, news, sports);

    console.log("Weather:", weather);
    console.log("News:", news);
    console.log("Sports:", sports);

  } catch (error) {
    console.error("One or more requests failed:", error);
  }
}
fetchDashboardData();


// ============================================================
// ASYNC/AWAIT WITH FETCH API
//
// fetch() returns a Promise that resolves to a Response object.
// response.json() also returns a Promise that resolves to parsed data.
// This is why we need TWO awaits - one for the network request,
// one for parsing the response body.
// ============================================================

// Real HTTP request with proper error handling.
// response.ok checks if status is 200-299. fetch() only rejects on
// network errors (no internet, DNS failure), NOT on HTTP errors like 404.
// We must manually check response.ok and throw if the status is bad.

async function getUserData(id) {
    try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const user= await response.json();
        return user;
    }
    catch(error) {
        console.error("Error fetching user data:", error);
    }
}

// Consuming the async function.
// Even though getUserData is async (returns a Promise), we still use
// await to get the actual value rather than a pending Promise.

async function displayUserData() {
    const user= await getUserData(1);
    console.log("User Data:", user);
}
displayUserData();