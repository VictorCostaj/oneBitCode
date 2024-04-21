function show() {

 //   No javascript, através da função show() que será executada ao clicar no botão, podemos obter um elemento do DOM através do id:
// Obter um elemento único a partir do seu id
  const contactList = document.getElementById("contact-list");
  console.log(contactList);

}

function show() {
    // ...
  
    // Obter vários elementos (HTMLCollection) a partir de um nome de tag
    const liElements = document.getElementsByTagName("li")
    console.log(liElements)
  }

  function show() {
    // ...
  
    // Obter vários elementos (HTMLCollection) a partir de uma classe
    const contactInputs = document.getElementsByClassName("contact-input")
    console.log(contactInputs)
  }