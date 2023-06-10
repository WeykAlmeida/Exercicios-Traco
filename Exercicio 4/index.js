function Inserir() {
    var preco = parseFloat(document.getElementById("preco").value);
    var quantidade = parseFloat(document.getElementById("quantidade").value);
    var pagamento = parseFloat(document.getElementById("pagamento").value);

    const trocoSoma = pagamento - preco * quantidade;

     if (trocoSoma == 0) {
        alert(`Obrigado e volte sempre!`)
     }
     if (trocoSoma > 0) {
        document.getElementById("troco").value = trocoSoma.toFixed(2);
     }
     if (trocoSoma < 0) {
        alert(`Pagamento insuficiente! Faltam ${Math.abs(trocoSoma)} reais para realizar compra.`)
     }
}