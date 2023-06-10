function Inserir() {
    var distancia = parseFloat(document.getElementById("distancia").value);
    var combustivel = parseFloat(document.getElementById("combustivel").value);

    const consumoMedio = distancia / combustivel;

    document.getElementById("consumoMedio").value = consumoMedio.toFixed(3) + " quilômetros";
}