var browserstackRunner = require("browserstack-runner");

var config = {
  username: "simonmenke",
  key: "2xA3BkUbfAK8mN3q8ehk",
  test_framework: "qunit",
  test_path: ["index.html"],
  test_server_port: "8899",
  browsers: [
    {
      browser: "ie",
      browser_version: "10.0",
      device: null,
      os: "Windows",
      os_version: "8",
      cli_key: 1
    },
    {
      os: "android",
      os_version: "4.0",
      device: "Samsung Galaxy Nexus",
      cli_key: 2
    },
    {
      os: "ios",
      os_version: "7.0",
      device: "iPhone 5S",
      cli_key: 3
    }
  ]
};

browserstackRunner.run(config, function(error, report) {
  if (error) {
    console.log("Error:" + error);
    return;
  }
  console.log(JSON.stringify(report, null, 2));
  console.log("Test Finished");
});
