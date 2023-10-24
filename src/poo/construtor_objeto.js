/* construtor_objeto
Exemplo criação de objeto utilizando o conceito de construtor.

@author Danilo Otavio Lima Salve
@since 15/10/2022
@version 1.0
*/

// Construtor de objetos - funcções que criam e retornam objetos
// Diferente da fabrica ele cria o objeto porém não retorna o mesmo.
function Pessoa(nome, nascimento, profissao) {
    this.nome = nome;
    this.anoDeNascimento = nascimento;
    this.profissao = profissao;
    this.calculaIdade = function() {
        return new Date().getFullYear() - this.anoDeNascimento;
    };
}

const pessoa1 = new Pessoa('Danilo', 1990, 'Especialista em Desenvolvimento de software');
console.log('-'.repeat(15));
console.log('Pessoa 01: ', pessoa1);
console.log('Pessoa 01 - Idade', pessoa1.calculaIdade());
console.log('-'.repeat(15));
