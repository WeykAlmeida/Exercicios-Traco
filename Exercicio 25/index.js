function Inserir() {
    const dataNascimento = document.getElementById("dataNascimento").value;
    const [dia, mes] = dataNascimento.split("/").map(Number);

    document.getElementById("Signo").value = Signo(mes, dia);
}

function Signo(mes, dia) {
    if (mes == 1) {
        if (dia < 21) {
            return "Capricórnio";
        } else {
            return "Aquário";
        }
    } else if (mes == 2) {
        if (dia < 19) {
            return "Aquário";
        } else {
            return "Peixes";
        }
    } else if (mes == 3) {
        if (dia < 21) {
            return "Peixes";
        } else {
            return "Áries";
        }
    } else if (mes == 4) {
        if (dia < 21) {
            return "Áries";
        } else {
            return "Touro";
        }
    } else if (mes == 5) {
        if (dia < 21) {
            return "Touro";
        } else {
            return "Gêmeos";
        }
    } else if (mes == 6) {
        if (dia < 21) {
            return "Gêmeos";
        } else {
            return "Câncer";
        }
    } else if (mes == 7) {
        if (dia < 23) {
            return "Câncer";
        } else {
            return "Leão";
        }
    } else if (mes == 8) {
        if (dia < 23) {
            return "Leão";
        } else {
            return "Virgem";
        }
    } else if (mes == 9) {
        if (dia < 23) {
            return "Virgem";
        } else {
            return "Libra";
        }
    } else if (mes == 10) {
        if (dia < 23) {
            return "Libra";
        } else {
            return "Escorpião";
        }
    } else if (mes == 11) {
        if (dia < 22) {
            return "Escorpião";
        } else {
            return "Sagitário";
        }
    } else if (mes == 12) {
        if (dia < 22) {
            return "Sagitário";
        } else {
            return "Capricórnio";
        }
    }
}