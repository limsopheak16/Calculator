const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function deleteOneByOne() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

function calculateSin() {
  display.value = Math.sin(eval(display.value));
}

function calculateCos() {
  display.value = Math.cos(eval(display.value));
}

function calculateTan() {
  display.value = Math.tan(eval(display.value));
}

function calculateSqrt() {
  display.value = Math.sqrt(eval(display.value));
}

function calculateSquare() {
  display.value = Math.pow(eval(display.value), 2);
}

function calculateCube() {
  display.value = Math.pow(eval(display.value), 3);
}

function calculatePower() {
  let base = eval(display.value);
  let exponent = prompt("Enter exponent:");
  display.value = Math.pow(base, exponent);
}

function calculatePercentage() {
  display.value = eval(display.value) / 100;
}
