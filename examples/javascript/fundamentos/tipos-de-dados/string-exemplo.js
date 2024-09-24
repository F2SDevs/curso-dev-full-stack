//Concatenação por sinal de +
let nome = "Kevin";
let saudacao = "Olá, " + nome + "!";
console.log(saudacao); // Saída: "Olá, Kevin!"

//Concatenação com crases
let nome = "Kevin";
let saudacao = `Olá, ${nome}!`;
console.log(saudacao); // Saída: "Olá, Kevin!"

//Concatenação com o método concat()
let parte1 = "Olá, ";
let parte2 = "Kevin!";
let saudacao = parte1.concat(parte2);
console.log(saudacao); // Saída: "Olá, Kevin!"
