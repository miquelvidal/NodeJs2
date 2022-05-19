var EventEmitter = require('events');
var util = require('util');

function Greetr(){
	//farem la crida del constructor del pare,així l'herencia es millor, les inicialitzacions, ..
	EventEmitter.call(this);
	this.greeting = 'Hello World!';
}

util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function(data) {
	console.log(this.greeting + ':'+data);
	this.emit('greet');
}

var greeter1 = new Greetr();

greeter1.on('greet',function(data){ console.log('Some one greet:'+data);});

greeter1.greet('Sara');
