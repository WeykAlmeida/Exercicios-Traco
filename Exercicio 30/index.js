function Converter() {
    const numero = document.getElementById("numero").value;
    var unidade = ["Zero", "Um", "Dois", "Três", "Quatro", "Cinco",
    "Seis", "Sete", "Oito", "Nove", "Dez", "Onze",
    "Doze", "Treze", "Quatorze", "Quinze", "Dezesseis",
    "Dezessete", "Dezoito", "Dezenove"]
    var dezena = ["", "", "Vinte", "Trinta", "Quarenta", "Cinquenta", "Sessenta",
    "Setenta", "Oitenta", "Noventa"]

    if (numero <= 19) {
        document.getElementById("saida").value = `${unidade[numero]}.`;
    }

    if (numero > 19) {
        if (numero[1] != 0) {
            document.getElementById("saida").value =
            `${dezena[numero[0]]} e ${unidade[numero[1]]}.`;
        } else {
            document.getElementById("saida").value =
            `${dezena[numero[0]]}.`;
        }
    }
}