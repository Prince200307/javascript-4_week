
/*let a= 7;
let b= 3;
function add(a,b){
        console.log("Inside add function");
        return a+b;
}
add(a,b);
console.log(a);
console.log(add);
*/

//For variables, we have three keywords: var(outdated and not block scoped), let and const.
/*
const age= 30;
//age= 31;

const user= {
    name: "John",
    age: 30
};
console.log(user.name);
console.log(user.age);
//user= {
//    name: "Jane",
//    age: 25
//};
user.name= "Jane";
user.age= 25;
console.log(user.name);
console.log(user.age);

const number= [1,2,3];
//number= [4,5,6];
number.push(4);
*/

// if (true) {
//         const blockScopedVariable= "I am block scoped";
//         console.log(blockScopedVariable);
// }
// //console.log(blockScopedVariable); //error

// if (true) {
//         var functionScopedVariable= "I am function scoped";
//         console.log(functionScopedVariable);
// }
// console.log(functionScopedVariable); //works, but not recommended

//template literals
const price= 10;
const message= `Price is $${price}`;

const total= `Total is $${price*1.1}`;

const html= `<div>
        <h1>${message}</h1>
        <p>${total}</p>
</div>`;
console.log(html);

const shout= (text) => text.toUpperCase();
console.log(`Message is ${shout(message)}`);