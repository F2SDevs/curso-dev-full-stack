// Função para realizar a operação matemática
function calcularResultado(num1, num2, operador) {
  const operacoes = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => b === 0 ? 'Não é possível dividir por zero.' : a / b
  };

  return operacoes[operador]
    ? operacoes[operador](num1, num2)
    : 'Operação inválida.';
}

// Função para obter os inputs do usuário
function obterEntradaUsuario() {
  let num1, num2, operador;

  // Verificar se os inputs são válidos
  do {
    num1 = parseFloat(prompt('Digite o primeiro número:'));
  } while (isNaN(num1));

  do {
    operador = prompt('Digite a operação (+, -, *, /):');
  } while (!['+', '-', '/', '*'].includes(operador));

  do {
    num2 = parseFloat(prompt('Digite o segundo número:'));
  } while (isNaN(num2));

  return { num1, num2, operador };
}

// Função principal
function calculadora() {
  const { num1, num2, operador } = obterEntradaUsuario();
  const resultado = calcularResultado(num1, num2, operador);

  alert(typeof resultado === 'string' ? resultado : `${num1} ${operador} ${num2} = ${resultado}`);

  // Perguntar ao usuário se deseja fazer outra operação
  if (confirm('Deseja continuar operarando?')) calculadora();
  else alert('Encerrando calculadora...');
}

// Iniciar a calculadora
calculadora();
