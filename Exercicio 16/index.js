function Inserir() {
    const distancia1 = parseFloat(document.getElementById("distancia1").value);
    const distancia2 = parseFloat(document.getElementById("distancia2").value);
    const distancia3 = parseFloat(document.getElementById("distancia3").value);

    const comparacao = (distancia1, distancia2, distancia3) => {
        let distancias = [distancia1, distancia2, distancia3];
        let distanciasUnicas = [...new Set (distancias)];
          return Math.max(...distanciasUnicas);
    }
    
    document.getElementById("maior").value = comparacao(distancia1, distancia2, distancia3).toFixed(2);
}