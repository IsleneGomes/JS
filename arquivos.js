var fs = require("fs");
fs.writeFile("meuArquivo.txt", "um texto qualquer", function(err) {
    if (err !== null) {
        console.log(err);
    }else {
        console.log("arquivo escrito com sucesso");
    }
})