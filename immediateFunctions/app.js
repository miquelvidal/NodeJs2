//funcio creada i invocada inmediatament

var firstname = 'Sara';

(function (surname) {
    var firstname = 'Miquel';
    console.log(firstname);
    console.log(surname);
}('Vidal'))

//var firstname = 'Jane';

console.log(firstname);