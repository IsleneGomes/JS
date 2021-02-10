var x = 0;
var i = 0; //contador
var y = 0;

x = 1016;

for (y = 1; y <= x; y++){
    if (x % y === 0){
        i = i + 1;
    }
}
if(i == 2){
    console.log("O numero " + x, " eh primo");
}else {
    console.log("O numero " + x, " nao eh primo");
}
