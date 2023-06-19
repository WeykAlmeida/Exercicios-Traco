function Inserir() {
    var number1 = parseFloat(document.getElementById("number1").value);
    var number2 = parseFloat(document.getElementById("number2").value);

    if (number1 % number2 === 0 || number2 % number1 === 0) {
        resultado.innerText = `São múltiplos.`;
    } else {
        resultado.innerText = `Não são múltiplos.`;
    }
}