function convertTemperature() {
  const input = document.getElementById("temperatureInput").value;
  const unit = document.getElementById("unitSelect").value;
  const resultDiv = document.getElementById("result");

  // Validation
  if (isNaN(input) || input === "") {
    resultDiv.textContent = "Please enter a valid number.";
    return;
  }

  const temp = parseFloat(input);
  let resultText = "";

  if (unit === "celsius") {
    const f = (temp * 9/5) + 32;
    const k = temp + 273.15;
    resultText = `${f.toFixed(2)} °F | ${k.toFixed(2)} K`;
  }
  else if (unit === "fahrenheit") {
    const c = (temp - 32) * 5/9;
    const k = c + 273.15;
    resultText = `${c.toFixed(2)} °C | ${k.toFixed(2)} K`;
  }
  else if (unit === "kelvin") {
    const c = temp - 273.15;
    const f = (c * 9/5) + 32;
    resultText = `${c.toFixed(2)} °C | ${f.toFixed(2)} °F`;
  }

  resultDiv.textContent = resultText;
}
