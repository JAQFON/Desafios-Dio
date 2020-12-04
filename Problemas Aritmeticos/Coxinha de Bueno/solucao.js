let line = gets().split(" ");
let H    = parseInt(line[0]);
let P    = parseInt(line[1]);

let consumoMedio = (H/P).toFixed(2);

console.log(consumoMedio);