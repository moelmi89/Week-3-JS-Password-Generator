// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password) {
		passwordText.value = password;
	}
}

function generatePassword() {
	var passLength = window.prompt("How many characters would you like in your password");

	const hasLowerChars = confirm("Would you like Lower case letters?");
	const hasUpperChars = confirm("Would you like Upper case letters?");
	const hasSpecialChars = confirm("Would you like Special characters letters?");
	const hasNumberChars = confirm("Would you like numbers?");

	const chars = [];

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
  
  	if (isNaN(passLength) || (passLength < 8 || passLength > 120)) {
      alert("Invalid password length!")
      return false;
    }
  
    if (chars.length===0){
      alert("Please Select At Least One Character Type")
      return false;
    }
  
    let password = "";
    for (let i=0;i<passLength;i++){
      let arrayIndex = Math.floor(Math.random() * chars.length);
      let charIndex =  Math.floor(Math.random() * chars[arrayIndex].length);
      password += chars[arrayIndex][charIndex];
	}

	return password;}

// Add event listener to generate button
if (generateBtn) {
	generateBtn.addEventListener("click", writePassword);
};
