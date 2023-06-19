function Exibicao() {
    const medida = document.getElementById("medida").value;

    if (medida === "C") {
      document.getElementById("rootCelsius").style.display = "block";
      document.getElementById("rootFahrenheit").style.display = "none";
    } else {
      document.getElementById("rootCelsius").style.display = "none";
      document.getElementById("rootFahrenheit").style.display = "block";
    }
  }

  document.getElementById("medida").addEventListener("change", Exibicao);
  Exibicao();

function Converter() {
    const medida = document.getElementById("medida").value;
    let resultado;

    if (medida === "C") {
        const C = parseFloat(document.getElementById("Celsius").value);
        resultado = (C * 1.8) + 32;
        document.getElementById("resultado").innerText =
        `Temperatura equivalente em Fahrenheit: ${resultado.toFixed(2)}`;
    } else {
        const F = parseFloat(document.getElementById("Fahrenheit").value);
        resultado = (F - 32) * (5/9);
        document.getElementById("resultado").innerText =
        `Temperatura equivalente em Celsius: ${resultado.toFixed(2)}`;
    }
}