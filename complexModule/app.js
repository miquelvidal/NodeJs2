//en aquest exercici inclourem més fitxers que un simple fitxer "required"...
//tirarem d'una carpeta sencera
var greet = require('./greet'); //requreixo el directori sencer, carregarà el index i aquest porta la resta

greet.english();
greet.spanish();