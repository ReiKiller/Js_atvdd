var entrada = require("readline-sync");
var numSecreto = Math.floor(Math.random()*100);
var contador = 0;
var numDigitado;
while (numDigitado != numSecreto) {
    numDigitado = parseFloat(entrada.question("Digite um numero de 1 a 100: "));
    if (numDigitado < numSecreto) {
        console.log("O numero que você digitou é menor que o numero secreto!");
    }
    else if (numDigitado > numSecreto) {
        console.log("O numero que voce digitou é maior que o numero secreto!");
    }
    else {
        console.log(`Parabéns voce acertou!!! Esse foi seu número de tentativas : ${contador}`);
        break
    }
    while (palavra !== "S") {
        var palavra = entrada.question("Voce deseja encerrar o jogo? S/N").toUpperCase();
        if (palavra == "S") {
            console.log("Você encerrou o jogo.");
            numDigitado = numSecreto
            break
        }
        else if (palavra == "N"){
            console.log("Você irá continuar.");
            break
        }
        else{
            console.log("palavra inválida");
        }
    }
    contador++
}