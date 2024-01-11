// parâmetros de função

function soma(num1, num2) {
    return num1 + num2;
}

console.log(soma(5, 10));

// parâmetros x argumentos

/*
ordem dos parâmetros
*/

function nomeIdade(nome, idade) {
    return `Meu nome é ${nome}, e eu tenho ${idade} anos!`;
}

// console.log(nomeIdade("Lucas", 17));

function multiplica(num1, num2) {
    return num1 * num2;
}

console.log(multiplica(soma(4, 5), soma(3, 3)));