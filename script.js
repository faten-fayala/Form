
var firstname = document.querySelector('.name')
var lastname = document.querySelector('.Lastname')
var address = document.querySelector('.Address')
var email = document.querySelector('.Email-Address')
var password = document.querySelector('.password')
var comments = document.querySelector('.comments')
var btnSend = document.querySelector('#button-send')
var btnReset = document.querySelector('#button-reset')


var regexName = /^[a-z]{3,10}$/
var regexLastName = /^[a-z]{3,10}$/
var regexAddress = /^([a-z\d\.-]{3,40}$)/
var regexEmail = /^([a-z\d\.-]{3,})@([a-z]+)\.([a-z]{2,6})$/
var regexPWD = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;


btnSend.addEventListener('click', function (e) {
    e.preventDefault()

    if (firstname.value === "" || lastname.value === "" || address.value === "" || email.value === "" || password.value === "" || comments.value === "") {
        alert("Ekteb")
    } else if (!regexName.test(firstname.value)) {
        alert("Please enter a valid First name!")

    }
    else if (!regexLastName.test(lastname.value)) {
        alert("Please enter a valid Last name!")

    }
    else if (!regexAddress.test(address.value)) {
        alert("Please enter a valid address!")

    }
    else if (!regexEmail.test(email.value)) {
        alert("Please enter a valid email!")
    }
    else if (!regexPWD.test(password.value)) {
        alert("Password must be at least 8 characters and at least one Uppercase!")
    } else {
        alert('Thanks for your feedback! :) ')
        firstname.value = ""
        lastname.value = ""
        email.value = ""
        password.value = ""
        address.value = ""

    }
})

btnReset.addEventListener('click', function (r) {
    r.preventDefault();
    
    lastname.value = "";
    email.value = "";
    password.value = "";
    address.value = "";
    firstname.value = "";

})
