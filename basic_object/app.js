var person = {
    firstname: 'Miquel',
    lastname: 'Vidal',
    greet: function () {
        console.log('Greet Object, ' + this.firstname + ' ' + this.lastname);
    }
};
person.greet();