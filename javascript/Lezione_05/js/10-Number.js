var numIniziale = 15.6785432;

console.log(' il num arrotondato è: ' + numIniziale.toFixed(3));

console.log('2 cifre significative: ' + numIniziale.toPrecision(2));

// utilizzo interfaccia number

var x1 = true;
var x2 = false;
var x3 = '123';
var x4 = '123 456';
var x5 = 'ciao';
var x6 = new Date();

console.log(Number(x1));
console.log(Number(x2));
console.log(Number(x3));
console.log(Number(x4));
console.log(Number(x5));
console.log(Number(x6));


//parse int 
var a = parseInt('10');
var b = parseInt('10.99');
var c = parseInt('Ciao');

var d = parseInt('10',10); //base decimale
var e = parseInt('10011011110001101',2); //base binaria

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

//funzione eval
var p1 = 2;
var p2 = 5;

var ev1 = eval('p1 * p2');
var ev2 = eval('p1 + p2');
var ev3 = eval('p1 + 100');

console.log(ev1);
console.log(ev2);
console.log(ev3);

//isNaN
var numero = 30;
var stringa = 'ciao';

console.log('la variabile numero è un numero?' + isNaN(numero));
console.log('la variabile stringa è un numero?' + isNaN(stringa));
