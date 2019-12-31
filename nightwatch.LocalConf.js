const chromedriver = require("chromedriver");
module.exports = {
    "src_folders": "./tests",
    "output_folder": process.env.DRUPAL_NIGHTWATCH_OUTPUT,
    "custom_commands_path": "./custom_commands",
    "page_objects_path": './pages',
    "globals_path": "./globals.js",
    "webdriver": {
      "start_process": true,
      "server_path": chromedriver.path,
      "port": 9515
    },
    "test_workers": {
      "enabled": true,
      "workers": 10
    },
    "test_settings": {
      "default": {
        "desiredCapabilities": {
          "browserName": "chrome",
          "acceptSslCerts": true,
        },
        "screenshots": {
          "enabled": false,
          "on_failure": true,
          "on_error": true,
          "path": `${process.env.DRUPAL_NIGHTWATCH_OUTPUT}/screenshots`,
        },
        "end_session_on_fail": false,
      },
    },
  };
  