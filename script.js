const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


const lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

const uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

const numberCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

const specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*']

let passwordCharacters = []

let generatedPassword = ''

// 

//* To Do Later

//
let passwordFirstEl = document.getElementById('password1-el')
let passwordSecondEl = document.getElementById('password2-el')

let lowercaseCheckbox = document.getElementById('lowercase-characters')
let uppercaseCheckbox = document.getElementById('uppercase-characters')
let numberCheckbox = document.getElementById('numeric-characters')
let symbolCheckbox = document.getElementById('special-characters')
//

//

document.onload = getPassword()

function getPassword() {
    for (let i = 0; i < 15; i++) {
        generatedPassword += characters[Math.floor(Math.random() * characters.length)]
    }
    passwordFirstEl.textContent = generatedPassword
    generatedPassword = ''

    for (let i = 0; i < 15; i++) {
        generatedPassword += characters[Math.floor(Math.random() * characters.length)]
    }
    passwordSecondEl.textContent = generatedPassword
    generatedPassword = ''
}
