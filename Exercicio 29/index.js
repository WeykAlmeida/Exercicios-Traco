function Validar() {
    let CNPJ = document.getElementById("CNPJ").value;
  
    CNPJ = CNPJ.replace(/[^\d]+/g, '');
  
    var DV1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    var DV2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    let soma = 0;
  
    for (let i = 0; i < 12; i++) {
      soma += parseInt(CNPJ[i]) * DV1[i];
    }
    var resto = soma % 11;
    var calcDV1 = resto < 2 ? 0 : 11 - resto;
  
    soma = 0;
    for (let i = 0; i < 13; i++) {
      soma += parseInt(CNPJ[i]) * DV2[i];
    }
    resto = soma % 11;
    var calcDV2 = resto < 2 ? 0 : 11 - resto;
  
    if (parseInt(CNPJ[12]) === calcDV1 && parseInt(CNPJ[13]) === calcDV2) {
      document.getElementById("saida").value = "Válido.";
    } else {
      document.getElementById("saida").value = "Inválido.";
    }
  }