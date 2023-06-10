function Converter() {
    var tempoSegundos = parseFloat(document.getElementById("tempoSegundos").value);

    const tempo = {
        horas: Math.floor(tempoSegundos / 3600),
        minutos: Math.floor((tempoSegundos / 60) % 60),
        segundos: Math.floor(tempoSegundos % 60)
    }

    document.getElementById("tempo").value = `${tempo.horas}:${tempo.minutos}:${tempo.segundos}`;
}