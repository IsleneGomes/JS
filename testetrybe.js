const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}
var frase = "";
var letra = "";
function vezesLetraAparece(frase, letra) {
    
if (!letra) frase = frase.toLowerCase();
    
    for (var i = 0; i < frase.length; i++) {
        var obj = {};
        if (!obj[frase[i]]) obj[frase[i]] = 0;
        obj[frase[i]]++;
    }
    return obj;
}
console.log(frase, letra);



function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const frase = readLine();

    const letra = readLine();

    const result = vezesLetraAparece(frase, letra);

    ws.write(result + '\n');

    ws.end();
}
