// ============================================================
// SECTION 1: THIS KEYWORD AND ARROW FUNCTIONS
//
// 'this' refers to the object that called the function.
// Regular functions bind 'this' dynamically at call time.
// Arrow functions do NOT bind their own 'this' — they inherit
// it from the surrounding lexical scope (where they were defined).
// ============================================================

const user= {
    username: "john",
    price: 10,

    client: {
        name: "client1",
        // Arrow function inside a nested object — 'this' does NOT refer to 'client'.
        // It escapes to the outer lexical scope, which in Node.js is the module scope (not 'user').
        // So this.name is undefined, and 'this' logs the module's exports object.
        welcomeMessage2: () => {
            console.log(`Welcome2, ${this.name}!`);
            console.log(this);
        }
    },
    client2: {
        nam1e: "client2",
        // Workaround: pass the object explicitly as a parameter instead of relying on 'this'.
        // This is a clean pattern when you need object access inside an arrow function.
        welcomeMessage3: (client2) => {
            console.log(`Welcome3, ${client2.name}!`);
            console.log(client2);
        }
    },

    // Regular function — 'this' correctly refers to the 'user' object that called it.
    // Mutating user.username before calling this again shows 'this' reflects live object state.
    welcomeMessage: function() {
        console.log(`Welcome, ${this.username}!`);
        console.log(this);
    }
}

user.welcomeMessage();
user.username= "jane";
user.welcomeMessage();
console.log(this);

user.client.welcomeMessage2();
user.username= "Alex";
user.client.welcomeMessage2();
console.log(this);

user.client2.welcomeMessage3(user.client2);
user.client2.name= "client2_updated";
user.client2.welcomeMessage3(user.client2);
console.log(this);


// ============================================================
// SECTION 2: THIS KEYWORD WITHOUT OBJECT CONTEXT
//
// When a regular function is called without an object (standalone),
// 'this' refers to the global object in non-strict mode, or
// undefined in strict mode. Arrow functions again inherit 'this'
// from their definition scope — here, the module scope.
// ============================================================

const welcomeMessage= function() {
    console.log(`Welcome, ${this.username}!`);
    console.log(this);
}

welcomeMessage();

const welcomeMessageArrow= () => {
    console.log(`Welcome, ${this.username}!`);
    console.log(this);
}

welcomeMessageArrow();


// ============================================================
// SECTION 3: ARROW FUNCTIONS
//
// Arrow functions support a concise single-expression body.
// Using the comma operator here runs two expressions left to right
// and returns the value of the last one (num1 + num2).
// The console.log fires as a side effect before the return value.
// ============================================================

const add= (num1, num2) => (console.log("This is an arrow function"), num1 + num2);
console.log(add(5, 3));



// ============================================================
// SECTION 4: DESTRUCTURING
//
// Destructuring lets you unpack values from objects or arrays
// into named variables. It supports renaming, default values,
// nested access, rest collection, and function parameter unpacking.
// ============================================================

const user= {username:"Kapil", password: "12345", email: "kapil@js.com"};

// Object rest: 'username' is extracted, everything else collected into 'rest'.
const {username,  ...rest}= user;
console.log(username);
console.log(rest);

const numbers= [1, 2, 3, 4, 5];

// Array rest: first two elements named individually, remaining collected into 'restNumbers'.
const [first, second, ...restNumbers]= numbers;
console.log(first);
console.log(second);
console.log(restNumbers);

const user2= {username:"Kapil", password: "12345", email: "kapil@js.com"};

// Renaming during destructuring — original key: new variable name.
// Useful when converting snake_case API responses to camelCase variables.
const {username: user_name, password: user_password }= user2;
console.log(user_name);
console.log(user_password);

const user3= {username:"Kapil", password: "12345", email: "kapil@js.com", otherstuff: {weight: 100, id: 1234}};

// Nested destructuring with renaming and a default value.
// 'height' doesn't exist on user3, so user_height falls back to 170.
const {username:user_name2, password:user_password2, otherstuff: {weight: user_weight, id:user_id}, height: user_height= 170}= user3;
console.log(user_name2);
console.log(user_password2);
console.log(user_weight);
console.log(user_id);
console.log(user_height);

// Destructuring directly in function parameters — only the needed fields are pulled in.
// The arrow version uses an implicit return (no braces, returns the string expression directly).
function displayUserInfo({username, password}) {
    console.log(`Username: ${username}, Password: ${password}`);
}
const displayUserInfoArrow= ({username, password}) => (`Username: ${username}, Password: ${password}`)
const user4= {username:"Kapil", password: "12345"};
console.log(displayUserInfo(user4));
user4.username= [12,13];
console.log(displayUserInfo(user4));


// ============================================================
// SECTION 5: SPREAD SYNTAX
//
// The spread operator (...) expands an iterable into individual
// elements. Used for passing array items as function arguments,
// cloning and merging objects, and overriding specific fields.
// Later properties override earlier ones when keys conflict.
// ============================================================

function sum(a, b, c) {
    return a + b + c;
}
const numbersArray= [1, 2, 3];

// Spread unpacks the array into three separate arguments for sum().
// Spreading an array into an object converts indices to keys — index 2 is then overridden to 4.
console.log(sum(...numbersArray));
const newNumbers= {...numbersArray, 2: 4};
console.log(newNumbers);

const defaults = { theme: 'light', language: 'en', notifications: true };
const userPrefs = { theme: 'dark', fontSize: 16 };

// userPrefs spreads after defaults, so its 'theme' overrides the default.
// 'fontSize' is new and gets added. 'language' and 'notifications' stay from defaults.
const mergedvalues= {...defaults, ...userPrefs};
console.log(mergedvalues);