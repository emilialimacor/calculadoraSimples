function calculate() {
  // Obter valores e operador
  var value1 = parseFloat(document.getElementById("input1").value);
  var value2 = parseFloat(document.getElementById("input2").value);
  var operator = document.getElementById("operator").value;

  // Verificar se os valores são válidos
  if (isNaN(value1) || isNaN(value2)) {
    alert("Por favor, insira números válidos.");
    return;
  }

  // Realizar operação
  var result;
  var remainder;

  switch (operator) {
    case "+":
      result = value1 + value2;
      break;
    case "-":
      result = value1 - value2;
      break;
    case "*":
      result = value1 * value2;
      break;
    case "/":
      if (value2 !== 0) {
        result = Math.floor(value1 / value2);
        remainder = value1 % value2;
      } else {
        alert("Não é possível dividir por zero.");
        return;
      }
      break;
    default:
      alert("Operador inválido.");
      return;
  }

  // Exibir resultado
  document.getElementById("result").innerText = "Resultado: " + result;
  if (remainder !== undefined) {
    document.getElementById("remainder").innerText = "Resto: " + remainder;
  } else {
    document.getElementById("remainder").innerText = "";
  }
}
