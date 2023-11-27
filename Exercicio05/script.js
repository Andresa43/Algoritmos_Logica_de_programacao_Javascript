/* 
    Capture 10 items para compor a lista de um supermercado

    Após capturar os 10 items, imprima-os, separando por vírgula 
*/

let lista = []

for(let item = 0 ; item < 10 ; item++ ){
    itemMercado = prompt("Digite o item " + (item+1) + " para compor a lista")
    lista[item] = itemMercado 
}

alert("lista completa: " + lista)
