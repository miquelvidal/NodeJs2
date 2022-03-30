//pas per valor
function change(b) {
    b = 2;
}

var a = 1;
change(a);
console.log(a);

//pas per referencia
function changeObj(d) {
    d.prop1 = function() {};
    d.prop2 = {};
}

var c = {};
c.prop1 = {};
console.log('pre change:');
console.log(c);
changeObj(c);
console.log('post change:');
console.log(c);