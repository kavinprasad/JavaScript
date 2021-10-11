function sayHello (name){
    console.log(`Hi ${name}`);
}
sayHello('Kavin');  



function fullName(firstName,secondName){
    console.log(`${firstName} ${secondName}`);
}
let name = 'Kavin';
let name1 = 'Prasad';
fullName(name,name1);


function addTwoNumbers(num1,num2){
    let added = num1 + num2;
    return added;
}
console.log(`Your Result is ${addTwoNumbers(100,100)}`);


let sayBye = function(name){
    console.log(`Hi ${name}`);
}
sayBye(`Kavin`);