var fs = require("fs"); // sempre usar file system para atualizar o arquivo, colocar ele em memória
var funcionarios = null;
fs.readFile("funcionarios.json","utf-8", function(err, data){ // file system, seguido do comando ler arquivo. Colocar o arquivo, "utf-8" é obrigatório em seguida a função que emite se a leitura teve algum erro
    if (err) {
        console.log(err) //imprime o erro, se houver
    } else {
        //console.log(data) // imprime o código do arquivo se não houver erro. Mas está em formato texto então vamos converter para JSON
        funcionarios = JSON.parse(data).funcionarios; // ".funcionarios" pq eu quero o array funcionarios do arquivo funcionarios.json
        //console.log(JSON.parse(data)); //colocar o formato JSON seguido de parse e entre parenteses "date" que é o conteúdo do arquivo. Pronto arquivo convertido para JSON.
        console.log("O funcionário de maior salário da empresa é: ",  maiorSalario());
        console.log("O funcionário de menor salário da empresa é: ",  menorSalario());
        console.log("O funcionário de maior salário do setor Comercial é: ",  maiorSalario("Comercial"));
        console.log("O funcionário de maior salário do setor Produção é: ",  maiorSalario("Produção"));
        console.log("O funcionário de maior salário do setor Administrativo é: ",  maiorSalario("Administrativo"));
        console.log("O funcionário de menor salário do setor Comercial é: ",  menorSalario("Comercial"));
        console.log("O funcionário de menor salário do setor Produção é: ",  menorSalario("Produção"));
        console.log("O funcionário de menor salário do setor Administrativo é: ",  menorSalario("Administrativo"));
        console.log("A média salarial da empresa é: " + media());
        console.log("A média salarial do setor Comercial é: " + mediaSetor("Comercial"));
        console.log("A média salarial do setor Produção é: " + mediaSetor("Produção"));
        console.log("A média salarial do setor Administrativo é: " + mediaSetor("Administrativo"));
    }
});

function maiorSalario () {
    var funcMaiorSalario = funcionarios[0];
    for (var i = 0; i < funcionarios.length; i++){
        if (funcionarios[i].salario > funcMaiorSalario.salario){
            funcMaiorSalario = funcionarios[i];
        }
    }
    return funcMaiorSalario
}

function menorSalario () {
    var funcMenorSalario = funcionarios[0];
    for (var i = 0; i < funcionarios.length; i++){
        if (funcionarios[i].salario < funcMenorSalario.salario){
            funcMenorSalario = funcionarios[i];
        }
    }
    return funcMenorSalario
}

function maiorSalario (setor) {
    var funcMaiorSalario = null;
    for (var i = 0; i < funcionarios.length; i++){
        if(setor && (funcionarios[i].setor !== setor)) {
            continue;
        }

        if (funcMaiorSalario === null) {
            funcMaiorSalario = funcionarios[i];
            continue;
        }
        if (funcionarios[i].salario > funcMaiorSalario.salario){
            funcMaiorSalario = funcionarios[i];
        }
    }
    return funcMaiorSalario
}

function menorSalario (setor) {
    var funcMenorSalario = null;
    for (var i = 0; i < funcionarios.length; i++){
        if(setor && (funcionarios[i].setor !== setor)) {
            continue;
        }

        if (funcMenorSalario === null) {
            funcMenorSalario = funcionarios[i];
            continue;
        }
        if (funcionarios[i].salario < funcMenorSalario.salario){
            funcMenorSalario = funcionarios[i];
        }
    }
    return funcMenorSalario
}

function media () {
    var total = 0;
    for (var i = 0; i < funcionarios.length; i++) {
        total += funcionarios[i].salario;
    }
    var media = total / funcionarios.length;
    return media;
}

function mediaSetor (setor) {
    var totalMedia = 0;
    var qtd = 0; // para contar apenas os funcionários do setor específico e não o total geral
    for (var i = 0; i < funcionarios.length; i++) {
        if (setor && (funcionarios[i].setor !== setor)) {
            continue;
        }
        qtd++;
        totalMedia += funcionarios[i].salario;
    }
var mediaSetor = totalMedia / qtd;
return mediaSetor;
}