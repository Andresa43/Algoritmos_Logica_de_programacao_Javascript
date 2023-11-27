/* 
    Solicitar o nome do aluno e as 3 notas 
    do bimestre calcular a média daque aluno

    A média positiva deverá ser maior que 6

    Se o aluno passou no bimestre, dar os
    parabéns.

    Se o aluno não passou no bismestre, 
    motivar o aluno a dar o seu melhor na prova
    de recuperação

    Em ambos os casos, mostre uma mensagem com o 
    nome do aluno e a nota 
*/

const nomeAluno = prompt("Olá! Para iniciar digite o seu nome: ")
const nota1 = prompt("Digite a primeira nota: ");
const nota2 = prompt("Digite a segunda nota: ");
const nota3 = prompt("Digite a terceira nota: ");

let average = (Number(nota1) + Number(nota2) + Number(nota3))/3;
average = average.toFixed(2)

if(average > 6){
    alert("Parabéns, " + nomeAluno + "! Você passou com a média " + average)
} else{
    alert("Você ainda não passou, " + nomeAluno + " mas ainda pode tirar um notão na recuperação! " + "media atual: " + average)
}



