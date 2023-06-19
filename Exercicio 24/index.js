function Inserir() {
    const numeros = document.getElementById("numeros").value;
    const nOrdenados = numeros.split(',').map(Number);

    nOrdenados.sort(function(a, b) {
        return a - b;
    });

    document.getElementById("nOrdenados").value = nOrdenados;
}