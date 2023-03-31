const cars = [
  {
    time: 1568329654807,
    speed: 40
  },
  {
    time: 1568329821632,
    speed: 42
  },
  {
    time: 1568331115463,
    speed: 35
  }
]

const carPassing = function (cars, speed) {
  let nextCar = {
    time: Date.now(),
    speed: speed
  };
  cars.push(nextCar); 
  return cars; 
}

console.log(carPassing(cars, 21)); 
console.log(carPassing(cars, 32)); 
