require('dotenv').config({ debug: process.env.DEBUG });
module.exports = ((settings) => {
  //const seleniumServerFileName = fs.readdirSync("node_modules/selenium-standalone/.selenium/selenium-server/");
  //settings.selenium.server_path += seleniumServerFileName;
  return settings;
})(require("./nightwatch.RemoteConf.js"));
