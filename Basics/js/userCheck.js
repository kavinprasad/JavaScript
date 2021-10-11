let email = 'kavinprasad333@gmail.com';
let pass = 'Kavinprasad333';


function emailCheck (user){
    if (user.includes('@')) {
        return true;
    }else {
        return false;
    }
}
console.log(emailCheck(email));


function passCheck (pass){
    if ((pass.includes('Kavin')) && (pass.length > 6)) {
        return true;
    }else {
        return false;
    }
}
console.log(passCheck(pass));



