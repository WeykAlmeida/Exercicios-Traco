function Inserir() {
    var preco = parseFloat(document.getElementById("preco").value);
    var quantidade = parseFloat(document.getElementById("quantidade").value);
    var pagamento = parseFloat(document.getElementById("pagamento").value);

    const trocoSoma = pagamento - preco * quantidade;

     if (trocoSoma == 0) {
        troco.innerText =
        `Obrigado e volte sempre!`
     }
     if (trocoSoma > 0) {
        troco.innerText =
        `Troco = ${trocoSoma.toFixed(2)}`;
     }
     if (trocoSoma < 0) {
        troco.innerText =
        `Dinheiro insuficiente. Faltam ${Math.abs(trocoSoma).toFixed(2)} reais.`
     }
}