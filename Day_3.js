// // ============================================================
// // MAP - Transform every element in an array
// //
// // Returns a NEW array of the same length. Original is untouched.
// // Use when you need to convert/transform every element.
// // ============================================================

// const numbers = [1, 2, 3, 4, 5];
// const squaredNumbers = numbers.map(num => num*num);

// // When using braces {}, you must explicitly return.
// // Without braces, the expression after => is implicitly returned.
// const addedNumbers = numbers.map((num) => {
//     console.log(`Adding ${num} to ${num}`);
//     return num + num;
// });
// console.log(squaredNumbers);
// console.log(addedNumbers);


// // ============================================================
// // MAP WITH OBJECTS - Extract, transform, or reshape data
// //
// // Most common React pattern: transforming an array of objects
// // into a different shape for rendering or processing.
// // ============================================================

const users = [
  { id: 1, firstName: 'Alice', lastName: 'Johnson', age: 30 },
  { id: 2, firstName: 'Bob',   lastName: 'Smith',   age: 25 },
  { id: 3, firstName: 'Carol', lastName: 'White',   age: 35 }
];

// Extract a single field from each object
const first_names= users.map(user => user.firstName);
console.log(first_names);

// Combine multiple fields into a string
const full_names= users.map(user => `${user.firstName} ${user.lastName}`);
console.log(full_names);

// Transform into a completely new object shape.
// Parentheses around {} are required to return an object literal,
// otherwise JavaScript interprets {} as a function body.
const simplified_users= users.map(user => ({id: user.id, fullName: `${user.firstName} ${user.lastName}`, age: user.age}));
console.log(simplified_users);

// Add a computed field to existing object using spread.
// This creates new objects - originals remain unchanged.
const withfullnames= users.map(user => ({...user, fullName: `${user.firstName} ${user.lastName}`}));
console.log(withfullnames);


// // ============================================================
// // MAP WITH INDEX - When position matters
// //
// // The second parameter in map's callback is the index (0, 1, 2...).
// // Useful for adding numbering or unique IDs during transformation.
// // ============================================================

// const items = ["apple", "banana", "cherry"];

// // Create numbered list (1-based indexing for display)
// const indexedItems = items.map((item, index) => `${index + 1}. ${item}`);
// console.log(indexedItems);

// // Generate objects with auto-incrementing IDs.
// // Note: index+=1 modifies index but still returns the incremented value.
// const withids= items.map((item, index) => ({id: index+=1, name: item}));
// console.log(withids);


// // ============================================================
// // FILTER - Select elements that pass a test
// //
// // Returns a NEW array containing only elements where the callback
// // returns true. Length can be 0 (nothing matched) to original.length
// // (everything matched). Original array is never modified.
// // ============================================================

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // Keep only elements that satisfy the condition
// const evennumbers= numbers.filter(num => num% 2===0);
// console.log(evennumbers);

// const oddnumbers= numbers.filter(num => num% 2!==0);
// console.log(oddnumbers);


// // ============================================================
// // FILTER WITH OBJECTS - Query and subset data
// //
// // Essential for search, sorting visible items, and implementing
// // filters in UIs. Each filter returns a new array - no mutation.
// // ============================================================

// const users = [
//   { id: 1, name: 'Alice', role: 'admin',  age: 30, active: true  },
//   { id: 2, name: 'Bob',   role: 'user',   age: 25, active: false },
//   { id: 3, name: 'Carol', role: 'user',   age: 35, active: true  },
//   { id: 4, name: 'Dave',  role: 'admin',  age: 28, active: true  }
// ];

// // Filter by boolean field
// const active_users= users.filter(user => user.active);
// console.log(active_users);

// // Filter by string comparison
// const admin_users= users.filter(user => user.role=== "admin");
// console.log(admin_users);

// // Multiple conditions combined - destructuring in the callback parameter
// const active_adults= users.filter(({active, age}) => active && age>= 30);
// console.log(active_adults);

// // Filter using string methods
// const name_start_with_A= users.filter(user => user.name.startsWith("A"));
// console.log(name_start_with_A);


// // ============================================================
// // FILTER WITH BOOLEAN COERCION - Remove falsy values
// //
// // filter(Boolean) is a shorthand to remove null, undefined,
// // empty strings, 0, false, and NaN from an array.
// // Extremely useful when APIs return optional/nullable fields.
// // ============================================================

// const apiData = [
//   { id: 1, name: 'Alice', profilePic: 'alice.jpg' },
//   { id: 2, name: 'Bob',   profilePic: null },
//   { id: 3, name: 'Carol', profilePic: 'carol.jpg' },
//   { id: 4, name: 'Dave',  profilePic: undefined }
// ];

// // Extract profilePic field, then remove null/undefined entries.
// // Boolean as a callback converts each value to true/false,
// // and filter keeps only truthy results.
// const validPics = apiData
//   .map(user => user.profilePic)
//   .filter(Boolean);

// console.log(validPics); 


// // ============================================================
// // REDUCE - Accumulate a single value from an array
// //
// // Most powerful and flexible array method. Can produce numbers,
// // strings, objects, or even arrays. Always provide an initial
// // value (second argument) to avoid bugs with empty arrays.
// // ============================================================

// const numbers = [1, 2, 3, 4, 72, 5];

// // The callback receives (accumulator, currentElement).
// // Accumulator starts as the initial value (0 here), then becomes
// // whatever you return from each iteration.
// const sum= numbers.reduce((total, n) => {
//   console.log(`Adding ${n} to total ${total}`);
//   return total + n;
// }, 0);
// console.log(sum);

// const product= numbers.reduce((total, n) => total * n, 1);
// console.log(product);

// // Find maximum by comparing each element to current max.
// // Initial value is first element to handle all-negative arrays correctly.
// const max= numbers.reduce((max, n) => max > n ? max : n, numbers[0]);
// console.log(max);


// // ============================================================
// // REDUCE WITH OBJECTS - Group, index, or restructure data
// //
// // Reduce can build completely new data structures. Here we
// // transform an array into an object grouped by a field value.
// // This is a foundational pattern for data processing.
// // ============================================================

// const users = [
//   { id: 1, name: 'Alice', role: 'admin' },
//   { id: 2, name: 'Bob',   role: 'user'  },
//   { id: 3, name: 'Carol', role: 'user'  },
//   { id: 4, name: 'Dave',  role: 'admin' }
// ];

// // Group users by role. If the role key doesn't exist yet in our
// // accumulator object, initialize it as an empty array first.
// const groupedByRole = users.reduce((grouped, user) => {
//   const { role } = user;
//   if (!grouped[role]) {
//     grouped[role] = [];
//   }
//   grouped[role].push(user);
//   return grouped;
// }, {});

// console.log(groupedByRole);


// // ============================================================
// // FIND - Get the first matching element
// //
// // Returns the first element where callback returns true, or
// // undefined if no match. Unlike filter (which returns an array),
// // find returns the element directly. Use when you need exactly one.
// // ============================================================

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // Stops searching as soon as condition is true (performance benefit)
// const firstEven= numbers.find(num => num% 2===0);
// console.log(firstEven);

// const firstGreaterThan5= numbers.find(num => num> 5);
// console.log(firstGreaterThan5);

// const firstMultipleOf3= numbers.find(num => num% 3===0);
// console.log(firstMultipleOf3);


// // ============================================================
// // FIND WITH OBJECTS - Lookup by ID or property
// //
// // Most common use case: finding a specific user, product, or
// // record by ID. Always check if result is undefined before using.
// // ============================================================

// const users = [
//   { id: 1, name: 'Alice', role: 'admin' },
//   { id: 2, name: 'Bob',   role: 'user'  },
//   { id: 3, name: 'Carol', role: 'user'  },
//   { id: 4, name: 'Dave',  role: 'admin' }
// ];

// const firstAdmin= users.find(user => user.role=== "admin");
// console.log(firstAdmin);

// const firstUser= users.find(user => user.role=== "user");
// console.log(firstUser);

// const firstWithNameStartingWithC= users.find(user => user.name.startsWith("C"));
// console.log(firstWithNameStartingWithC);

// // When no match is found, find returns undefined.
// // Always guard against this before accessing properties.
// const nobody= users.find(user => user.name.startsWith("Z"));
// if (nobody) {
//     console.log(nobody);
// } else {
//     console.log("No user found with name starting with Z");
// }


// // ============================================================
// // SOME - Check if at least ONE element passes a test
// //
// // Returns true/false. Short-circuits (stops checking) as soon as
// // one element returns true. Use for existence checks.
// // ============================================================

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // "Does this array contain at least one even number?"
// const hasEven= numbers.some(num => num% 2===0);
// console.log(hasEven);


// // SOME WITH OBJECTS - Existence checks in collections

// const users = [
//   { name: 'Alice', role: 'admin' },
//   { name: 'Bob',   role: 'user'  }
// ];

// const hasAdmin= users.some(user => user.role=== "admin");
// console.log(hasAdmin);

// const hasManager= users.some(user => user.role=== "manager");
// console.log(hasManager);


// // ============================================================
// // EVERY - Check if ALL elements pass a test
// //
// // Returns true only if every single element returns true.
// // Short-circuits on first false. Use for validation checks.
// // ============================================================

// const numbers = [1, 2, 3, 4, 5];

// // "Are all numbers positive?"
// const allPositive= numbers.every(num => num> 0);
// console.log(allPositive);

// const allLessThan10= numbers.every(num => num< 10);
// console.log(allLessThan10);

// const allEven= numbers.every(num => num% 2===0);
// console.log(allEven);


// // EVERY WITH OBJECTS - Validate collections

// const products = [
//   { name: 'Laptop', inStock: true  },
//   { name: 'Mouse',  inStock: true  },
//   { name: 'Desk',   inStock: false }
// ];

// // "Can we fulfill an order with all these products?"
// const allInStock= products.every(product => product.inStock);
// console.log(allInStock);

// // "Do all products have names?" (data validation)
// const allHaveNames= products.every(product => product.name);
// console.log(allHaveNames);


// // ============================================================
// // METHOD CHAINING - Compose transformations
// //
// // Since map and filter return arrays, you can chain multiple
// // operations. Each method works on the output of the previous one.
// // Reduce typically goes last since it returns a single value.
// // ============================================================

// const employees = [
//   { id: 1, name: 'Alice', dept: 'engineering', salary: 95000, active: true  },
//   { id: 2, name: 'Bob',   dept: 'marketing',   salary: 72000, active: true  },
//   { id: 3, name: 'Carol', dept: 'engineering', salary: 105000, active: false },
//   { id: 4, name: 'Dave',  dept: 'engineering', salary: 88000, active: true  },
//   { id: 5, name: 'Eve',   dept: 'marketing',   salary: 68000, active: true  }
// ];

// // Long chains can be hard to read - each step processes the previous result.
// // This finds active engineers earning over 90k, transforms to {name, salary},
// // then sorts by salary descending.
// const result= employees.filter(({active}) => active).filter(({dept}) => dept=== "engineering").filter(({salary}) => salary> 90000).map(({name, salary}) => ({name, salary})).sort((a, b) => b.salary - a.salary);
// console.log(result);

// // Breaking into named steps improves readability - same result, clearer intent.
// // Use this style when the chain's purpose isn't immediately obvious.
// const result= employees.filter(({active}) => active);
// const activeEngineers= result.filter(({dept}) => dept=== "engineering");
// const highEarners= activeEngineers.filter(({salary}) => salary> 90000);
// const namesAndSalaries= highEarners.map(({name, salary}) => ({name, salary}));
// const sortedBySalary= namesAndSalaries.sort((a, b) => b.salary - a.salary);
// console.log(sortedBySalary);