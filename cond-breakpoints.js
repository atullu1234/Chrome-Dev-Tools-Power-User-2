function changeBackgroundColor(element, color) {
  element.style.backgroundColor = color;
}

const myBox = document.getElementById("myBox");

try {
  changeBackgroundColor(myBox, "blue");
} catch (e) {
  console.log(e);
}

prompt("What is your name");
