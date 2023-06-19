function Converter() {
    const salario = parseFloat(document.getElementById("salario").value);

    if (salario <= 999.00) {
        porcentagem = 20;
        aumento = salario * (porcentagem / 100);
        novoSalario = salario + aumento;
    }
    if (salario > 1000.00 && salario <= 2999.00) {
        porcentagem = 15;
        aumento = salario * (porcentagem / 100);
        novoSalario = salario + aumento;
    }
    if (salario > 3000.00 && salario <= 7999.00) {
        porcentagem = 10;
        aumento = salario * (porcentagem / 100);
        novoSalario = salario + aumento;
    }
    if (salario > 8000.00) {
        porcentagem = 5;
        aumento = salario * (porcentagem / 100);
        novoSalario = salario + aumento;
    }
    
    document.getElementById("novoSalario").value = `R$ ${novoSalario.toFixed(2)}`;
    document.getElementById("aumento").value = `R$ ${aumento.toFixed(2)}`;
    document.getElementById("porcentagem").value = `${porcentagem} %`;
}