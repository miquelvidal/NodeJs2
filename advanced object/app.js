//function contructors --> funcions per generar objectes
function Person(firstname, lastname) {
    this.lastname = lastname;
    this.firstname = firstname;

    //els m�todes de la classe els podem declarar en el constructor
    this.constructorFunction = function(){

        console.log('Constructor function -->Nom:' + this.firstname + " Cognom:" + this.lastname);
    }
}


//Pero tamb� es poden declarar m�todes a fora, a trav�s del prototype
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
//pq �s una variable compartida de classe, si les comparem: (recorda ordre operacions... )
console.log('Comparteixen variable __proto__ :'+(marta.__proto__ === miquel.__proto__));
//per� no es funci� statica... per tant proto no podr�s accedir sense instancia
//Person.prototypeFunction();