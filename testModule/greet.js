//aquest ser� el fitxer de m�dul, simplement una variable que �s una funci� i la passem pel export (per fer-la servir en un altre lloc)
var greet = function () {
    console.log('Hola');
    console.log('Why not');
};

module.exports = greet;