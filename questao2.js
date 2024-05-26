console.log("Bem-vindo a Calculadora! Vamos realizar algumas operações!")
while (decision != "S") {
    var entrada = require("readline-sync");
    var numero1 = parseFloat(entrada.question("Digite o primeiro numero: "));
    var op = entrada.question("Escolha uma operacao (+, -, *, /, r ou p: ").toLowerCase();
    var numero2 = parseFloat(entrada.question("Digite o segundo numero: "));
    switch (op) {
        case "+":
            console.log(`O resultado da operação é: ${numero1 + numero2}`);
            break
        case "-":
            console.log(`O resultado da operação é: ${numero1 - numero2}`);
            break
        case "*":
            console.log(`O resultado da operação é: ${numero1 * numero2}`);
            break
        case "/":
            console.log(`O resultado da operação é: ${numero1 / numero2}`);
            break
        case "r":
            console.log(`O resultado da operação é: ${Math.sqrt(numero1, numero2)}`);
            break
        case "p":
            console.log(`O resultado da operação é: ${Math.pow(numero1, numero2)}`);
            break
        default:
            console.log("Símbolo inválido.");
    }
    var decision = entrada.question("voce quer parar ? (S/N) ").toUpperCase();
    if(decision == "S"){
        console.log("Você parou!");
        break
    }
    else if(decision == "N"){
        console.log("Você decidiu continuar!");
    }
    else{
        console.log("Dígito inálido!");
    }
}