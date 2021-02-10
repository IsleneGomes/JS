function multiplicacao(p1 , p2) {
    console.log("função multiplicação executada");
    return p1 * p2;
}
var resultado = multiplicacao (4 ,3);
console.log(resultado);

function soma(a ,b) {
    console.log("Resultado da Soma");
    return a + b
}
var resultado = soma (5 , 9);
console.log(resultado);

function saudacao(nome){
    console.log("Bem vinda " + nome);
}
saudacao("Islene");

funcaoSemParametro();
function funcaoSemParametro(){
    var h = 5;
    var l = 8;
    console.log("Soma sem parâmetro: " + (h + l));
}
