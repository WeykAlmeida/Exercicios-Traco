function Inserir() {
    var Nome1 = document.getElementById("Nome1").value;
    var Nome2 = document.getElementById("Nome2").value;
    var Idade1 = parseFloat(document.getElementById("Idade1").value);
    var Idade2 = parseFloat(document.getElementById("Idade2").value);

    const Media = (Idade1 + Idade2) / 2;

     return alert(`A idade média de ${Nome1} e ${Nome2} é ${Media} anos.`)
}