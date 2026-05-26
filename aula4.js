const prompt = require("prompt-sync")();

let n1 = Number(prompt("Digite um número: "));

for (let i = 1; i <= 10; i++) {
    console.log(`${n1} x ${i} = ${n1 * i}`);
  }
