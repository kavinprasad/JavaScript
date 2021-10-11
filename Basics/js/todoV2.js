let myTodos = [];

myTodos.push('Go To Bike Ride');
myTodos.push('Go To Gym');
myTodos.push('Record 30 videos');
myTodos.push('Buy a Phone');
myTodos.push('Buy a Car');
// console.log(myTodos.indexOf('Go To Gym'));



//       findIndex
// let findTodo = myTodos.findIndex(function(todo){
//     return todo == 'Go To Gym';
// });
// console.log(findTodo);

// let findTodo = function (todosList, searchItem){
//     let result = todosList.findIndex(function(todo) {
//     return todo.toLowerCase() == searchItem.toLowerCase() ;
//     })
//     return result ;
// }
// console.log(findTodo (myTodos,'buy a phone'));



//          find 
// let findTodo = myTodos.find(function(todo){
//     return todo.lowerCase() == 'Go To Gym';
// });
// console.log(findTodo);

let findTodo = function (todoList, searchItem){
    let result = todoList.find(function(todo){
        return todo.toLowerCase() == searchItem.toLowerCase() ;
    })
    return result;
}
console.log(findTodo(myTodos,'BUY A CAR'));
