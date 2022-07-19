function cityTaxes(name, population, treasury) {
    let cityRecords = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += this.population * this.taxRate;
        },
        applyGrowth(percentage) {

            this.population *= (1 + percentage / 100)
        },
        applyRecession(percentage) {
            this.treasury *= (1 - percentage / 100)
        }

    }
    return cityRecords;
}
// const city = cityTaxes('Tortuga', 7000, 15000); console.log(city);
const city = cityTaxes('Tortuga', 7000, 15000); city.collectTaxes(); console.log(city.treasury); city.applyGrowth(5); console.log(city.population);
