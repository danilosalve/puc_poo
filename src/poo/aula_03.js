/* aula_03.js
Aula 03 - Explorando outros conceitos

@author Danilo Otavio Lima Salve
@since 15/10/2022
@version 1.0
*/

class Pessoa {
    constructor(nome, anoDeNascimento, profissao){
        this.nome = nome;
        this.anoDeNascimento = anoDeNascimento;
        this.profissao = profissao;
    }

    calcularIdade() {
        return new Date().getFullYear - this.anoDeNascimento;
    }
}
const pessoa = new Pessoa('Danilo', 1990, 'Desenvolvedor de Software');

// Herança prototipada
const pessoa2 = Object.create(pessoa);

// Criando metodos - Testa forma todas as instancias recebem o metodo Saudar
Pessoa.prototype.saudar = function() {
    console.log('Olá');
}

pessoa.saudar();
pessoa2.saudar();


// Atributos / Metodos estaticos
class Pessoa2 {
    // Metodos que podem ser chamados indendentes
    static NOME_DA_CLASSE = 'pessoa2'
    constructor(){}
}

console.log(Pessoa2.NOME_DA_CLASSE);

// Visibilidade
class Pessoa3 {
    #matricula;
    constructor() {}
    #ola() {}
}

const pessoa3 = new Pessoa3();
try {
    pessoa3.ola();
} catch (e) {
    // Como o metodo é privado ele não pode ser acessado externamente.
    console.error('Falha ao executar metodo ola' , e);
}

// Desestruturando um objeto
let umaClasse = new Pessoa('Danilo', 1990, 'DEV');
let {calcularIdade, nome, anoDeNascimento, profissao, saudar} = umaClasse;

console.log('Um atributo - ', nome);
console.log('Outro atributo - ', anoDeNascimento);
console.log('Um metodo - ', saudar());