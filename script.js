// Create an array of the special character choices
var specialCharacter = [' ', '!', '"', '#', '$', '%', '&', ',', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '^', '`', '{', '|', '}', '~'];
var numericCharacter = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCaseCharacter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'v', 'o', 'w', 'x', 'y', 'z'];
var upperCaseCharacter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'V', 'O', 'W', 'X', 'Y', 'Z'];
var outPut = [];

// Assignment code here
var generatePassword = function() {
  var characterAmount = window.prompt("How many characters would you like your password to contain?");
    if (characterAmount >= 8 && characterAmount <= 128) {
      console.log(characterAmount)
    } else {
      window.alert("Please enter a number between 8 and 128")
    }
  var specialConfirm = confirm("Click OK to confirm including special characters.")
  var numericConfirm = confirm("Click OK to confirm including numeric characters.")
  var lowerCaseConfirm = confirm("Click OK to confirm including lowercase characters.")
  var upperCaseConfirm = confirm("Click OK to confirm including uppercase characters.")
}





// generate password
var generate = function () {
  for (var i = 0; i < characterAmount; i++) {
    if (specialConfirm) { 
    specialCharacter = specialChatacter[Math.floor(Math.random()*specialCharacter.length)];
    outPut.push(SpecialCharacter);
    };


    if (numericConfirm) {
    ranNumericCharacter = numericCharacter[Math.floor(Math.random()*numericCharacter.length)];
    outPut.push(ranNumericCharacter);
    };

    if (lowerCaseConfirm) {
    ranLowerCaseCharacter = lowerCaseCharacter[Math.floor(Math.random()*lowerCaseCharacter.length)];
    outPut.push(ranlowerCaseCharacter);
    };

    if (upperCaseConfirm) { 
    ranUpperCaseCharacter = upperCaseCharacter[Math.floor(Math.random() * upperCaseCharacter.length)];
    outPut.push(ranUpperCaseCharacter);
    };
  }
};


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}  

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
