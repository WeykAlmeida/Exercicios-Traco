function Inserir() {
    const numeroInicial = parseFloat(document.getElementById("numeroInicial").value);
    const numeroFinal = parseFloat(document.getElementById("numeroFinal").value);
    let soma = 0;

    for (let i = numeroInicial; i < numeroFinal; i++) {
    if (i % 2 === 1) {
        soma += i;
    }
  }
  
  document.getElementById("soma").value = soma;
}