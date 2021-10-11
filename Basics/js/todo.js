let myTodos = ['Go To Gym','Record 10 Videos Today','Write Abservation Today'];

myTodos.unshift('Go To Shop');
myTodos.push('Take print Out');

// console.log(myTodos);

// myTodos.forEach(function (todo, pos){
//     console.log(`${pos + 1}. ${todo}`);
// });

for(i= 0 ;i< myTodos.length ;i++){
    console.log(`${i+1}. ${myTodos[i]}.`);
}