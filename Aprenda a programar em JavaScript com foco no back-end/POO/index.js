import User from '../POO/User.js';
import Admin from '../POO/Admin.js';
import Docente from '../POO/Docente.js';

const novoUser = new User('Lucas', 'l@z.com', '2020-01-01');

const novoAdmin = new Admin('Maria', 'm@b.com', '2000-02-21');
console.log(novoAdmin.nome);
novoAdmin.nome = '';
console.log(novoAdmin.nome);
