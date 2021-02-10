var multiplos = [];
for (var i = 3; i < 1000; i++){
    if ((i % 3 === 0) || (i % 5 === 0)) {
        multiplos.push(i);
        } 
}
console.log(multiplos);

var sum = 0;

for (var i = 0; i < multiplos.length; i++) {
    sum = sum + multiplos[i];
}
console.log("Soma dos múltiplos é: " + sum);