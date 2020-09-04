//main here
const baseUrl = 'http://localhost:3000'

$( document ).ready(function() {
    // Handler for .ready() called.
    auth();
});

function auth() {
    if (localStorage.token) {
        $('#login-page').hide();
        $('#register-page').hide();
        $('#home-page').show();
        $('#before-page').hide();
        $('#choices-page').hide();
    } else {
        $('#login-page').hide();
        $('#register-page').hide();
        $('#before-page').show();
        $('#home-page').hide();
        $('#choices-page').hide();
    }
}

function toChoices() {
    $('#login-page').hide();
    $('#register-page').hide();
    $('#choices-page').show();
    $('#before-page').hide();
}

function toLogin() {
    $('#login-page').show();
    $('#register-page').hide();
    $('#choices-page').hide();
    $('#before-page').hide();
}

function toRegister() {
    $('#login-page').hide();
    $('#register-page').show();
    $('#choices-page').hide();
    $('#before-page').hide();
}

function loginForm(event) {
    event.preventDefault();
    let email = $('#login-email').val();
    let password = $('#login-password').val();
    $.ajax({
        url: `${baseUrl}/login`,
        method: 'post',
        data: {
            email,
            password
        }
    }).done(data => {
        localStorage.setItem('token', data.token);
        auth();
    }).fail(err => {
        console.log(err);
    }).always(_ => {

    })
}

function registrationForm(event) {
    event.preventDefault();
    let email = $('#register-email').val();
    let password = $('#register-password').val();
    console.log(email, password, "<<<<<<<<<<<reg form")
    $.ajax({
        url: `${baseUrl}/register`,
        method: 'post',
        data: {
            email,
            password
        }
    }).done(_ => {
        auth()
    }).fail(err => {
        console.log(err);
    }).always(_ => {

    })
}

function onSignIn(googleUser) {

    let id_token = googleUser.getAuthResponse().id_token
    console.log(id_token)

    $.ajax({
        url: `${baseUrl}/googleSign`,
        method: 'post',
        data: {
            id_token
        }
    })
        .done(data => {
            console.log(data)
            localStorage.setItem('token', data.token)
            auth()
        })
        .fail(err => {
            console.log(err)
        })
}

function logout() {
    localStorage.clear()
    let auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
    auth()
}