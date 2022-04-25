function Greetr(){
    this.greeting = 'Hello greet4 world';
    this.greet = function(){
        console.log(this.greeting);
    };
};

//en comptes d'exportar un objecte (new). exportem la funció que el genera
module.exports = Greetr;