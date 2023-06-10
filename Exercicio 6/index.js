function Inserir() {
    var nome = document.getElementById("nome").value;
    var salario = parseFloat(document.getElementById("salario").value);
    var expediente = parseFloat(document.getElementById("expediente").value);

    const soma = salario * expediente;

    alert(`O pagamento para ${nome} deve ser ${soma.toFixed(2)}.`)
}