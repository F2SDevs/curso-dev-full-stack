let num = 42;
let bool = false;
let obj = { chave: "valor" };

let strNum = num.toString();       // Saída: "42"
let strBool = String(bool);        // Saída: "false"
let strObj = JSON.stringify(obj);  // Saída: '{"chave":"valor"}'

console.log(strNum);   // "42"
console.log(strBool);  // "false"
console.log(strObj);   // '{"chave":"valor"}'
