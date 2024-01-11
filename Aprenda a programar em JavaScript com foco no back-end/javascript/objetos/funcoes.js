const cliente = {
    nome: "Lucas",
    idade: 17,
    email: "lucas@firma.com",
    telefones: ["49 424561252", "49 537332632"],
    saldo: 200,
    efetuaPagamento: function (valor) {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente.")
        } else {
            this.saldo -= valor;
            console.log(`Pagamento realizado. Saldo atual: ${this.saldo}`);
        }
    }
}

cliente.efetuaPagamento(110);

