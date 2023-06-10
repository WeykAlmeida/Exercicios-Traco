function Inserir() {
    var medidaGlicose = parseFloat(document.getElementById("medidaGlicose").value);

    if (medidaGlicose <= 100) {
        document.getElementById("classificacao").value = `Normal`;
    }
    if (medidaGlicose > 100 && medidaGlicose <= 140) {
        document.getElementById("classificacao").value = `Elevado`;
    }
    if (medidaGlicose > 140) {
        document.getElementById("classificacao").value = `Diabetes`;
    }
}