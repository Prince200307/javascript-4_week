// // ============================================
// // SECTION 1: THIS KEYWORD AND ARROW FUNCTIONS
// // ============================================
// // Demonstrates how 'this' keyword works in regular functions vs arrow functions
// // Arrow functions do NOT have their own 'this' - they inherit from parent scope
// // Regular functions have their own 'this' bound to the object they're called on
// // Define an object with nested properties and methods
// // Nested object with an arrow function method
// // Arrow function: 'this' does NOT refer to 'client' object
// // 'this' refers to the global/parent context instead
// // Another nested object with arrow function that uses parameter instead of 'this'
// // This arrow function accepts the object as a parameter instead of using 'this'
// // Regular function method: 'this' refers to the 'user' object
// // Call the regular function - 'this' points to 'user' object
// // Update the username property
// // Call again to see the updated value
// // Log the global 'this' context
// // Call the arrow function from nested object - 'this' does NOT point to 'client'
// // Update username (won't affect arrow function since it doesn't use 'this.name')
// // Call again - notice the output is the same because arrow function ignores object context
// // Call the method that uses parameter instead of 'this'
// // Update the name property
// // Call again - now it shows the updated name because it reads from the parameter

// // CODE FOR SECTION 1:
// const user= {
//     username: "john",
//     price: 10,

//     client: {
//         name: "client1",
//         welcomeMessage2: () => {
//             console.log(`Welcome2, ${this.name}!`);
//             console.log(this);
//         }
//     },
//     client2: {
//         nam1e: "client2",
//         welcomeMessage3: (client2) => {
//             console.log(`Welcome3, ${client2.name}!`);
//             console.log(client2);
//         }
//     },

//     welcomeMessage: function() {
//         console.log(`Welcome, ${this.username}!`);
//         console.log(this);
//     }
// }

// user.welcomeMessage();
// user.username= "jane";
// user.welcomeMessage();
// console.log(this);

// user.client.welcomeMessage2();
// user.username= "Alex";
// user.client.welcomeMessage2();
// console.log(this);

// user.client2.welcomeMessage3(user.client2);
// user.client2.name= "client2_updated";
// user.client2.welcomeMessage3(user.client2);
// console.log(this);


// // =====================================================
// // SECTION 2: THIS KEYWORD WITHOUT OBJECT CONTEXT
// // =====================================================
// // When functions are called without an object context (not as methods),
// // 'this' refers to the global object (or undefined in strict mode)
// // Define a standalone regular function
// // Call the function without an object context - 'this' is the global object
// // Define a standalone arrow function with a different name
// // Call the arrow function - 'this' is inherited from the global scope

// // CODE FOR SECTION 2:
// const welcomeMessage= function() {
//     console.log(`Welcome, ${this.username}!`);
//     console.log(this);
// }

// welcomeMessage();

// const welcomeMessageArrow= () => {
//     console.log(`Welcome, ${this.username}!`);
//     console.log(this);
// }

// welcomeMessageArrow();


// // =====================
// // SECTION 3: ARROW FUNCTIONS
// // =====================
// // Arrow functions are shorthand syntax for defining functions
// // The example below uses implicit return (no braces) and multiple operations
// // Call the arrow function and log the result

// // CODE FOR SECTION 3:
// const add= (num1, num2) => (console.log("This is an arrow function"), num1 + num2);
// console.log(add(5, 3));



// // =====================
// // SECTION 4: DESTRUCTURING
// // =====================
// // ---- OBJECT DESTRUCTURING ----
// // Extract specific properties from an object into separate variables
// // Destructure 'username' and collect remaining properties into 'rest' using spread operator
// // ---- ARRAY DESTRUCTURING ----
// // Extract elements from an array into separate variables
// // Destructure first two elements and collect remaining into 'restNumbers'
// // ---- OBJECT DESTRUCTURING WITH RENAMING ----
// // Extract properties and rename them to different variable names
// // ---- OBJECT DESTRUCTURING WITH DEFAULT VALUES ----
// // Extract properties, rename them, handle nested objects, and set default values
// // ---- DESTRUCTURING IN FUNCTION PARAMETERS ----
// // Destructure an object directly in function parameters

// // CODE FOR SECTION 4:
// const user= {username:"Kapil", password: "12345", email: "kapil@js.com"};
// const {username,  ...rest}= user;
// console.log(username);
// console.log(rest);

// const numbers= [1, 2, 3, 4, 5];
// const [first, second, ...restNumbers]= numbers;
// console.log(first);
// console.log(second);
// console.log(restNumbers);

// const user2= {username:"Kapil", password: "12345", email: "kapil@js.com"};
// const {username: user_name, password: user_password }= user2;
// console.log(user_name);
// console.log(user_password);

// const user3= {username:"Kapil", password: "12345", email: "kapil@js.com", otherstuff: {weight: 100, id: 1234}};
// const {username:user_name2, password:user_password2, otherstuff: {weight: user_weight, id:user_id}, height: user_height= 170}= user3;
// console.log(user_name2);
// console.log(user_password2);
// console.log(user_weight);
// console.log(user_id);
// console.log(user_height);

// function displayUserInfo({username, password}) {
//     console.log(`Username: ${username}, Password: ${password}`);
// }
// const displayUserInfoArrow= ({username, password}) => (`Username: ${username}, Password: ${password}`)
// const user4= {username:"Kapil", password: "12345"};
// console.log(displayUserInfo(user4));
// user4.username= [12,13];
// console.log(displayUserInfo(user4));


// =====================
// SECTION 5: SPREAD SYNTAX
// =====================
// Use spread to unpack array elements as function arguments
// Use spread to copy and modify array elements
// Use spread to merge multiple objects, with later objects overriding properties

// CODE FOR SECTION 5:
function sum(a, b, c) {
    return a + b + c;
}
const numbersArray= [1, 2, 3];
console.log(sum(...numbersArray));
const newNumbers= {...numbersArray, 2: 4};
console.log(newNumbers);

const defaults = { theme: 'light', language: 'en', notifications: true };
const userPrefs = { theme: 'dark', fontSize: 16 };
const mergedvalues= {...defaults, ...userPrefs};
console.log(mergedvalues);