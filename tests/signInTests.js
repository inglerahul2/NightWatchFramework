module.exports = {
 '@tags': ['RegressionTests'],
    'To verify Sign In ' : function(browser) {

      const homePage = browser.page.HomePage();
      const authenticationPage = browser.page.AuthenticationPage();
      const myAccountPage = browser.page.MyAccountPage();
        
      browser
            .maximizeWindow()
            .url("http://automationpractice.com/index.php");

      homePage
            .NavigateToSignIn();
      
      authenticationPage
          .SignIn('rahul.ingle@gmail.com','Test123');

      browser
            .assert.containsText('h1[class=page-heading]','My Account')
            .assert.containsText('a[class=account] span','Rahul Ingle');
       },
    };