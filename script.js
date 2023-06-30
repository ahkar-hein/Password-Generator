// Pseudocode
// Create object for lowercase, uppercase, numeric and special.
// Prompt for user input password length.
// Check the prompt that a number and length criteria.
// User confirmation for include uppercase, lowercase, numeric and special character
// Check user confirm atleat one criteria.
// Generate the password 

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Create Object for password criteria
var Characters = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numeric: "0123456789",
  special: "!@#$%^&*()_+-=[]{};':\"\\|,.<>/?"
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




