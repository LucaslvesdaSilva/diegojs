const prompt = require("prompt-sync")();

const multiplicacao = (x, y) => x * y;
const soma = (x, y) => x + y;
const subtracao = (x, y) => x - y;
const divisao = (x, y) => x / y;

let n1 = Number(prompt("digite um numero: "))
let n2 = Number(prompt("digite outro numero: "))

console.log(`Soma : ${ soma (n1, n2) } `) ;
console.log(`multiplicacao : ${ multiplicacao (n1 , n2) } `) ;
console.log(`subtração : ${ subtracao (n1 , n2) } `) ;
if (n2 != 0){
console.log(`divisao :  ${ divisao (n1 , n2)} `) ;
}
else{
    console.log("Erro: divisão por zero não é permitida.")
}
