function Inserir() {
    var valorA = parseFloat(document.getElementById("valorA").value);
    var valorB = parseFloat(document.getElementById("valorB").value);
    var valorC = parseFloat(document.getElementById("valorC").value);

    const quadrado = valorA * 4;
    const triangulo = (valorA * valorB) / 2;
    const trapezio = (valorA + valorB)*valorC / 2;

    document.getElementById("quadrado").value = "Área de " + quadrado.toFixed(4);
    document.getElementById("triangulo").value = "Área de " + triangulo.toFixed(4);
    document.getElementById("trapezio").value = "Área de " + trapezio.toFixed(4);
}