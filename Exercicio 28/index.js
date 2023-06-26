function Exibir() {
    const numeros = document.getElementById("numeros").value;
    const numerosSeparados = numeros.split(', ').map(Number);

    const comparacaoMenor = (numerosSeparados) => {
        let numerosUnicos = [...new Set (numerosSeparados)];
          return Math.min(...numerosUnicos);
    }

    const comparacaoMaior = (numerosSeparados) => {
        let numerosUnicos = [...new Set (numerosSeparados)];
          return Math.max(...numerosUnicos);
    }


    document.getElementById("saida").value =
    `${comparacaoMenor(numerosSeparados)} e ${comparacaoMaior(numerosSeparados)}`;
}