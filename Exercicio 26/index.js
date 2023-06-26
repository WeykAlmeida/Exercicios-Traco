function Contar() {
    const palavra = document.getElementById("Palavra").value;
    let Vogais = 0;
    let Consoantes = 0;
    const letrasVogais = ["a", "e", "i", "o", "u"];

    for (let i = 0; i < palavra.length; i++) {
        if (letrasVogais.includes(palavra[i].toLowerCase())) {
            Vogais++;
        } else
        if (palavra[i].toLowerCase() >= "a" && palavra[i].toLowerCase() <= "z") {
            Consoantes++;
        }
    }

    document.getElementById("Vogais").value = Vogais;
    document.getElementById("Consoantes").value = Consoantes;
}