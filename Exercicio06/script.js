/* 
    Jogo da adivinhação 

    Apresente a mensagem ao usuario 
    "Advinhe o número que estou pensando? Está entre 0 e 10"

    Crie uma lógica para gerar um número aleatório 
    e verificar se o número digitado é o mesmo que o
    aleatório gerado pelo sistema

    Enquanto o usuário não advinhar o número, mostrar a mensagem: 
    "Erro, tente novamente"

    Caso o usuário acerte o número, apresentar a mensagem: 
    "Parabéns! Você advinhou o número x em x tentativas"

    Substitua o x mensagem pelo número de tentativas
*/


let numeroAleatorio = (Math.random()*10).toFixed(0);
let resposta = prompt("Advinhe o número que estou pensando? Está entre 0 e 10");
let contador = 1;

while (resposta != numeroAleatorio){
    contador++;
    resposta = prompt("Erro, tente novamente");
}

alert("Parabéns! Você advinhou o número " + resposta + " em " + contador + " tentativas");
