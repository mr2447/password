//Array of the character choices and selected array
var specialCharacter = [' ', '!', '"', '#', '$', '%', '&', ',', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '^', '`', '{', '|', '}', '~'];
var numericCharacter = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCaseCharacter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'v', 'o', 'w', 'x', 'y', 'z'];
var upperCaseCharacter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'V', 'O', 'W', 'X', 'Y', 'Z'];
var allChars = [];


// Assignment code here
var generatePassword = function() {
  var characterAmount = window.prompt("How many characters would you like your password to contain?");
    if (characterAmount >= 8 && characterAmount <= 128) {
    } else {
      window.alert("Please enter a number between 8 and 128")
      generatePassword();
    }
  var specialConfirm = confirm("Click OK to confirm including special characters.")
  console.log(specialConfirm)
  var numericConfirm = confirm("Click OK to confirm including numeric characters.")
  console.log(numericConfirm)
  var lowerCaseConfirm = confirm("Click OK to confirm including lowercase characters.")
  console.log(lowerCaseConfirm)
  var upperCaseConfirm = confirm("Click OK to confirm including uppercase characters.")
  console.log(upperCaseConfirm)
    generate(specialConfirm, numericConfirm, lowerCaseConfirm, upperCaseConfirm);

    var password = "";
      for (var i = 0; i < characterAmount; i++) {
      var value= allChars[Math.floor(Math.random()*allChars.length)];
      password += value
      }
    return password;
}


// function to generate p
var generate = function (specialConfirm, numericConfirm, lowerCaseConfirm, upperCaseConfirm) {
  if (specialConfirm) { 
   allChars = allChars.concat(specialCharacter)
  };
  if (numericConfirm) {
   allChars = allChars.concat(numericCharacter);
  };
  if (lowerCaseConfirm) {
   allChars = allChars.concat(lowerCaseCharacter);
  };
  if (upperCaseConfirm) { 
   allChars = allChars.concat(upperCaseCharacter);
  };
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


//specialCharacter = specialChatacter[Math.floor(Math.random()*specialCharacter.length)];