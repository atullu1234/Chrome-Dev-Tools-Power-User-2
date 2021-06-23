const addingBtn = document.getElementById("addingBtn");
const number1 = document.getElementById("number1").value;
const number2 = document.getElementById("number2").value;
console.log("number1", number1);
console.log("number2", number2);
debugger;
addingBtn.addEventListener("click", () => {
  let sum = add(number1, number2);
});

function add(x, y) {
  return x + y;
}
