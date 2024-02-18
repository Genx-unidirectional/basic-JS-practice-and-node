// command pattern we use separate out the user input and the affecting object and allow decoupling of the functionality via main(top level) class.
//In command pattern we make the class and any operation or request is made is encapsulated as a object
//For example let's make a class which does the calculation eg, Calculator class

class Calculator {
  constructor() {
    this.value = 0;
    this.history = [];
  }
  // let's make the function which take object as a request or say command to manipulate the value
  execute(command) {
    this.value = command.execute(this.value);
    // We do want to make history of that command so we can undo it
    this.history.push(command);
    return this.value;
  }
  undo() {
    const command = this.history.pop();
    this.value = command.undo(this.value);
    return this.value;
  }
}

// Let's make the add command which add the value and also undo that added value

class AddCommand {
  constructor(value) {
    this.value = value;
  }
  execute(currentValue) {
    return currentValue + this.value;
  }
  undo(currentValue) {
    return currentValue - this.value;
  }
}

// Let's see how we implement this
const calculator1 = new Calculator();

// Now we want to add the value so we pass the AddCommand to calculator class
const addCmd1 = new AddCommand(20);
console.log(calculator1.execute(addCmd1)); // output : 20

//Let say we want to undo that added value by AddCommand we just have to pass again the object to undo it

console.log(calculator1.undo(addCmd1)); // output : 0
