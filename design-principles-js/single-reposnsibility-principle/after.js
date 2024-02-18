// We can separate the logic by making modules and importing them into place where they are needed

import { calorieAlert } from "./utility.js";

class CalorieTracker {
  constructor() {
    this.calorie = 0;
  }

  calorieAdder(intake) {
    this.calorie += intake;
    calorieAlert(this.calorie);
  }
}

const jadeIntake = new CalorieTracker();

jadeIntake.calorieAdder(100);
jadeIntake.calorieAdder(1000);
jadeIntake.calorieAdder(1000);
