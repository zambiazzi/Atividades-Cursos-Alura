import User from '../POO/User.js';

export default class Docente extends User {
    constructor(nome, email, nascimento, role = 'docente', ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }

    aprovaEstudante(estudante, curso) {
        return `Estudante ${estudante} aprovado no curso de ${curso}`
    }
}

// const novoDocente = new Docente('Mariana', 'm@m.com', '2021-01-01');
// console.log(novoDocente);
// console.log(novoDocente.aprovaEstudante('lucas', 'js'));
