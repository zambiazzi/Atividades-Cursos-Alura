// function User(nome, email) {
//     this.nome = nome;
//     this.email = email;

//     this.exibirInfos = function() {
//         return `${this.nome} | ${this.email}`
//     }
// }

// const novoUser = new User('Lucas', 'l@z.com'); // recebe o novo objeto criado por meio do construtor
// console.log(novoUser.exibirInfos());

// function Admin(role) {
//     User.call(this, 'Lucas', 'l@z.com'); // this se refere ao contexto de user, enfileirando as propriedades dele
//     this.role = role || 'estudante';
// }


// Admin.prototype = Object.create(User.prototype);
// const novoUser = new Admin('admin');
// console.log(novoUser.exibirInfos());
// console.log(novoUser.role);

const user = {
    init: function(nome, email) {
        this.nome = nome;
        this.email = email;
    },
    exibirInfos: function() {
        return this.nome;
    }
}

const novoUser = Object.create(user);
novoUser.init('Lucas', 'l@z.com');

// console.log(novoUser.exibirInfos('Lucas'));
// console.log(user.isPrototypeOf(novoUser));