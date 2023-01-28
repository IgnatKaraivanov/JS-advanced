class Cat {
  constructor(name) {
    this.name = name;
  }
}
let firstCat = new Cat("Navcho");
let secondCat = new Cat("Garry");
secondCat.name = "Mishy";
console.log(firstCat);
console.log(secondCat);

let catNames = ["razcvqtko", "foncho", "tarikata", "labadaicho"];

let cats = catNames.map((x) => new Cat(x));
console.log(cats);
