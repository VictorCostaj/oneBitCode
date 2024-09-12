const idade = prompt("informe a sua idade: ")

if (idade > 18) {
    alert("você é maior de idade")
} else if (idade > 12) {
    alert("você é menor de idade")
}
//retornar valor boleano e se não retornar o JS vai tentar converter isso.


//ternário 

// forma abreviada

// const resultado = condicao ? resultado_verdade : resultado_falso

const resultado =  (idade > 12) ? "verdadeiro" : "falso" 

console.log(resultado)
