function calcular() {
    var n1 = document.getElementById("n1").value
    var n2 = document.getElementById("n2").value
    var n3 = document.getElementById("n3").value

    var p1 = document.getElementById("p1").value
    var p2 = document.getElementById("p2").value
    var p3 = document.getElementById("p3").value

    var media = (Number(n1*p1) + Number(n2*p2) + Number(n3*p3)) / (Number(p1) + Number(p2) + Number(p3))

    alert(`A média ponderada dos valores é: ${media.toFixed(1)}`)
    console.log(`A média ponderada dos valores é: ${media.toFixed(1)}`)
    localStorage.setItem("Média", `${media.toFixed(1)}`)

}

    // adiciona evento de click no botao
    document.getElementById('contarBotao').addEventListener('click', function() {
        // pega input do usuario
        var frase = document.getElementById('fraseInput').value;
  
        // Chama a função para contar palavras e exibir o resultado
        var quantidadePalavras = contarPalavras(frase);
        document.getElementById('resultado').textContent = "A frase tem " + quantidadePalavras + " palavras.";
      });
  
      // function conta palavras
      function contarPalavras(frase) {
        // remove espaços em branco extras
        frase = frase.trim();
  
        // divide a frase em palavras
        var palavras = frase.split(' ');
  
        // filtra palavras vazias
        var palavrasFiltradas = palavras.filter(function(palavra) {
          return palavra !== '';
        });
  
        // retorna a quantidade de palavras
        return palavrasFiltradas.length;
      }