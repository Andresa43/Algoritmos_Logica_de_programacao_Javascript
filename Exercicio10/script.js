/* Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números
*/

let number1 = Number(prompt("Digite o primeiro número"));
let number2 = Number(prompt("Digite o segundo número"));
let soma = number1 + number2
let subtracao = number1 - number2
let multiplicacao = number1 * number2
let divisao = number1 / number2
let resto = number1 % number2
let numeroPar = (number1 + number2) % 2

alert(`
${soma} = A soma dos dois números;
${subtracao} = A subtração dos dois números;
${multiplicacao} = A multiplicação dos dois números;
${divisao} = A divisão dos dois números;
${resto} = O resto da divisão dos dois números
`)

if (numeroPar == 0) {
    alert("A soma dos números é par")
} else {
    alert("A soma dos números é impar")
}

if (number1 == number2) {
    alert("Os dois números inseridos são iguais")
} else {
    alert("Os dois números inseridos são diferentes")
}


