// Estrutura de dados dos alunos
const alunos = [
  { nome: "João Paulo", notas: [7,5,8] },
  { nome: "Maria Clara", notas: [9,6,7] },
  { nome: "Carlos Eduardo", notas: [4,5,6] },
  { nome: "Ana Beatriz", notas: [10,9,8] },
  { nome: "Pedro Henrique", notas: [5,6,5] },
];

// Variáveis para cálculos gerais
let maiorNota = 0;
let menorNota = 10;
let acimaMedia = 0;
let abaixoMedia = 0;

// Vamos percorrer a Lista e tratar aluno por aluno
alunos.forEach((aluno) => {
  const { notas } = aluno;

  // Adicionando média individual do aluno
  aluno.media = (notas.reduce((acc, num) => acc + num, 0) / notas.length).toFixed(2);

  // somando alunsos acime e abaixo da media
  aluno.media >= 6 ? acimaMedia++ :  abaixoMedia++;

  // Atualizando maior e menor nota
  maiorNota = Math.max(maiorNota, ...notas);
  menorNota = Math.min(menorNota, ...notas);

  console.log(`Nome: ${aluno.nome} Media: ${aluno.media}`)
});

// Exibindo o resultado final
console.log(`\nAlunos acima da média: ${acimaMedia}`);
console.log(`Alunos abaixo da média: ${abaixoMedia}`);
console.log(`Maior nota da turma: ${maiorNota}`);
console.log(`Menor nota da turma: ${menorNota}`);
