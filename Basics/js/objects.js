let heros = ['Ironman','Thor','Superman','Spiderman','Hulk'];

let myObject = {
    title: 'Html,Css & Js',
    author: 'Kavin Prasad',
    courseDescripition: 'Here Comes Course Description!!!',
    price: '999rs',
    language: 'Tamil',

    printPrice: function () {
        console.log(`Hi This is Price`);
    },
    log: function (data) {
        console.log(data);
    },
    changePrice: function (newPrice){
        this.price = newPrice;
    }
}

myObject.changePrice('5000rs');
console.log(`My Course Title is ${myObject.title}!!! Its Price is ${myObject.price}`);
myObject.price = '3000rs';

