/* aula_01
Exemplo simples de POO

@author Danilo Otavio Lima Salve
@since 15/10/2022
@version 1.0
*/

var pessoa = {
    nome: 'Danilo',
    idade: 33,
    saudar: function() {
        console.log(`Salve !!!`);
    }
}

// # Acesso do atributo
// ## Acesso direto
console.log('O meu nome é: ', pessoa.nome);

// ## Acesso por posição/chave
console.log('O meu nome é: ', pessoa['idade']);

// Atribuição
// Direta
pessoa.nome = 'Danilo Salve';
// posição/chave
pessoa['nome'] = 'Danilo O. L. Salve'

// # Metodos
// ## Acesso de forma unica.
pessoa.saudar();