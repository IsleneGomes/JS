//Aula de Estruturas de Repetição - Parte 1
for (var j = 0; j <= 10; j++) {
    console.log("Imprima teste 1: " + j);
}

var carros = ["Gol", "Palio", "Uno", "Celta", "Sandero", "Voyage"];

    for (var i = 0; i< carros.length; i++) {
    console.log("Imprima carros incremento: " + carros[i]);
    }

//do fim para o inicio do array
    for (var i = carros.length - 1; i >= 0; i--) {
    console.log("Imprima carros decremento: " + carros[i]);
    }

//Aula de Estruturas de Repetição - Parte 2

    var k = 0;
    while (k < carros.length) {
    console.log("Imprima carros: " + carros[k]);
    k++;
    }

    while (true) {
        console.log("Olá");
        break;
    }

    var k = 0;
    while (k < carros.length) {
        console.log(carros[k]);
        if (carros [k] === "Palio") {
            console.log("Encontrei o Palio");
            break;
        }
        k++;
    }

    var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var c = 0;
    while(c < numeros.length) {
        var num = numeros [c];
        c++;

        if (num % 2 === 0) {
            console.log(num + " é par");
            continue;
        }
        console.log(num + " é ímpar");
    
    //Aula de Estruturas de Repetição - Parte 3

var w = 30;
do {
    w++;
    console.log(w);
} while (w < 10);

var carros = ["Gol", "Palio", "Uno", "Celta", "Sandero", "Voyage"];
for (var carro of carros) {
    console.log(carro);
}
