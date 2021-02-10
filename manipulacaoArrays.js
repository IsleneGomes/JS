var carros = ["Gol", "Palio", "Uno", "Sandero"];

//pop remove o ultimo elemento do array e retorna o elemento removido
var carro = carros.pop(); 
console.log(carro);

//push insere o elemento no fim do array e retorna seu novo tamanho
var x = carros.push("Fiesta");
//console.log(x);

//shift remove o primeiro elemento do array e retona o elemento removido e atualiza os outros índices
var carro = carros.shift();
//console.log(carro);

//unshift insere um elemento no início do array e atualiza os outros indiuces e retorna o novo tamaho do array
var carro = carros.unshift("Corolla")
//console.log(carro);

//atualizar elemento do indice informado
carros[2] = "Novo Uno";

//delete apaga o elemento no indice informado mas no indice fica undefined no lugar
delete carros[2];

//splice adiciona valores nos indice indicado. Primeiro parâmetro mostra a posição inicial, 2º: qtos elementos serão removidos
//a partir da posição inicial, 3º, 4º, ...os elementos que serão inseridos

carros.splice(2, 1, "Fusion");

//concat concatena um array em outro e retorna o novo array criado
var carrosAntigos =["Brasilia", "Monza", "Fusca"]
var carrosAntigos2 = ["Corcel", "Chevett"]
var todosCarros = carros.concat(carrosAntigos, carrosAntigos2);

//console.log(todosCarros);


//slice cria um novo array sem alterar o array origina.
//1º parâmetro: posição inicial
//2º parâmetro (opcional): posição final
var y = todosCarros.slice(0)
console.log(y)

var w = todosCarros.slice(2,4)
//console.log(todosCarros)
console.log(w)

