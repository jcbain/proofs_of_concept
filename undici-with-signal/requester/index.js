const { run } = require("./request");

(() => {
  const args = process.argv.slice(2);
  const abort = args.includes("--abort");
  run(abort);
})();
