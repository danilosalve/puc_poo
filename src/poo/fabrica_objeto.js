/* fabrica_objeto
Exemplo criação de objeto utilizando o conceito de fabrica.

@author Danilo Otavio Lima Salve
@since 15/10/2022
@version 1.0
*/

// Fabrica de objetos - funcções que criam e retornam objetos
function criaEmpregado (salarioBase, valorHoraExtra, qtHorasExtras) {
    return {
        salarioBase,
        valorHoraExtra,
        qtHorasExtras,
        calculaSalario: function() {
            return this.salarioBase + (this.valorHoraExtra * this.qtHorasExtras);
        }
    }
}

const empregado = criaEmpregado(1200, 6, 17);
console.log('Vlr do salario: ', empregado.calculaSalario());
