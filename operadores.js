/*Aula Parte 1 */
var soma = 4 + 2;
var subtracao = 5 - 3;
var multiplicacao = 5 * 4;
var divisao = 20/4;
var resto = 20 % 3;

console.log ("soma: " + soma);
console.log ("subtracao: " + subtracao);
console.log ("multiplicacao: " + multiplicacao);
console.log ("divisao: " + divisao);
console.log ("resto: " + resto);

var num1 = 10;
var num2 = 50;
var resultado = (num2 + num1) / (8 + 2)
console.log("precedencia: " + resultado);

/*Aula Parte 2*/

//variavel incremento
var incremento = 1;
incremento = incremento + 1;
incremento++;
console.log("incremento: " + incremento);

var a = 5;
a += 6; //o mesmo que a = a + 6;
console.log("atribuicao com adicao: " + a);

var decremento = 5;
decremento = decremento - 1;
decremento --;
console.log("decremento: " + decremento);

var atribuicaoComSubtracao = 10;
atribuicaoComSubtracao -= 4 ; //atribuicaoComSubtracao = atribuicaoComSubtracao - 4;
console.log("atribuicao com subtracao: " + atribuicaoComSubtracao);

var atribuicaoComMultiplicacao = 4;
//o mesmo que atribuicaoComMultiplicacao = atribuicaoComMultiplicacao * 5;
atribuicaoComMultiplicacao *= 5;
console.log("atribuicao com multiplicacao: " + atribuicaoComMultiplicacao);

var atribuicaoComDivisao = 20;
//o mesmo que atribuicaoComDivisao = atribuicaoComDivisao / 4;
atribuicaoComDivisao /= 4;
console.log("atribuicao com divisao: " + atribuicaoComDivisao);

//incremento ++
var x = 4;
var y = 3;
var adicaoIncrementoPosterior = x + y ++;
var adicaoIncrementoAnterior = x + ++y;
console.log("adicao incremento posterior: " + adicaoIncrementoPosterior)
console.log("adicao incremento anterior: " + adicaoIncrementoAnterior)

//decremento --
var h = 5;
var g = 6;
var subtracaoIncrementoPosterior = h + g--;
var subtracaoIncrementoAnterior = h + --g;
console.log("subtracao com decremento posterior: " + subtracaoIncrementoPosterior)
console.log("subtracao com decremento anterior: " + subtracaoIncrementoAnterior)