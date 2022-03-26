//function contructors --> funcions per generar objectes
function Person(firstname, lastname) {
    this.lastname = lastname;
    this.firstname = firstname;

    //els métodes de la classe els podem declarar en el constructor
    this.constructorFunction = function(){

        console.log('Constructor function -->Nom:' + this.firstname + " Cognom:" + this.lastname);
    }
}


//Pero també es poden declarar mètodes a fora, a través del prototype
Person.prototype.prototypeFunction = function () {
    console.log('Prototype function -->Nom:' + this.firstname + " Cognom:" + this.lastname);
}


var miquel = new Person('Miquel', 'Vidal');

console.log('Nom:' + miquel.firstname + " Cognom:" + miquel.lastname);
miquel.constructorFunction();
miquel.prototypeFunction();

var marta = new Person('Marta', 'Moral');
marta.constructorFunction();
marta.prototypeFunction();

//aqui mostrem que en el prototype s'hi desa les dades de clase afegides
console.log(marta.__proto__);
console.log(miquel.__proto__);
//pq és una variable compartida de classe, si les comparem: (recorda ordre operacions... )
console.log('Comparteixen variable __proto__ :'+(marta.__proto__ === miquel.__proto__));
//però no es funció statica... per tant proto no podràs accedir sense instancia
//Person.prototypeFunction();