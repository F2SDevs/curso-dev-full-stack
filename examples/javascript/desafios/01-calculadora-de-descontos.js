let precoFinal;
const preco = 150;
const categoria = "comum"; // "comum", "premium" ou "vip"
let desconto;

if (categoria === "comum") {
  desconto = 0.05;
} else if (categoria === "premium") {
  desconto = 0.10;
} else if (categoria === "vip") {
  desconto = 0.15;
} else {
  precoFinal = preco
}

precoFinal = preco - (preco * desconto);

/*
  Testando script

  preco = 150
  categoria = "comum"
  precoFinal = 142.5
*/
console.log(precoFinal);
