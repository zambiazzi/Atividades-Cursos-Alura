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

cliente.endereco.push({
    rua: "XV de novembro",
    numero: 404,
    apartamento: false,
});

const listaApenasApartamentos = cliente.endereco.filter(
    (endereco) => endereco.apartamento === true
);

console.log(listaApenasApartamentos);
