// Função para realizar a operação matemática
function calculadora(num1, num2, operador) {
  let resultado;

  switch (operador) {
    case '+':
      resultado = num1 + num2;
      break;
    case '-':
      resultado = num1 - num2;
      break;
    case '*':
      resultado = num1 * num2;
      break;
    case '/':
      if (num2 === 0) {
        return 'Não é possível dividir por zero.';
      }
      resultado = num1 / num2;
      break;
    default:
      return 'Operador inválido.';
  }

  return `${num1} ${operador} ${num2} = ${resultado}`;
}

// Exemplo de uso
console.log(calculadora(10, 5, '+')); // Output: 10 + 5 = 15
console.log(calculadora(8, 0, '/')); // Output: Não é possível dividir por zero.
console.log(calculadora(4, 3, '*')); // Output: 4 * 3 = 12
console.log(calculadora(20, 7, '-')); // Output: 20 - 7 = 13
console.log(calculadora(2, 4, '%')); // Output: Operador inválido.
