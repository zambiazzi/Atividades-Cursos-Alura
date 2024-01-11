alunos = [
    'João',
    'Juliana',
    'Ana',
    'Caio',
    'Lara',
    'Marjorie',
    'Guilherme',
    'Aline',
    'Fabiana',
    'Andre',
    'Carlos',
    'Paulo',
    'Bia',
    'Vivian',
    'Isabela',
    'Vinícius',
    'Renan',
    'Renata',
    'Daisy',
    'Camilo'
];

const sala1 = alunos.slice(0, alunos.lenght / 2);
const sala2 = alunos.slice(alunos.lenght / 2); // apenas colocando o primeiro parâmetro, o js ja entende que deve pegar o resto do array

console.log(sala1);
console.log(sala2);