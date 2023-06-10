/*Recado: para todos os exercícios, eu criei um documento de texto chamado "Processo" dentro da pasta
README. Nele, eu explico o meu processo de pensamento assim como a minha interpretação e dificuldades.*/

function Inserir() {
    var largura = document.getElementById("largura").value;
    var comprimento = document.getElementById("comprimento").value;
    var precoMetro = document.getElementById("precoMetro").value;

    const area = largura * comprimento;
    const valorTotal = area * precoMetro;

    document.getElementById("area").value = area.toFixed(2);
    document.getElementById("valorTotal").value = valorTotal.toFixed(2);
}