const prompt = require("prompt-sync")();
let soma = 0
let n1
for (let i = 0; i < 5; i++){
    n1 = Number(prompt("digite um numero: "))
    soma = soma + n1
}
let media = soma / 5

if (media >= 7) {
    console.log("Aprovado");
  } else if (media >= 5) {
    console.log("Recuperação");
  } else {
    console.log("Reprovado");
  }
