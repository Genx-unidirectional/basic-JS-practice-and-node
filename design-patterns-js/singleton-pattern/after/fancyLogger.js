class FancyLogger {
  constructor() {
    if (FancyLogger.instance == null) {
      this.logs = [];
      FancyLogger.instance = this;
    }
    return FancyLogger.instance;
  }
  log(message) {
    this.logs.push(message);
    console.log(message);
  }
  printLogCount() {
    console.log(`The logs count is ${this.logs.length}`);
  }
}

const Logger = new FancyLogger();
Object.freeze(Logger);
export default Logger;
