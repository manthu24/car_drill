const inventory = require("./inventory");

function findCarById(inventory, id) {
    for (let i = 0; i < inventory.length; i++) {
      if (inventory[i].id === id) {
        return `Car ${id} is a ${inventory[i].car_year} ${inventory[i].car_make} ${inventory[i].car_model}`;
      }
    }
    return `Car with ID ${id} not found in inventory.`;
  }
  
  module.exports = findCarById;
  