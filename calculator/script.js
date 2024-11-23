let display = document.getElementById("display");

// Function to append symbols or numbers to the display
function appendSymbol(symbol) {
  if (display.innerText === "0") {
    display.innerText = symbol;
  } else {
    display.innerText += symbol;
  }
}

// Function to clear the display
function clearDisplay() {
  display.innerText = "0";
}

// Function to delete the last character
function deleteLast() {
  display.innerText = display.innerText.slice(0, -1) || "0";
}

// Function to evaluate the expression
function calculate() {
  try {
    display.innerText = eval(display.innerText.replace("×", "*").replace("÷", "/"));
  } catch (error) {
    display.innerText = "Error";
  }
}
