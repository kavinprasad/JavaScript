let covertRupees = (dollar) => {
    if (typeof dollar === 'number'){
        return dollar  * 74;
    } else {
        throw Error('Amount need to be numbers');
    }
}



try {
    console.log(covertRupees('one'));
} catch (error){
    console.log(error);
}

console.log('This line Will Not Show If Program Crashes');