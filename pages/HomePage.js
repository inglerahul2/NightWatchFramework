module.exports = {
   elements:{
        signinButton:'a[class=login]',
        contactUs:'a[title=Contact Us]',
        homeSlider:'div[id=homepage-slider]'
        },
    
    commands:[
        {
            NavigateToSignIn()
            {
                return this
                .waitForElementVisible('@homeSlider')
                .click('@signinButton')
            }
        }]
    };