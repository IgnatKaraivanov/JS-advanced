function toggle() {
  let textElement = document.getElementById("extra");
  let button = document.querySelector(".button");

  if (button.textContent == "Less") {
    button.textContent = "More";
    textElement.style.display = "none";
  } else if (button.textContent == "More") {
    button.textContent = "Less";
    textElement.style.display = "block";
  }
}
