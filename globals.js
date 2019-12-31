module.exports = {
   afterEach: function(browser, done) {
    browser
      .customSauceEnd();
      setTimeout(function() {
        done();
    }, 1000);
 }
};