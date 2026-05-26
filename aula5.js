const prompt = require("prompt-sync")();
let soma = 0
let n1
for (let i = 0; i < 10; i++){
    n1 = Number(prompt("digite um numero: "))
    if (n1 % 2 === 0){
        soma = soma + 1
    }
}
console.log(`${soma} numeros são pares`)
