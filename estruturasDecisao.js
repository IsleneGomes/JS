var a = 10;
var b = 10;
if (a > b) {
    //condicao a ser executada caso seja verdadeiro
    console.log("a maior que b");
} else if (b < a) {
    //senao, executa codigo abaixo
    console.log("b maior que a");
} else {
    console.log("a e b sao iguais");
}

if (a > b) {
    console.log("executar somente se a > b");
}
console.log("sempre executar");

var c = 80;
var d = 40;
if (c>= d) {
    console.log("c maior ou igual a d");
}
if (d <= c) {
    console.log("d menor ou igual a c");
}
var e = 10;
var f = "10";
if (e === f) {
    console.log("e é igual a f");
}else {
    console.log("e é diferente de f")
}

var g = 10;
var h = "10";
if (g !== h) {
    console.log("g diferente de h");
}else {
    console.log("g é igual a h");
}

/* Aula parte b */

var i = 4;
var j = 3;
var k = 5;
var l = 7;
if ((i > j) && (l> k)) {
    console.log("i maior que j e l maior que k")
}

if ((i == j) || (k == l)) {
    console.log("um dos dois eram validos")
}