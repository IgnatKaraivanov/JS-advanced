function calories(input) {
  let obj = {};
  let inputL = input.length;

  for (let i = 0; i < inputL; i += 2) {
    let productName = input[i];
    let calories = Number(input[i + 1]);
    // console.log(`${productName} --- ${calories}`);
    obj[productName] = calories
  }
  console.log(obj);
}
calories(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);
