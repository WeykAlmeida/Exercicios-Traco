function Inserir() {
    const valorX = parseFloat(document.getElementById("valorX").value);
    let geracaoProcedural = "";

    for (let i = 2; i <= valorX; i += 2) {
        geracaoProcedural += i + "\n";
    }
    document.getElementById("geracaoProcedural").innerText = geracaoProcedural;
}