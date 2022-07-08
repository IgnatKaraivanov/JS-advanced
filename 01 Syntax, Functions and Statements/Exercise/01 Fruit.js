function fruit(name,weight,price){
   weight= weight/1000
   let lastPrice = weight*price
console.log(`I need $${lastPrice.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${name}.`);
}
fruit('orange', 2500, 1.80)