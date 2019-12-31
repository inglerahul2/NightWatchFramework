module.exports = {
  src_folders: "./tests",
  output_folder: process.env.DRUPAL_NIGHTWATCH_OUTPUT,
  custom_commands_path: "./custom_commands",
  page_objects_path: './pages',
  globals_path: './globals.js',
  selenium: {
    start_process: false,
  },
  test_workers: {
    enabled: true,
    workers: 10
  },
  test_settings: {
    default: {
      selenium_port: process.env.SAUCELAB_PORT,
      selenium_host: process.env.SAUCELAB_HOST,
      username: process.env.SAUCELAB_USER,
      access_key: process.env.SAUCELAB_ACCESS_KEY,
      desiredCapabilities: {
        browserName: 'chrome',
        acceptSslCerts: true,
        platform: 'Windows 10',
        version: 'latest-1'
      },
      screenshots: {
        enabled: false,
        on_failure: true,
        on_error: true,
        path: `${process.env.DRUPAL_NIGHTWATCH_OUTPUT}/screenshots`,
      },
      end_session_on_fail: false,
    },
  },
};
