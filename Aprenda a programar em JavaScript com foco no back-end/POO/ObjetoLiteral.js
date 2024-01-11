const user = {
    nome: "Lucas",
    email: "l@z.com",
    nascimento: "2006/03/24",
    role: "estudante",
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email)
    }
}

const admin = {
    nome: "Maria",
    email: "m@b.com",
    role: "admin",
    criarCurso() {
        console.log('Curso criado!');
    }
}

Object.setPrototypeOf(admin, user);
admin.criarCurso();
admin.exibirInfos();
