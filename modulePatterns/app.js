var greet = require('./greet1');
greet();

var greet2 = require('./greet2').greet;
greet2();

var greet3 = require('./greet3');
greet3.greet();
greet3.greeting = 'Change greet3 by previous greet3';

var greet3b = require('./greet3');
//xungament es veu canviat, és per que ens torna el cachejat... per tant.. el mateix objecte
greet3.greet();

//exemple de com independitzar els contructors
var greet4 = require('./greet4');
//com hem exportat el constructor, necessitem fer-lo servir per contruir:
var instanceGreet4 = new greet4();
instanceGreet4.greet();

//imprimim pel mètode que accedeix a les varibles privades, però no les exposa
var greet5 = require('./greet5');
greet5.greet();
//també podem importar la funció en comptes de tot el modul
var greet5b = require('./greet5').greet;
greet5b();