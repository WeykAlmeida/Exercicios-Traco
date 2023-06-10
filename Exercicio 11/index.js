function Inserir() {
    var Nota1 = parseFloat(document.getElementById("Nota1").value);
    var Nota2 = parseFloat(document.getElementById("Nota2").value);
    var resultado = document.getElementById("resultado");

    const Notas = Nota1 + Nota2;

    document.getElementById("Media").value = Notas.toFixed(1);

    resultado.innerText = Notas <= 60.0 ? `REPROVADO` : `APROVADO`;

    if (isNaN(Nota1) || isNaN(Nota2)) {
        alert(`Por favor inserir a outra nota`);
    }
}