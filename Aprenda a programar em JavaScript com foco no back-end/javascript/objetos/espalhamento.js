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

function ligaParaCliente(telefoneComercial, telefoneResidencial) {
    console.log(`Ligando para ${telefoneComercial}`);
    console.log(`Ligando para ${telefoneResidencial}`);
}

ligaParaCliente(...cliente.telefones);

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.endereco[0],
}

console.log(encomenda);