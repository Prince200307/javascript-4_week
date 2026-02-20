// Optional Chaining (?.) — safely access deeply nested properties
// Returns undefined instead of throwing if a property doesn't exist

const user = {
    firstName: "John",
    lastName: "Doe",
    age: 36,
    address: {
        city: "New York",
    },
    getFullName: function () {
        return this.firstName + " " + this.lastName
    },
    getZip: function () {
        return this.address?.zip ?? "Zip not found"
    }
}

// Traditional approach: manually check each level with &&
console.log(user.address && user.address.zip)
// Optional chaining: short-circuits to undefined if address or zip is missing
console.log(user.address?.zip)
console.log(user.address?.city)

// Works with methods too — ?.() calls only if the function exists
console.log(user.getFullName?.())
console.log(user.getZip?.())

// Nullish Coalescing (??) vs Logical OR (||)
// ||  treats 0, false, '' as falsy → falls through to default
// ??  only treats null and undefined as nullish → preserves 0, false, ''

const value1 = 0;
const value2 = false;
const value3 = '';
const value4 = null;
const value5 = undefined;

// Using || — any falsy value triggers the default
console.log(value1 || 'default'); // 'default' (0 is falsy)
console.log(value2 || 'default'); // 'default' (false is falsy)
console.log(value3 || 'default'); // 'default' ('' is falsy)
console.log(value4 || 'default'); // 'default' (null is falsy)
console.log(value5 || 'default'); // 'default' (undefined is falsy)

// Using ?? — only null/undefined trigger the default
console.log(value1 ?? 'default'); // 0 (NOT null/undefined)
console.log(value2 ?? 'default'); // false (NOT null/undefined)
console.log(value3 ?? 'default'); // '' (NOT null/undefined)
console.log(value4 ?? 'default'); // 'default' (null)
console.log(value5 ?? 'default'); // 'default' (undefined)