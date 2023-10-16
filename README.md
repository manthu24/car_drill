# Used Car Dealer Project

This project simulates a used car dealer that manages an inventory of 50 cars. The inventory data is stored in a JavaScript array. The goal of this project is to create a set of functions that perform various tasks related to the car inventory.

## Project Restrictions

- You are not allowed to use `map`, `reduce`, or `filter` to solve the problems. Only native JavaScript for loops are allowed.

## Inventory Data

The car inventory data is stored in an array of objects. Each object represents a car with the following properties:

- `id`: A unique identifier for the car.
- `car_make`: The make or manufacturer of the car.
- `car_model`: The model of the car.
- `car_year`: The year the car was manufactured.

## Problems to Solve

1. **Problem #1:** Find information for a car with a specific ID and log its details.

2. **Problem #2:** Get the make and model of the last car in the inventory.

3. **Problem #3:** Sort the car models alphabetically.

4. **Problem #4:** Retrieve an array of all car years.

5. **Problem #5:** Find and count cars made before the year 2000.

6. **Problem #6:** Create an array of BMW and Audi cars.

## Running the Project

To run and test the project, execute the following commands in your terminal:

```bash
# Install dependencies (if needed)
# npm install

# Run tests for each problem
node testProblem1.js
node testProblem2.js
node testProblem3.js
node testProblem4.js
node testProblem5.js
node testProblem6.js
