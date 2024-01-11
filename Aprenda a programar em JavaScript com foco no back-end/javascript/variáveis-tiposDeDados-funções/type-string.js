const texto1 = "Olá, mundo!";
const texto2 = 'Olá, mundo!';
const senha = "senhaSuperSegura456!";
const StringDeNumeros = "34567";

const citacao = 'Meu nome é ';
const meuNome = "Lucas";

// concatenação (+)

console.log(citacao + meuNome);


// Utilização do UTF Unicode Transformation Format

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)


// Propriedades length, toLowerCase e toUpperCase
const input = 'Rio de Janeiro';

const inputMaiusculo = input.toUpperCase();
const inputMinusculo = input.toLowerCase();
const tamanhoDaString = input.length;
console.log(inputMinusculo, inputMaiusculo, tamanhoDaString);