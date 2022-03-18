
//step learn 1 
//Si posem codi directament aqui quan facin el "require" tindrem l'execució directa
//console.log('greet from greet.js');

//step learn 2 
//si el que fem es definir una funció, al fer el require carreguem la funció
//var greet = function () {
//    console.log('greet from function from greet.js');
//}
//greet();


//step learn 3 --> per poder publicar la funció fora del fitxer l'exportem
var greet = function () {
    console.log('greet from function from greet.js step3');
}
module.exports = greet; // a través d'aquesta variable/funció podem anar portant les funcions a fora del modul