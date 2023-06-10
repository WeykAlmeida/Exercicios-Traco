function Inserir() {
    var base = parseFloat(document.getElementById("base").value);
    var altura = parseFloat(document.getElementById("altura").value);

    const area = base * altura;
    const perimetro = (base + base) + (altura + altura);
    const diagonal = Math.sqrt((base * base) + (altura * altura));

    document.getElementById("area").value = area.toFixed(4);
    document.getElementById("perimetro").value = perimetro.toFixed(4);
    document.getElementById("diagonal").value = diagonal.toFixed(4);
}