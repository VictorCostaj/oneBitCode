const entrada1 = prompt("Informe o primeiro número:")
const entrada2 = prompt("Informe o segundo Número")

const x = parseFloat(entrada1)
const y = parseFloat(entrada2)

const soma = x + y
const subtraçao = x - y
const multiplicaçao = x * y
const divisao = x / y

alert(
    "Resultado: \n" +
    "\nSoma: " + soma +
    "\nSubtração: " + subtraçao +
    "\nMultiplicação: " + multiplicaçao +
    "\nDivisão: " + divisao
)