require('./greet.js'); //cridem el 'modul'

//si intentem cridar aqui directament greet() --> no funcionar� pq est� en ambit protected dle fitxer

//si exportem els m�todes els podrem cridar per fora del fitxer
var greetFunctionModule = require('./greet.js'); //cridem el 'modul' i queda encapsulat en una variable
greetFunctionModule(); //en aquest cas ens em emportat la funci�

