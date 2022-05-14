//quarta expansió dels events, ara extendrem el natiu de node
var EventEmitter = require('events');
var util = require('util');


function Greetr() {
    this.greeting = 'Hello world Greetr()';
}

//veure que ja es recomana fer extends.. però l'exercici no està preparat
util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function() {
    console.log(this.greeting);
    this.emit('greet');
};

//objecte amb string del constructor amb el hola mon
var greeter1 = new Greetr();

//com l'objecte l'hem fet heredar de l'EventEmitter te emit i subscrició a topics
greeter1.on('greet', function(){
    console.log('Someone greeted!');
});

greeter1.greet();