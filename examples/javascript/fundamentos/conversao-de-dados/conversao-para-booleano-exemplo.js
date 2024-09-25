let val1 = Boolean(0);        // Saída: false
let val2 = Boolean("");       // Saída: false
let val3 = Boolean(null);     // Saída: false
let val4 = Boolean(undefined); // Saída: false
let val5 = Boolean(NaN);      // Saída: false
let val6 = Boolean(42);       // Saída: true
let val7 = Boolean("hello");  // Saída: true
let val8 = Boolean([]);       // Saída: true

console.log(val1, val2, val3, val4, val5); // false false false false false
console.log(val6, val7, val8);             // true true true
