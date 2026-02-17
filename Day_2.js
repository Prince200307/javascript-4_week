// SECTION 1: THIS KEYWORD AND ARROW FUNCTIONS
// 'this' refers to the object that is executing the current function, but behaves differently in arrow functions

// CODE FOR SECTION 1:
const user= {
    username: "john",
    price: 10,

    client: {
        name: "client1",
        welcomeMessage2: () => {
            console.log(`Welcome2, ${this.name}!`);
            console.log(this);
        }
    },
    client2: {
        nam1e: "client2",
        welcomeMessage3: (client2) => {
            console.log(`Welcome3, ${client2.name}!`);
            console.log(client2);
        }
    },

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


// SECTION 2: THIS KEYWORD WITHOUT OBJECT CONTEXT
// Functions without object context - 'this' refers to global object

// CODE FOR SECTION 2:
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


// SECTION 3: ARROW FUNCTIONS
// Arrow function shorthand syntax with implicit return

// CODE FOR SECTION 3:
const add= (num1, num2) => (console.log("This is an arrow function"), num1 + num2);
console.log(add(5, 3));



// SECTION 4: DESTRUCTURING
// Extract properties from objects and arrays, with renaming, defaults, and function parameters

// CODE FOR SECTION 4:
const user= {username:"Kapil", password: "12345", email: "kapil@js.com"};
const {username,  ...rest}= user;
console.log(username);
console.log(rest);

const numbers= [1, 2, 3, 4, 5];
const [first, second, ...restNumbers]= numbers;
console.log(first);
console.log(second);
console.log(restNumbers);

const user2= {username:"Kapil", password: "12345", email: "kapil@js.com"};
const {username: user_name, password: user_password }= user2;
console.log(user_name);
console.log(user_password);

const user3= {username:"Kapil", password: "12345", email: "kapil@js.com", otherstuff: {weight: 100, id: 1234}};
const {username:user_name2, password:user_password2, otherstuff: {weight: user_weight, id:user_id}, height: user_height= 170}= user3;
console.log(user_name2);
console.log(user_password2);
console.log(user_weight);
console.log(user_id);
console.log(user_height);

function displayUserInfo({username, password}) {
    console.log(`Username: ${username}, Password: ${password}`);
}
const displayUserInfoArrow= ({username, password}) => (`Username: ${username}, Password: ${password}`)
const user4= {username:"Kapil", password: "12345"};
console.log(displayUserInfo(user4));
user4.username= [12,13];
console.log(displayUserInfo(user4));


// SECTION 5: SPREAD SYNTAX
// Spread operator for unpacking arrays and merging objects

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