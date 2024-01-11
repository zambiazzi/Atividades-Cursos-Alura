const cliente = {
    nome: "Lucas",
    idade: 17,
    email: "lucas@firma.com",
    telefones: ["49 424561252", "49 537332632"],
}

cliente.endereco = [
    {
        rua: "R. Joseph Climber",
        numero: 1337,
        apartamento: true,
        complemento: "ap 934",
    },
];

for (let chave in cliente) {
    let tipo = typeof cliente[chave];
    if (tipo !== 'object' && tipo !== 'function') {
        console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
    }
}
