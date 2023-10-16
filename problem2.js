const inventory = require("./inventory");

function findLastCar(inventory) {
    const lastIndex = inventory.length - 1;
    return `Last car is a ${inventory[lastIndex].car_make} ${inventory[lastIndex].car_model}`;
}
  
module.exports = findLastCar;
  