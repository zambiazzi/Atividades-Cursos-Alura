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

const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto);

if (!chavesDoObjeto.includes("endereco")) {
    console.error("Erro. É necessário ter um endereço cadastrado.");
}