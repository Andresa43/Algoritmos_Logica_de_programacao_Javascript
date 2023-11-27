/* 
    Crie uma lista de pacientes 

    Cada paciente deverá conter 
        nome
        idade
        peso 
        altura
    
    Escreva uma lista contendo o nome dos pacientes, idades, alturas e pesos
    Ex: Luiz tem 20 anos pesa 100 kilos e tem uma altura de 190cm 
*/



const listaPacientes = [
    {
        nome: 'André',
        idade: 23,
        peso: 70,
        altura: 1.80, 
    },
    {
        nome: 'Patricia',
        idade: 30,
        peso: 55,
        altura: 1.63
    }   
]

let NomePacientes = []

for(let paciente of listaPacientes){
    NomePacientes.push(`${paciente.nome} tem ${paciente.idade} anos, pesa ${paciente.peso} kilos e tem altura de ${paciente.altura} cm ` )
}
alert(NomePacientes)



// function Pessoa(nome, idade, peso, altura){
//     this.nome = nome,
//     this.idade = idade,
//     this.peso = peso,
//     this.altura = altura
// }

// let pessoa1 = new Pessoa("André", 23, 67, 1.60,)
// console.log(pessoa1.nome)

    