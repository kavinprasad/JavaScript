// Normal Function Declaration 
// function sayHello(name){
//     return `Hello ${name}`;
// }

// Variable Before Function Declaration 
// let sayHello = function (name){
//     return `Hello ${name}`;
// }

//   Arrow Function with return
// let sayHello = (name) => {
//     return `Hello ${name}`;
// }

//   Arrow Function without return
// let sayHello = (name) => `Hello ${name}`


// console.log(sayHello('Kavin'));



let myTodos = [ {
    title: 'Buy a HeadPhone',
    isDone: true
}, {
    title: 'Write a Record',
    isDone: false
}, {
     title: 'Buy a Car',
     isDone: false
} ];
let filter = myTodos.filter((todo) => todo.isDone === true);
console.log(filter);


let phone ={
    title: 'Samsung',
    price: '10,000rs',
    desp: function () {
        return `This Phone Price is ${this.price}.`
    }
}
console.log(phone.desp());