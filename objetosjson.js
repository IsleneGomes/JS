var cadastro = {
    nome: "João",
    idade: 40,
    telefone: "(99) 9999 - 9999",
    temCarro: true, //booleana true ou false
    animaisDeEstimacao:[
        "Totó",
        "Bob"
    ],
    pai: {
        nome: "José",
        idade: 68
    }
};

//console.log(cadastro);
//console.log(cadastro.nome); //imprimir apenas o nome: .nome
//console.log(cadastro.pai.nome);//imprimir o nome do pai: .pai.nome
cadastro.animaisDeEstimacao.push("Nika"); //adiciona mais um indice

cadastro.nome = cadastro.nome + " Souza"
cadastro.pai. nome = cadastro.pai.nome + " Souza" //adiciona dados no valor
//console.log(cadastro.pai.nome)
//console.log(cadastro);
cadastro.mae = {
    nome: "Maria Souza",
    idade: 54
}; 
//converter JSON para string: JSON.stringfy(nome do arquivo)
console.log(JSON.stringify(cadastro));
//o contrário: JSON.parse transforma string em objeto JSON

/*dados(cadastro);
function dados(cadastro) {
    console.log(cadastro);
}*/