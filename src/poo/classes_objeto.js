/* classes_objeto.js
Exemplo criação de objeto utilizando o conceito de Classes.

@author Danilo Otavio Lima Salve
@since 15/10/2022
@version 1.0
*/

// Classes - Modelos para criar objetos
class Pessoa {
    // Todo objeto deve possuir um construtor
    constructor(nome, anoDeNascimento, profissao) {
        this.nome = nome;
        this.anoDeNascimento = anoDeNascimento;
        this.profissao = profissao;
    };

    ola() {
        console.log(`Olá, eu sou ${this.nome}`);
    }

    calculaIdade() {
        return new Date().getFullYear - this.anoDeNascimento;
    }
}

const pessoa = new Pessoa('Danilo', 1990, 'Desenvolvedor de software');
pessoa.ola();

// Trabalhando com herança
class Estudante extends Pessoa {
    constructor(nome, anoDeNascimento, matricula) {
        super(nome, anoDeNascimento, 'Estudante');
        this.matricula = matricula;
    }

    //polimorfismo - Implementa metodo olá especifico para estudante
    ola() {
        console.log(`Olá, sou uma pessoa estudante e o meu nome é ${this.nome}`);
    }
}

const estudante = new Estudante('Andreia', 1994, 23102023);
estudante.ola();
