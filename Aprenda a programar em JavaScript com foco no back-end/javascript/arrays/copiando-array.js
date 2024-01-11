const notas = [7, 7, 8, 9];

// const novasNotas = notas; // peculariedade do JS que entende que os 2 arrays são os mesmos

const novasNotas = [...notas]; 

novasNotas.push(10);

console.log(`As notas originais são ${notas}`);
console.log(`As novas notas são ${novasNotas}`);
