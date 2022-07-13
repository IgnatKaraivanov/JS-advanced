function citiesPopulation(list) {
  const result = {};
  for (const town of list) {
    let [city, population] = town.split(" <-> ");
    population = Number(population);
    if (result[city] != undefined) {
      population += result[city];
    }
    result[city] = population;
  }
  for (const every in result) {
    console.log(`${every} : ${result[every]}`);
  }
}
citiesPopulation([
  "Sofia <-> 1200000",
  "Montana <-> 20000",
  "New York <-> 10000000",
  "Washington <-> 2345000",
  "Las Vegas <-> 1000000",
]);
console.log("-----");
citiesPopulation([
  "Istanbul <-> 100000",
  "Honk Kong <-> 2100004",
  "Jerusalem <-> 2352344",
  "Mexico City <-> 23401925",
  "Istanbul <-> 1000",
]);
