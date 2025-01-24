const display = document.getElementById("display");

function appendTodisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calsulate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
function Solve(input) {
  display.value /= input;
}


function deleteOnebyone(){
    display.value = display.value.toString().slice(0, -1);
}
