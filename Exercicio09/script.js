/*
    Dada uma pacientes d pacientes, descubra o IMC de cada paciente e
    imprima 

    "Paciente X IMC de: Y"

    Onde X é o nome do paciente e Y é o IMC desse paciente

    Crie uma função pra fazer o cálculo de IMC
*/

const pacientes = [
    {
        nome: "Andresa",
        idade: 22,              
        altura: 164,
        peso: 72,
    },
    {
        nome: "Mateus",
        idade: 26,              
        altura: 180,
        peso: 100,
    }
]

for(let index = 0; index < pacientes.length; index++){
    alert(`Paciente ${pacientes[index].nome} IMC: ${calculoIMC(index)} kg/m2`)
}

function calculoIMC(index){
    let imc = pacientes[index].peso / ((pacientes[index].altura / 100) **2);
    imc = imc.toFixed(2)    
    return imc
}





















