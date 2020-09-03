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
    } else {
        $('#login-page').hide();
        $('#register-page').hide();
        $('#before-page').show();
        $('#home-page').hide();
    }
}

function toLogin() {
    $('#login-page').show();
    $('#register-page').hide();
    $('#before-page').hide();
}

function toRegister() {
    $('#login-page').hide();
    $('#register-page').show();
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

    $.ajax({
        url: `${baseUrl}/googleSign`,
        method: 'post',
        data: {
            id_token
        }
    })
        .done(data => {
            localStorage.setItem('token', data.token)
            auth()
        })
        .fail(err => {
            console.log(err)
        })
}