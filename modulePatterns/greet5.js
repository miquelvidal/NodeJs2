//la variable es queda "private", el métode l'exposarà pero ella queda privada
var greeting = 'Hello greet5 world';

function greet(){
    console.log(greeting);
}

module.exports = {
    greet:greet
};