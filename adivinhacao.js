/*
//1 . Gerar um numero aleatório entre 1 e 100
//2.  Máximo 10 tentativas - inicializar o número de tentativas como 10;(decremento)
//3.  Pedir o jogador pata tentar adivinhar o número
//4.  Decrementar o número de tentativas;
//5.  Verificar se a tentativa está correta;
//6.  Se estiver correta:
    -Informar que acertou o número
    - Encerrar o jogo
//7.  Se estiver incorreto, e acabaram as tentativas:
    - Informar que ele não venceu
    - Encerrar o jogo
//8.  Se estiver incorreta, e ainda existirem tentativas:
    - Informar se a tentativa é maior ou menor que o número sorteado
    - Pedir outra tentativa para o jogador*/


var readline = require("readline");
var r1 = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
})
var numeroAleatorio = Math.round(Math.random()*100);
if (numeroAleatorio === 0) {
    numeroAleatorio = 1;
}
var numeroTentativas = 10;
var numero;
//console.log(numeroAleatorio);

pergunta ()
function pergunta() {
    r1.question("Digite um número: ", function(numero){
        numero = parseInt(numero);
        console.log(numero);
        numeroTentativas --;
        if (numero === numeroAleatorio) {
            console.log("Parabéns você acertou o número!");
        r1.close();
        }else if (numeroTentativas === 0) {
            console.log("Que pena, você não descobriu o número em 10 tentativas!");
        r1.close();
        } else if (numero > numeroAleatorio){
            console.log("Número errado, você ainda tem " + numeroTentativas + " tentativas, o número informado é maior que o número sorteado");
            pergunta();
        } else if (numero < numeroAleatorio){
            console.log("Número errado, você ainda tem " + numeroTentativas + " tentativas, o número informado é menor que o número sorteado");
            pergunta();
        }
    })
    
}
