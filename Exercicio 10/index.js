function Inserir () {

    var valor1 = parseFloat(document.getElementById("valor1").value);
    var valor2 = parseFloat(document.getElementById("valor2").value);
    var valor3 = parseFloat(document.getElementById("valor3").value);

    const comparacao = (valor1, valor2, valor3) => {
        let valores = [valor1, valor2, valor3];
        let valoresUnicos = [...new Set (valores)];
          return Math.min(...valoresUnicos);
    }
    
    document.getElementById("Menor").value = comparacao(valor1, valor2, valor3).toFixed(0);
}