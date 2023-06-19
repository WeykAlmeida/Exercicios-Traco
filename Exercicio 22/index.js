function Inserir() {
    const numero = parseFloat(document.getElementById("numero").value);
    let multiplicacao10 = "";

    for (let i = 1; i <= 10; i++) {
        multiplicacao10 += numero + " x " + i + " = " + (numero * i) + "\n";
    }
    document.getElementById("multiplicacao10").innerText = multiplicacao10;
}