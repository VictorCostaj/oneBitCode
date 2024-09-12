// Teste de Velocidade
// Escreva um programa em javascript que permita inserir o nome e a velocidade de dois veículos e exiba na tela uma mensagem dizendo qual dos dois é mais rápido (ou que as velocidades são iguais se este for o caso)
// Cálculo de Dano
// Escreva um programa que permita inserir o nome e o poder de ataque de um personagem, depois o nome, a quantidade de pontos de vida, o poder de defesa de outro personagem e se ele possui um escudo, e então calcule a quantidade de dano causado baseado nas seguintes regras:
// Se o poder de ataque for maior do que a defesa e o defensor não possuir um escudo, o dano causado será igual a diferença entre o ataque e a defesa.
// Se o poder de ataque for maior do que a defesa e o defensor possuir um escudo, o dano causado será igual a metade da diferença entre o ataque e a defesa.
// Se o poder de ataque for menor ou igual a defesa, o dano causado será 0.
// Por fim, o programa deve subtrair a quantidade de dano da quantidade de pontos de vida do personagem defensor e exibir na tela a quantidade de dano e as informações atualizadas de ambos os personagens.

const veiculo1 = prompt("Informe o nome do primeiro veiculo")
const velocidade1 = parseFloat(prompt("informe a velocidade em primeiro veículo"))

const veiculo2 = prompt("Informe o nome do segundo veiculo")
const velocidade2 = parseFloat(prompt("informe a velocidade em segundo veículo"))

if (velocidade1 > velocidade2) {
    alert(veiculo1 + " é mais rápido do que " + veiculo2)
} else if (velocidade2 > velocidade1) {
    alert(veiculo2 + " é menos rápido do que " + veiculo1)
} else {
    alert(veiculo1 + " e " + veiculo2 + " possuem velocidade iguais")
}
