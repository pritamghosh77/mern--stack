let display = document.getElementById("display");

function appendNumber(num) {
  display.value += num;
}

function appendOperator(op) {
  let value = display.value;
  let lastChar = value.slice(-1);

  const operators = ["+", "-", "*", "/", "%"];

  if (op === ".") {
    // Prevent multiple decimals in one number segment
    let parts = value.split(/[\+\-\*\/\%]/);
    let lastPart = parts[parts.length - 1];
    if (lastPart.includes(".")) {
      return; // Do nothing if decimal already exists
    }
    if (lastChar === "" || operators.includes(lastChar)) {
      display.value += "0"; // Prepend a zero like 0.
    }
    display.value += ".";
  } else {
    if (value === "") return; // Don't allow operator at the beginning
    if (operators.includes(lastChar) || lastChar === ".") {
      display.value = value.slice(0, -1) + op; // Replace last operator
    } else {
      display.value += op;
    }
  }
}

function clearDisplay() {
  display.value = "";
}

function clearoneitem() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  display.value = eval(display.value);
}