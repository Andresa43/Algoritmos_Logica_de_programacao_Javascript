/* 
    Faça um programa que tenha um menu e apresente a seguinte mensagem:

    Olá usuário! Digite o número da opção desejada

    1. Cadastrar um item na lista 
    2. Mostrar itens cadastrados 
    3. Sair do programa

    ---

    O programa deverá capturar o número digitado pelo usuário e mostrar os seguintes cenários:

    Caso o usuário digite 1, ele deverá cadastrar um item em uma lista 
    Caso o usuário digite 2, ele poderá ver os itens cadastrados
        se não houver nenhum item cadastrado, mostrar mensagem:
            "Não existem itens cadastrados"
    Caso o usuário digite 3, a aplicação deverá ser encerrada.

*/

let numeroDesejado;
let lista = []


while(numeroDesejado != 3){
    numeroDesejado = Number(prompt(`
Olá usuário! Digite o número da opção desejada

1. Cadastrar um item na lista 
2. Mostrar itens cadastrados 
3. Sair do programa
`))
    switch(numeroDesejado){
        case 1:
            let item = prompt("Digite o item que deseja cadastrar")
            lista.push(item)
            break;
        case 2:
            if(lista.length == 0){
                alert("Não existem itens cadastrados")
            }else{
                alert("Lista de itens cadastrados: " + lista)
            }
            break;
        case 3: 
            alert("Programa encerrado")
            break;
        default:
            alert("Opção inválida. Tente Novamente")
    }
}