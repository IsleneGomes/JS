/* Desafio explicado para estudo*/

// 1º é necessário criar a variável fs(file system) com o comando require("fs"). É através dele que conseguimos acessar o disco com informações atualizadas do arquivo.
var fs = require("fs");
// 2º é necessário criar a váriável que vai jogar todos os valores dentro dela e passar cada um dos arrays do arquivo json
var pessoas = null;
// 3º usar o comando readFile para ler o arquivo que se deseja. Para isso é necessário usar o fs que criamos seguido do comando de leitura. Dentro do parênteses, colocamos o nome do arquivo, seguido de utf-8, e da function (err, data), que exibira, ou se existe um erro(err) ou o conteúdo do arquivo(data)
fs.readFile("funcionarios.json", "utf-8", function (err, data){
    if (err) {
        console.log(err);
    } else {
        //console.log(data);
        //4º para que o arquivo se transforme em um JSON, é necessário chamar a variável que criamos, seguida de JSON.parse(data)."nome do array do arquivo"
        pessoas = JSON.parse(data).funcionarios;
        //console.log(pessoas); //Exibe todos os nomes dos funcionários da empresa com nome, salario e setor
        console.log("O maior salário da empresa é: " ,  maiorSal());
        console.log("O menor salário da empresa é: " ,  menorSal());
        console.log("A média salarial da empresa é: " ,  media());
        console.log("O maior salário da Produção é: " ,  maiorSalSetor ("Produção"));
        console.log("O maior salário da Administrativo é: " ,  maiorSalSetor ("Administrativo"));
        console.log("O maior salário da Comercial é: " ,  maiorSalSetor ("Comercial"));
        console.log("O menor salário da Produção é: " ,  menorSalSetor ("Produção"));
        console.log("O menor salário da Administrativo é: " ,  menorSalSetor ("Administrativo"));
        console.log("O menor salário da Comercial é: " ,  menorSalSetor ("Comercial"));
        console.log("A média salarial do setor Produção é: " ,  mediaSetor("Produção"));
        console.log("A média salarial do setor Administrativo é: " ,  mediaSetor("Administrativo"));
        console.log("A média salarial do setor Comercial é: " ,  mediaSetor("Comercial"));
        console.log(nomeSetor("Administrativo"))
    }
});

//5º para montar a função de maior salário deverremos primeiro criar uma function maiorSal(), porque se não chamarmos ela no início ela não existirá
function maiorSal() {
    //6º em seguida é necessário criar uma variável maiorSal = pessoas[0], essa variável percorrerá todos os dados do array começando do índice o que é o primeiro nome do array
    var maiorSal = pessoas[0];
    //7º deveremos inserir um contador que percorra todo o array, encontre o maior salário e retorne para a função.
    //para isso, deveremos começar pelo primeiro nome (i=0), o indice deverá ser menor que toda a extensão do array, em seguida inserir o i++ que significa que ele somará +1 a esse índice
    for (i = 0; i < pessoas.length; i++) {
        //8º se a pessoa no indice i tiver o salario maior que o maior salario encontrado entre todos, entao o maior salario será dessa pessoa[i]
        if (pessoas[i].salario > maiorSal.salario){
            maiorSal = pessoas[i];
        }
    }
    //9º sempre lembrar de retornar para a função senão ele só vai ler o primeiro e não vai percorrer todo o array
    return maiorSal;
}

//A função menor salário será identica, mudando apenas o nome da função e o comando pessoas[i].salario < maiorSal.salario

function menorSal() {
    var menorSal = pessoas[0];
        for (i = 0; i < pessoas.length; i++) {
                if (pessoas[i].salario < menorSal.salario){
            menorSal = pessoas[i];
        }
    }
        return menorSal;
}

function media () {
    var total = 0;
    for (i = 0; i < pessoas.length; i++) {
        total += pessoas[i].salario
    }
    media = total / pessoas.length
    return media;
}

//Maior salário dos setores
function maiorSalSetor(setor) {
    var maiorSalSetor = null;
        for (i = 0; i < pessoas.length; i++) {
                if (setor && (pessoas[i].setor !== setor)) {
                    continue;
        }
        if (maiorSalSetor === null) {
            maiorSalSetor = pessoas[i];
            continue;
        }
        if (pessoas[i].salario > maiorSalSetor.salario)
        maiorSalSetor = pessoas[i];
    }
        return maiorSalSetor;
}

//Menor Salário é identico só muda a linha 73 o sinal de maior para menor

function menorSalSetor(setor) {
    var menorSalSetor = null;
        for (i = 0; i < pessoas.length; i++) {
                if (setor && (pessoas[i].setor !== setor)) {
                    continue;
        }
        if (menorSalSetor === null) {
            menorSalSetor = pessoas[i];
            continue;
        }
        if (pessoas[i].salario < menorSalSetor.salario)
        menorSalSetor = pessoas[i];
    }
        return menorSalSetor;
}

//Média salarial do setor
function mediaSetor (setor) {
    var totalMedia = 0;
    var qtd = 0
    for (i = 0; i < pessoas.length; i++) {
        if (setor && (pessoas[i].setor !== setor)){
            continue;
        }
        qtd++;    
        totalMedia += pessoas[i].salario;
    }    
    var mediaSetor = totalMedia / qtd
    return mediaSetor;
}

function nomeSetor(setor) {
    var nomeSetor = null;
        for (i = 0; i < pessoas.length; i++) {
                if (setor && (pessoas[i].setor !== setor)) {
                    continue;
        }
    }
        return nomeSetor;
}

