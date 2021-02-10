/* Aula - Calculadora Parte 1*/

var operacao = "porcentagem";
var num1 = 34;
var num2 = 12;

if (operacao === "soma") {
    resultado = num1 + num2;
} else if (operacao === "subtracao"){
    resultado = num1 - num2;
} else if (operacao === "multiplicacao") {
    resultado = num1 * num2;
} else if (operacao === "divisao") {
    resultado = num1 / num2
    /*Aula - Calculadora Parte 2 */
} else if (operacao === "resto") {
    resultado = num1 % num2
} else if (operacao === "porcentagem") {
    resultado = num1 * num2 /100
}
console.log("O resultado eh: " + resultado);



