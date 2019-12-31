exports.command = function(result) {
    var SauceLabs= require('saucelabs').default;
    const saucelab = new SauceLabs({ 
        user: process.env.SAUCELAB_USER, 
        key: process.env.SAUCELAB_ACCESS_KEY
    });

    var sessionid = this.capabilities['webdriver.remote.sessionid'],
        jobName = this.currentTest.name,
        passed = this.currentTest.results.testcases[jobName].failed === 0;
    //var buildNumber = process.env.JENKINS_BUILD_NUMBER;

    saucelab.updateJob(process.env.SAUCELAB_USER,sessionid, {
    passed: passed,
    name: jobName,
    //build:buildNumber
    },function(){});
    this.end();
};