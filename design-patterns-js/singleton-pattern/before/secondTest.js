import Logger from "./fancyLogger";

const secondImplementation = new Logger();

export default function infoOfSecondImplementation() {
  secondImplementation.printLogsCount();
  secondImplementation.log("message from second  implementation");
  secondImplementation.printLogsCount();
}
