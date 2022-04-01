//importem cada un dels fitxers com si fos un modul del modul
var english = require('./english');
var spanish = require('./spanish');
//el que tornem del modul és un objecte amb els moduls anteriors
module.exports = {
    english: english,
    spanish: spanish
};