function Inserir() {

    const CoeficienteA = parseFloat(document.getElementById("CoeficienteA").value);
    const CoeficienteB = parseFloat(document.getElementById("CoeficienteB").value);
    const CoeficienteC = parseFloat(document.getElementById("CoeficienteC").value);

    //Δ = b²-4.a.c
    const delta = (CoeficienteB * CoeficienteB) - 4 * CoeficienteA * CoeficienteC;
  
    if (delta < 0) {
      alert('Esta equação não possui raízes reais');
    } else {
      //-b ± √Δ / 2.a
      const X1 = (-CoeficienteB + Math.sqrt(delta)) / (2 * CoeficienteA);
      const X2 = (-CoeficienteB - Math.sqrt(delta)) / (2 * CoeficienteA);
      document.getElementById("X1").value = X1.toFixed(4);
      document.getElementById("X2").value = X2.toFixed(4);
    }
  }