//curly brackets to define literals of objects
var person = {
    firstname: 'Miquel',
    lastname: 'Vidal',
    greet: function () {
        console.log('Greet Object, ' + this.firstname + ' ' + this.lastname);
    }
};
person.greet();

//també es poden accedir a les dades per [ ] --> molt útil per accedir dinàmicament a variables d'un objecte
console.log('Variable accedida per [] ' +person['firstname']);
