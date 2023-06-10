function Inserir() {

    const Minutos = parseFloat(document.getElementById("Minutos").value);
    let Valor = 50.00;

    if (Minutos > 100) {
        Valor += (Minutos - 100) * 2;
    }
    document.getElementById("Valor").value= `R$ ${Valor.toFixed(2)}`;
}