function Verificar() {
    const Palavra = document.getElementById("Palavra").value;
    const palavraReversa = Palavra.split('').reverse().join('');
    
    for (let i = 0; i < Palavra.length; i++) {
        if (Palavra.toLowerCase() == palavraReversa.toLowerCase()) {
            document.getElementById("saida").value = "É palíndroma.";
        } else {
            document.getElementById("saida").value = "Não é palíndroma.";
        }
    }
}