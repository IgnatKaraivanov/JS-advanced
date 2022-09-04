function search() {
  let userWord = document.getElementById("searchText").value;
  let townselement = Array.from(document.querySelectorAll("#towns li"));
  let match = document.getElementById("result");
  let count = 0;
  for (let town of townselement) {
    if (town.textContent.includes(userWord)) {
      town.style.fontWeight = "bold";
      town.style.textDecoration = "underline";
      count++;
    }else{
       town.style.fontWeight='normal'
       town.style.textDecoration ='none'
    }
  }
  match.textContent=`${count} matches found`
}
