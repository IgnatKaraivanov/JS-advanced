function create(words) {
  let parentElement = document.getElementById("content");
  let element = words;
  for (let i = 0; i < element.length; i++) {
    let div = document.createElement("div");
    let p = document.createElement("p");
    let text = document.createTextNode(element[i]);

    p.appendChild(text);
    p.style.display = "none";
    div.appendChild(p);
    div.addEventListener("click", function (event) {
      event.target.children[0].style.display = "block";
    });
    parentElement.appendChild(div);
  }
}
