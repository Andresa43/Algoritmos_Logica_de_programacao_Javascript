/* 
Capturar 2 números e fazer as operações matemáticas 
de soma, subtração, multiplicação, divisão e resto da divisão

e para cada operação, mostrar um alerta com o resultado.
*/


let numberOne = prompt("Digite o primeiro número: ");
let numberTwo = prompt("Digite o segundo número: "); 
numberOne = Number(numberOne);
numberTwo = Number(numberTwo);

const sum = numberOne + numberTwo;
const sub = numberOne - numberTwo;
const multi = numberOne * numberTwo;
const divisao = numberOne / numberTwo;
const resto = numberOne % numberTwo;

alert("Resultado da soma dos números " + numberOne + "+" + numberTwo + "= " + sum);
alert("Resultado da subtração dos números " + numberOne + "-" + numberTwo + "= " + sub);
alert("Resultado da multiplicação dos números " + numberOne + "*" + numberTwo + "= " + multi);
alert("Resultado da divisao dos números " + numberOne + "/" + numberTwo + "= " + divisao);
alert("Resultado do resto da divisão " + numberOne + "/" + numberTwo + "= " + resto);


