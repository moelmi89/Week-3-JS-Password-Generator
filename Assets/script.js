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

  var hasLowerChars = window.prompt("Would you like Lower case letters?")
  var hasUpperChars = window.prompt("Would you like Upper case letters?")
  var hasSpecialChars = window.prompt("Would you like Specail characters letters?")
  var hasNumberChars = window.prompt("Would you like numbers?")

  var chars = [];

  if (hasLowerChars)
  {
    chars.push (["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"])
  }
  if (hasUpperChars)
  {
    chars.push (["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"])
  }
  if (hasSpecialChars)
  {
    chars.push (["!", "£", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", "~", "<", ">", "?", "/", "@"])
  }
  if (hasNumberChars)
  {
    chars.push (["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"])
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
