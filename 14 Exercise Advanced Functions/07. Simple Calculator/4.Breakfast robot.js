function foodRobot() {
  const recipes = {
    apple: { carbohydrate: 1, flavour: 2 },
    lemonade: { carbohydrate: 10, flavour: 20 },
    burger: { carbohydrate: 5, fat: 7, flavour: 3 },
    eggs: { protein: 5, fat: 1, flavour: 1 },
    turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
  };

  const productStorage = {
    protein: 0,
    carbohydrate: 0,
    fat: 0,
    flavour: 0,
  };

  let output = "";

  const actions = {
    restock: (macronutrient, quantity) => {
      productStorage[macronutrient] += quantity;
      output = "Success";
    },
    prepare: (recipe, quantity) => {
      let enoughProducts = true;

      Object.entries(recipes[recipe]).forEach((entry) => {
        let [macronutrient, count] = entry;

        if (
          enoughProducts &&
          productStorage[macronutrient] < count * Number(quantity)
        ) {
          enoughProducts = false;
          output = `Error: not enough ${macronutrient} in stock`;
        }
      });

      if (enoughProducts) {
        Object.entries(recipes[recipe]).forEach((entry) => {
          let [macronutrient, count] = entry;

          productStorage[macronutrient] -= count * quantity;
        });

        output = "Success";
      }
    },
    report: () => {
      output = "";

      Object.entries(productStorage).forEach((entry) => {
        let [macronutrient, quantity] = entry;

        output += `${macronutrient}=${quantity} `;
      });
      output = output.trimEnd();
    },
  };

  return function (input) {
    let [command, product, quantity] = input.split(" ");
    quantity = Number(quantity);

    actions[command](product, quantity);

    return output;
  };
}
