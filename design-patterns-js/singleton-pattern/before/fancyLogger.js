export default class Logger {
  constructor() {
    this.logs = [];
  }

  log(message) {
    this.logs.push(message);
    console.log(message);
  }

  printLogsCount() {
    console.log(`The logs count is ${this.logs.length}`);
  }
}
