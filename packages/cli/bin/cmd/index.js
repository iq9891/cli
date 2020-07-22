/** @format */

const program = require("commander");
const pkg = require("../../package");
const init = require("./init");
const suggestCmd = require("../../lib/util/suggest-cmd");
const helpInfo = require("../../lib/util/help-info");
const enhanceErrorMes = require("../../lib/util/enhance-error-mes");

function cmd() {
  program
    .version(
      `@fe6/cli ${pkg.version}`,
      "-v, --version",
      "output the current version"
    )
    .usage("[command] [options]");

  init();

  suggestCmd();

  helpInfo();

  enhanceErrorMes();

  program.parse(process.argv);

  if (!process.argv.slice(2).length) {
    program.outputHelp();
  }
}

module.exports = cmd;
