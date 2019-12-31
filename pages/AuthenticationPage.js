module.exports = {
    elements:{
        signInEmailAddress:'input[id=email]',
        signinPassword:'input[id=passwd]',
        signinButton:'button[id=SubmitLogin]'
        },
    
        commands:[
            {
                SignIn : function(emailAddress, password)
                {
                    this.waitForElementVisible('@signInEmailAddress')
                        .setValue('@signInEmailAddress', emailAddress)
                        .setValue('@signinPassword',password)
                        .click('@signinButton');
                }
            }]
    };