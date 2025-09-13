let textArea = document.getElementById("textInput");
let countDisplay = document.getElementById("count");

textArea.oninput = function() {
  countDisplay.innerText = textArea.value.length;
};
