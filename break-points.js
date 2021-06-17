function changeBackgroundColor(element, color) {
  element.style.backgroundColor = color;
}

const myBox = document.getElementById("myBox");

try {
  changeBackgroundColor(myBox, "blue");
} catch (e) {
  debugger; /* creates a breakpoint and allows you to inspect the current state of the code */
}

prompt("What is your name");
