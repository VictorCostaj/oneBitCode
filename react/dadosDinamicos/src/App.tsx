function App() {
  const tech = "Hello"; /* posso criar uma variável e fora do escopo e passar ela dentro da minha estrutura html
  no exemplo a baixo tech tem valor de "JavaScript" passando a variavel tem por chaves dentro da estruura de h1, vou ter a alteração do nome
  */

  return (
    <div>
      <h1>{tech} Fundamentos</h1>
    </div>
  );
}

export default App;
