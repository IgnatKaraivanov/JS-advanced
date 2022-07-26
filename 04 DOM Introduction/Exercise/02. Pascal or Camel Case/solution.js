function solve() {
  let text = document.getElementById('text').value;
  let convention = document.getElementById('naming-convention').value;
  let result = ''

  //  "this is an example", "Camel Case"	thisIsAnExample
  // "secOND eXamPLE", "Pascal Case"	SecondExample
  // "Invalid Input", "Another Case"	Error!
  if (convention === 'Camel Case') {
    for (let index = 0; index < text.length; index++) {
      if (text[index] === ' ') {
        result += (text[index + 1].toUpperCase());
        index++;
      } else {
        result += text[index].toLowerCase();
      }

    }

  } else if (convention === 'Pascal Case') {
    result += text[0].toUpperCase();
    for (let i = 1; i < text.length; i++) {
      if (text[i] === ' ') {
        result += (text[i + 1].toUpperCase());
        i++;
      } else {
        result += text[i].toLowerCase();
      }
    }
  } else {
    result = 'Error!'
  }
  let resultElement = document.getElementById('result')
  resultElement.textContent=result;
}
// solve("this is an example", "Camel Case")