//var a = 1;
//var b = 2;
//console.log(a+b);

//funció bàsica
function greet(){
    console.log('hi');
}

//la funcio anterior crido
greet();

//ara tinc una funció que rep funció de paràmetre
function logGreeting(fn){
    //crido la funció que rebo per paràmetre
    fn();
}
//paso la funció primera en la segona funció
logGreeting(greet);

//aqui les funcions tb poden ser variables...
var greetMe = function() { console.log('Hi var')};

greetMe();