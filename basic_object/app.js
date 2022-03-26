//curly brackets to define literals of objects
var person = {
    firstname: 'Miquel',
    lastname: 'Vidal',
    greet: function () {
        console.log('Greet Object, ' + this.firstname + ' ' + this.lastname);
    }
};
person.greet();

//tamb� es poden accedir a les dades per [ ] --> molt �til per accedir din�micament a variables d'un objecte
console.log('Variable accedida per [] ' +person['firstname']);
