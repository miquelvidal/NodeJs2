var obj = {
	name: 'Miquel Vidal',
	greet: function() {
		console.log(`Hello ${ this.name }`);
	},
	greetP: function(param) {
		console.log(`Hello ${ this.name}`);
		console.log(`Extra ${ param}`);
	}
}
//cridem el nostre objecte el seu metode, fins aqui normal
obj.greet();

//pero "call" ens permet cridar un metode passant altre objecte, substituint el this
obj.greet.call({name: 'Marta Moral'});
obj.greet.apply({name: 'Sara Vidal'});

//si hi ha parametres, apply entre en joc... per que es poden passar per array
obj.greetP.call({name: 'Mel'},'Miquel');
obj.greetP.call({name: 'Llum'},['Miquel']);
