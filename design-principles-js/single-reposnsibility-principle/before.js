// Let's say want to make the calorie tracker which tract our overall calorie intake in a day and if exceed the maximum calorie intake it return message which the total calorie intake

class CalorieTracker {
  constructor() {
    this.calorie = 0;
  }
  calorieAlert() {
    if (this.calorie > 2000) {
      console.log("Calorie limit exceeded");
    }
  }
  calorieAdder(intake) {
    this.calorie += intake;
    this.calorieAlert();
  }
}

// We can see that from above example the class has more that one responsibility but it's okay if the class has simple code but when it's get complex we need to separate out some component and make module out of it and use it in the class

const ganeshIntake = new CalorieTracker();

ganeshIntake.calorieAdder(100);
ganeshIntake.calorieAdder(1000);
ganeshIntake.calorieAdder(1000);
