function solve(obj) {
  resultCar = {};
  let engine = {};
  let carriage = {};
  resultCar.model = obj.model;

  let smallEngine = { power: 90, volume: 1800 };
  let normalEngine = { power: 120, volume: 2400 };
  let monsterEngine = { power: 200, volume: 3500 };
  if (obj.power <= 90) {
    engine.power = smallEngine.power;
    engine.volume = smallEngine.volume;
  } else if (obj.power > 90 && obj.power <= 120) {
    engine.power = normalEngine.power;
    engine.volume = normalEngine.volume;
  }
  if (obj.power > 120 && obj.power <= 200) {
    engine.power = monsterEngine.power;
    engine.volume = monsterEngine.volume;
  }
  resultCar.engine = engine;
  carriage.color = obj.color;
  carriage.type = obj.carriage;
  resultCar.carriage = carriage;
  if (obj.wheelsize % 2 === 0) {
    resultCar.wheels = [
      Number(obj.wheelsize) - 1,
      Number(obj.wheelsize) - 1,
      Number(obj.wheelsize) - 1,
      Number(obj.wheelsize) - 1,
    ];
  } else {
    resultCar.wheels = [
      Number(obj.wheelsize),
      Number(obj.wheelsize),
      Number(obj.wheelsize),
      Number(obj.wheelsize),
    ];
  }
  return resultCar;
}
solve({
  model: "VW Golf II",
  power: 90,
  color: "blue",
  carriage: "hatchback",
  wheelsize: 14,
});
solve({
  model: "Opel Vectra",
  power: 110,
  color: "grey",
  carriage: "coupe",
  wheelsize: 17,
});
