
//step learn 1 
//Si posem codi directament aqui quan facin el "require" tindrem l'execuci� directa
//console.log('greet from greet.js');

//step learn 2 
//si el que fem es definir una funci�, al fer el require carreguem la funci�
//var greet = function () {
//    console.log('greet from function from greet.js');
//}
//greet();


//step learn 3 --> per poder publicar la funci� fora del fitxer l'exportem
var greet = function () {
    console.log('greet from function from greet.js step3');
}
module.exports = greet; // a trav�s d'aquesta variable/funci� podem anar portant les funcions a fora del modul