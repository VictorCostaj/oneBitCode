let velocidade = 80

while (velocidade > 0) /*velocidade maior do que zero se torna falsa*/ {
    alert("O carro está a " + velocidade + "Km/h")
    velocidade -= 20
    alert("diminuindo 20 km/h")

    if(velocidade === 40){
        break
    }
}

alert("O carro parou")