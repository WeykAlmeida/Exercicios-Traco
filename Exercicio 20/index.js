function Inserir() {
    const numeroInicial = parseFloat(document.getElementById("numeroInicial").value);
    const numeroFinal = parseFloat(document.getElementById("numeroFinal").value);

    const n = ( numeroFinal - numeroInicial ) + 1;
    const resultado = n / 2 * ( numeroInicial + numeroFinal );

    document.getElementById("resultado").value = resultado;
}