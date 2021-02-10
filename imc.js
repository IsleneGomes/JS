// Primeiro código criado sozinha!!!
var altura = null;
var peso = null;
var nome = null;

nome = "Islene"
peso = 84.0;
altura = 1.67; //valores float : decimais
var imc = peso /(altura*altura);
console.log("***Cálculo do IMC e do Peso Ideal Para: " + nome, "***");

while ((altura > 0) && (peso > 0)) {
    if (imc <= 18.8) {
        console.log("Você está abaixo do peso, seu IMC é: " + imc);
        break;
    } 
    else if ((imc > 18.8) && (imc <= 24.9)){
        console.log("Parabéns você está no peso ideal, seu IMC é: " + imc);
        break;
    } 
    else if ((imc >= 25.0) && (imc <= 29.9)) {
        console.log("Você está levemente acima do peso, seu IMC é: " + imc);
        break;
    } 
    else if ((imc >= 30.0) && (imc <= 34.9)) {
        console.log("Você está com Obesidade grau I, seu IMC é: " + imc);
        break;
    } 
    else if ((imc >= 35.0) && (imc <= 39.9)) {
        console.log("Você está com Obesidade grau II - severa, seu IMC é: " + imc);
        break;
    } 
    else if (imc >= 40.0) {
        console.log("Você está com Obesidade grau III - mórbida, seu IMC é: " + imc);
        break;
    }
};
var imcIdeal = 20;
var imcIdealLimite = 24.9;
var pesoIdeal = (altura*altura)*imcIdeal;
var pesoIdealLimite = (altura*altura*imcIdealLimite);
var media = (pesoIdeal+pesoIdealLimite)/2;
console.log(nome + " Seu peso ideal está entre: " + pesoIdeal ," e " + pesoIdealLimite);
var perdaPeso= (peso - media);
if (imc > 25){
    console.log("Seu peso médio é: " + media);
    console.log("Você precisa perder em média: " + perdaPeso);
}
    

//Fim! hehehe