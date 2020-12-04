let line = gets().split(" ");

let H = parseInt(line[0]);
let V = parseInt(line[1]);

let media = (H * V)/12;

let mediaFinal = media.toFixed(3);

console.log(" " + mediaFinal);