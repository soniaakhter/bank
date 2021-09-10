document.getElementById('login-submit').addEventListener('click', function () {
    //console.log('Button Cliked')

    // get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    //console.log(userEmail)

    // get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    //console.log(userPassword)

    // check email and password
    if (userEmail == 'abc@gmail.com' && userPassword == 'abc') {
        //console.log('valid')
        window.location.href = 'banking.html'


    }


})

