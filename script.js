let logger = console.log.bind(console);
console.log = function (...args) {
  if (arguments.length) {
    let now = new Date().toLocaleString();
    logger(now, "|", ...args);
  }
};
console.log("test");
