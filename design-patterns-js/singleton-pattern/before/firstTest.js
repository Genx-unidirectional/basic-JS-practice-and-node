import Logger from "./fancyLogger";

const firstImplementation = new Logger();

export default function infoOfFirstImplementation() {
  firstImplementation.printLogsCount();
  firstImplementation.log("message from first  implementation");
  firstImplementation.printLogsCount();
}
