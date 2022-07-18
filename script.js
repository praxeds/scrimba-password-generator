const lowerCaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

const upperCaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

const numberCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

const specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*']

let generatedPassword=''
let passwordEl=document.getElementById('password-el')

function getPassword() {
    
    for (let i=0;i<8;i++){
        generatedPassword+=lowerCaseCharacters[Math.floor(Math.random()*lowerCaseCharacters.length)]
    }
    passwordEl.textContent=generatedPassword
    generatedPassword=''
}
