function Inserir() {
    var raio = parseFloat(document.getElementById("raio").value);

    const pi = (raio * raio) * 3.14159;

    document.getElementById("area").value = pi.toFixed(3);
}