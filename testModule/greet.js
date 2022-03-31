//aquest serà el fitxer de mòdul, simplement una variable que és una funció i la passem pel export (per fer-la servir en un altre lloc)
var greet = function () {
    console.log('Hola');
};

module.exports = greet;