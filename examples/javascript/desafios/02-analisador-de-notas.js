// Estrutura de dados dos alunos
const alunos = [
  { nome: "João Paulo", nota1: 7, nota2: 5, nota3: 8 },
  { nome: "Maria Clara", nota1: 9, nota2: 6, nota3: 7 },
  { nome: "Carlos Eduardo", nota1: 4, nota2: 5, nota3: 6 },
  { nome: "Ana Beatriz", nota1: 10, nota2: 9, nota3: 8 },
  { nome: "Pedro Henrique", nota1: 5, nota2: 6, nota3: 5 },
];

// Variáveis para cálculos gerais
let maiorNota = 0;
let menorNota = 10;
let acimaMedia = 0;
let abaixoMedia = 0;

alunos.forEach((aluno) => {
  const { nota1, nota2, nota3 } = aluno;

  // Adicionando média individual do aluno
  aluno.media = ((nota1 + nota2 + nota3) / 3).toFixed(2);

  // somando alunsos acime e abaixo da media
  aluno.media >= 6 ? acimaMedia++ :  abaixoMedia++;

  // Atualizando maior e menor nota
  maiorNota = Math.max(maiorNota, nota1, nota2, nota3);
  menorNota = Math.min(menorNota, nota1, nota2, nota3);

  console.log(`Nome: ${aluno.nome} Media: ${aluno.media}`)
});

// Exibindo o resultado final
console.log(`\nAlunos acima da média: ${acimaMedia}`);
console.log(`Alunos abaixo da média: ${abaixoMedia}`);
console.log(`Maior nota da turma: ${maiorNota}`);
console.log(`Menor nota da turma: ${menorNota}`);
