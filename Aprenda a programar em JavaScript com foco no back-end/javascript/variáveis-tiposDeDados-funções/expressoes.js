// declaração de função

function minhaFuncao(param) {
    // bloco de código
}

minhaFuncao("param");

// expressão de função

// const soma = function(num1, num2) { return num1 + num2 }
// console.log(soma(5, 5));

// diferença principal -> funções e var são "listadas" no topo, chamado de hoisting(levantar) 

console.log(apresentar());

function apresentar() {
    return "olá";
}

console.log(soma(1, 1));
const soma = function(num1, num2) { num1 + num2 }