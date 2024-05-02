/* Cadastro de Recrutas
Escreva um programa em javascript que permita salvar informações de um recruta. As informações a serem salvas são:
o primeiro nome
o sobrenome
o campo de estudo
o ano de nascimento */



const primeiroNome = prompt(`informe o nome do recruta:`)
const sobreNome = prompt(`Informe o sobre nome do recurta:`)
const campoDeEstudo = prompt(`Informe o campo de estudo do recruta`)
const anoDeNascimento = prompt(`Qual o ano de nascimento?`)

//exibindo
alert(
    "**Recurta Cadastro com sucesso!**\n" +
    "\nNome Completo: " + primeiroNome + ""  +    sobreNome +
    "\nCampo de Estudo: " + campoDeEstudo +
    "\nIdade: " + (2024 - anoDeNascimento)
)

/*Calculadora de 4 Operações
Escreve um programa em javascript que permita inserir dois valores numéricos e então calcule o resultado das quatro operações básicas (soma, subtração, multiplicação e divisão).
Após calcular os resultados o programa deve exibi-los na tela. */

