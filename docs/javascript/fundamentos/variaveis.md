---
title: Variaveis
sidebar_label: Variaveis
sidebar_position: 1
---

import Example from '@site/src/components/Example'


## Explicação Conceitual

Em JavaScript, as variáveis podem ser declaradas usando três palavras-chave: var, let e const. Cada uma tem características específicas quanto ao escopo, redeclaração e imutabilidade.

## Var

A palavra-chave var é usada para declarar variáveis em escopo de função ou global. Ela é mais antiga e tem algumas particularidades que foram corrigidas nas palavras-chave mais modernas.

### Sintaxe
<Example 
language="js" 
filename="var-sintaxe.js" />

### Explicação:

- **Escopo**: O var é escopado à função onde foi declarado ou ao contexto global.
- **Redeclaração**: Permite redeclarações da mesma variável.
- **Hoisting**: As declarações com var são movidas para o topo do escopo durante a execução, mas a atribuição de valor permanece no local onde foi escrita.
Exemplo

### Exemplo
<Example 
language="js" 
filename="var-exemplo.js" />

## Let
O let foi introduzido no ECMAScript 2015 (ES6) e corrige vários problemas associados ao var. Ele tem escopo de bloco, ou seja, limitado ao bloco {} onde foi declarado.


### Sintaxe
<Example 
language="js" 
filename="let-sintaxe.js" />

### Explicação:

- **Escopo**: Escopado ao bloco onde foi declarado.
- **Redeclaração**: Não permite redeclarações dentro do mesmo escopo.
- **Hoisting**: As declarações com let são movidas para o topo do escopo, mas não podem ser usadas antes da linha onde foram declaradas no código.

#### Alguns conceitos como "if" você verá mais a frente nesse curso. Não se preocupe com esses termos agora, foque apenas em indentificar a funcionalidade das variáveis nesse momento.

### Exemplo
<Example 
language="js" 
filename="let-exemplo.js" />


## Const
A palavra-chave const também foi introduzida no ES6. Ela é usada para declarar variáveis que não podem ser reatribuídas após a inicialização. No entanto, isso não significa que o valor é imutável, pois objetos e arrays podem ser alterados.


### Sintaxe
<Example 
language="js" 
filename="const-sintaxe.js" />

### Explicação:

- **Escopo**: Assim como let, const é escopado ao bloco onde foi declarado.
- **Imutabilidade**: Não permite a reatribuição do valor após a inicialização.
- **Hoisting**: Segue as mesmas regras de let.

#### Alguns conceitos como "Objetos" e "Arrays" você verá mais a frente nesse curso. Não se preocupe com esses termos agora, foque apenas em indentificar a funcionalidade das variáveis nesse momento.

### Exemplo
<Example 
language="js" 
filename="const-exemplo.js" />

import Admonition from '@theme/Admonition';

<Admonition type="info" title="Considerações Importantes" >
- **Uso de let vs const**: Sempre que possível, prefira usar `const`, pois garante que o valor não será reatribuído. Use `let` apenas quando precisar de uma variável cujo valor será alterado. 
- **Escopo de Bloco**: Tanto `let` quanto `const` respeitam o escopo de bloco, ou seja, são limitados ao `{}` em que foram declarados. Isso previne problemas comuns com o `var`, como variáveis que “vazam” para fora de loops ou funções. 
- **Hoisting com let e const**: Apesar de serem içadas, as variáveis declaradas com `let` e `const` não podem ser usadas antes de sua declaração. 
- **Mutabilidade de const**: Lembre-se de que `const` garante que o valor não será reatribuído, mas o conteúdo de objetos e arrays pode ser alterado.



<!-- title: Declarações de Variáveis: var, let e const
sidebar_label: Declarações de Variáveis
sidebar_position: 1

import Example from '@site/src/components/Example'

Explicação Conceitual
Em JavaScript, as variáveis podem ser declaradas usando três palavras-chave: var, let e const. Cada uma tem características específicas quanto ao escopo, redeclaração e imutabilidade.

var
A palavra-chave var é usada para declarar variáveis em escopo de função ou global. Ela é mais antiga e tem algumas particularidades que foram corrigidas nas palavras-chave mais modernas.

Sintaxe
<Example language="js" filename="var-sintaxe.js" />

Explicação:
Escopo: O var é escopado à função onde foi declarado ou ao contexto global.
Redeclaração: Permite redeclarações da mesma variável.
Hoisting: As declarações com var são içadas para o topo do seu escopo, porém a atribuição permanece onde foi feita.
Exemplo
<Example language="js" filename="var-exemplo.js" />

let
O let foi introduzido no ECMAScript 2015 (ES6) e corrige vários problemas associados ao var. Ele tem escopo de bloco, ou seja, limitado ao bloco {} onde foi declarado.

Sintaxe
<Example language="js" filename="let-sintaxe.js" />

Explicação:
Escopo: Escopado ao bloco onde foi declarado.
Redeclaração: Não permite redeclarações dentro do mesmo escopo.
Hoisting: As declarações com let também são içadas, mas não podem ser acessadas antes de sua declaração no código.
Exemplo
<Example language="js" filename="let-exemplo.js" />

const
A palavra-chave const também foi introduzida no ES6. Ela é usada para declarar variáveis que não podem ser reatribuídas após a inicialização. No entanto, isso não significa que o valor é imutável, pois objetos e arrays podem ser alterados.

Sintaxe
<Example language="js" filename="const-sintaxe.js" />

Explicação:
Escopo: Assim como let, const é escopado ao bloco onde foi declarado.
Imutabilidade: Não permite a reatribuição do valor após a inicialização.
Hoisting: Segue as mesmas regras de let.
Exemplo
<Example language="js" filename="const-exemplo.js" />

import Admonition from '@theme/Admonition';

<Admonition type="info" title="Considerações Importantes" > - **Uso de let vs const**: Sempre que possível, prefira usar `const`, pois garante que o valor não será reatribuído. Use `let` apenas quando precisar de uma variável cujo valor será alterado. - **Escopo de Bloco**: Tanto `let` quanto `const` respeitam o escopo de bloco, ou seja, são limitados ao `{}` em que foram declarados. Isso previne problemas comuns com o `var`, como variáveis que “vazam” para fora de loops ou funções. - **Hoisting com let e const**: Apesar de serem içadas, as variáveis declaradas com `let` e `const` não podem ser usadas antes de sua declaração. - **Mutabilidade de const**: Lembre-se de que `const` garante que o valor não será reatribuído, mas o conteúdo de objetos e arrays pode ser alterado. </Admonition> -->


</Admonition> 






