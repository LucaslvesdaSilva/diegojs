const prompt = require("prompt-sync")();

const secreto = 42;

let tentativa;
let tentativas = 0;

while (tentativa != secreto) {
  tentativa = Number(prompt("Digite um número: "));
  
  tentativas++;

  if (tentativa < secreto) {
    console.log("O número secreto é maior.");
  } else if (tentativa > secreto) {
    console.log("O número secreto é menor.");
  }
}

console.log(`Parabéns! Você acertou em ${tentativas} tentativas.`);
