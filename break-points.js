function changeBackgroundColor(element, color) {
  element.style.backgroundColor = color;
}

const myBox = document.getElementById("myBox");
debugger; /* creates a breakpoint and allows you to inspect the current state of the code */

try {
  changeBackgroundColor(myBox, "blue");
} catch (e) {
  console.log(e);
}

prompt("What is your name");
