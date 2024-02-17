import Logger from "./fancyLogger.js";

function showSecondImplementation() {
  Logger.printLogCount();
  Logger.log("second implementation");
  Logger.printLogCount();
}

export default showSecondImplementation;
