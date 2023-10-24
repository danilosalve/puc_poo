/* prototipo_objeto
Exemplo criação de objeto utilizando o conceito de prototipo.

@author Danilo Otavio Lima Salve
@since 15/10/2022
@version 1.0
*/

// Prototipo - Mecanismo de herança entre objetos.
function descobrirTipo(objeto) {
    if (Object === objeto.constructor.name) {
        console.log('É um objeto raiz');
    } else {
        console.log(`É um objeto do tipo ${ objeto.constructor.name}`);
    }
}

function Pessoa(nome) {
    this.nome = nome;
}

const pessoa = new Pessoa('Danilo');

descobrirTipo({});
descobrirTipo(pessoa);

// Criando um objeto atravez do create
const pessoa2 = Object.create(pessoa);
pessoa2.nome = 'Andreia';
console.log('Pesso 02', pessoa2);