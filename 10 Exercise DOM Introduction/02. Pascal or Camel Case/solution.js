function solve() {
  let text = document.getElementById("text").value;
  let convention = document.getElementById("naming-convention").value;
  let result = "";
  if (convention === "Camel Case") {
    for (let index = 0; index < text.length; index++) {
      if (text[index] === " ") {
        result += text[index + 1].toUpperCase();
        index++;
      } else {
        result += text[index].toLowerCase();
      }
    }
  } else if (convention === "Pascal Case") {
    result += text[0].toUpperCase();
    for (let index = 1; index < text.length; index++) {
      if (text[index] === " ") {
        result += text[index + 1].toUpperCase();
        index++;
      } else {
        result += text[index].toLowerCase();
      }
      console.log();
    }
  } else {
    result = "Error!";
  }
  let resultElement = document.getElementById("result");
  resultElement.textContent = result;
}
