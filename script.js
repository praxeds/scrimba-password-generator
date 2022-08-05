//!Password Variables
const lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const numberCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*']

let passwordGenerator = document.querySelector('button')
let passwordLength = document.querySelector('#passwordLength')
let randomPassword = document.querySelectorAll('.randomPassword')
let passwordOptions = []

//!Password Function
let generatedPassword = ''

passwordLength.addEventListener('keypress', function(e) {
    return false
})

passwordGenerator.addEventListener('click', function (e) {

    randomPassword.forEach(function (passwordDiv) {

        if (document.getElementById('passwordLowercase').checked) {
            passwordOptions = passwordOptions.concat(lowercaseCharacters)
        } if (document.getElementById('passwordUppercase').checked) {
            passwordOptions = passwordOptions.concat(uppercaseCharacters)
        } if (document.getElementById('passwordSymbols').checked) {
            passwordOptions = passwordOptions.concat(specialCharacters)
        } if (document.getElementById('passwordNumbers').checked) {
            passwordOptions = passwordOptions.concat(numberCharacters)
        }

        for (i = 0; i < passwordLength.value; i++) {
            generatedPassword += passwordOptions[Math.floor(Math.random() * passwordOptions.length)]
        }
        passwordDiv.innerHTML = generatedPassword
        generatedPassword = ''
        passwordOptions = []
    })

})
