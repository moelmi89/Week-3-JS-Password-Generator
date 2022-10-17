// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var options = {
    numberOfChars: 0,
    hasLowerChars: false,
    hasUpperChars: false,
    hasSpecialChars: false,
    hasNumberChars: false,
  }
}

  var passLength = 0;
  passLength = confirm ("How many characters would you like in your password")
  if (passLength < 8 || passLength > 120) {
    alert("invalid password length!")
    return;
  }

  var hasLowerChars = prompt("Would you like Lower case letters?")
  var hasUpperChars = prompt("Would you like Upper case letters?")
  var hasSpecialChars = prompt("Would you like Specail characters letters?")
  var hasNumberChars = prompt("Would you like numbers?")

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
