---
title: Tipos de Dados
sidebar_label: Tipos de Dados  
sidebar_position: 3  
---

import Example from '@site/src/components/Example'

## Explicação Conceitual

JavaScript é uma linguagem dinâmica, onde o tipo de dado de uma variável é determinado durante a execução. Aqui estão os principais tipos de dados primitivos em JavaScript:

# String  
Uma string é uma sequência de caracteres usada para representar texto. Strings podem ser delimitadas por aspas simples (`'`) ou duplas (`"`).

### Sintaxe
<Example  
language="js"  
filename="string-sintaxe.js"  
/>

### Explicação

- **String** é usada para armazenar e manipular texto.
- **Concatenação** em JavaScript é o processo de unir duas ou mais strings (ou outros valores) em uma única string. Isso pode ser feito usando o operador de adição (+) ou o método concat().
- Além de concatenar strings com o operador `+` você pode concatenar com templates literals usando crases, cifrão e chaves (`` ` ${} ` ``).

### Exemplo
<Example  
language="js"  
filename="string-exemplo.js"  
/>

# Number  
Em JavaScript, o tipo `Number` inclui tanto números inteiros quanto de ponto flutuante (decimais).

### Sintaxe
<Example  
language="js"  
filename="number-sintaxe.js"  
/>

### Explicação

- O tipo `Number` pode representar tanto valores inteiros quanto fracionados.
- A função `typeof` pode ser usada para verificar o tipo de uma variável.

### Exemplo
<Example  
language="js"  
filename="number-exemplo.js"  
/>

# Boolean  
Um tipo booleano só pode ter dois valores: `true` ou `false`.

### Sintaxe
<Example  
language="js"  
filename="boolean-sintaxe.js"  
/>

### Explicação

- Variáveis booleanas são comumente usadas para controle de fluxo, como em condições de `if` e loops.

#### Alguns conceitos como "if" e "loop" você verá mais a frente nesse curso. Não se preocupe com esses termos agora, foque apenas em indentificar a funcionalidade dos tipos de dados nesse momento.

### Exemplo
<Example  
language="js"  
filename="boolean-exemplo.js"  
/>

# Null  
`null` é um valor que representa "nenhum valor" ou "vazio". Ele é explicitamente atribuído a uma variável.

### Sintaxe
<Example  
language="js"  
filename="null-sintaxe.js"  
/>

### Explicação

- `null` é um valor que deve ser atribuído intencionalmente para indicar que uma variável não tem um valor.

### Exemplo
<Example  
language="js"  
filename="null-exemplo.js"  
/>

# Undefined  
`undefined` significa que uma variável foi declarada, mas ainda não foi atribuído um valor a ela.

### Sintaxe
<Example  
language="js"  
filename="undefined-sintaxe.js"  
/>

### Explicação

- Uma variável é `undefined` se foi declarada, mas não inicializada.
- `undefined` é o valor padrão de variáveis em JavaScript antes de serem atribuídas.

### Exemplo
<Example  
language="js"  
filename="undefined-exemplo.js"  
/>

import Admonition from '@theme/Admonition';

<Admonition type="info" title="Considerações Importantes" >  
- **Diferença entre null e undefined**:  
`null` é explicitamente atribuído, enquanto `undefined` significa que a variável ainda não foi inicializada.  
- **Coerção de Tipo**:  
JavaScript realiza coerção de tipo automática, por exemplo, ao somar um número e uma string, o número será convertido em string.  
- **Verificação de Tipo**:  
Use `typeof` para verificar o tipo de uma variável.  
- **Valores Falsy**:  
Além de `false`, os seguintes valores são considerados "falsy" (avaliam como falso): `0`, `""` (string vazia), `null`, `undefined`, e `NaN`.  
</Admonition>