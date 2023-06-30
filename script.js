// Pseudocode
// Create object for lowercase, uppercase, numeric and special.
// Prompt for user input password length.
// Check the prompt that a number and length criteria.
// User confirmation for include uppercase, lowercase, numeric and special character
// Check user confirm atleat one criteria.
// Generate the password 

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
  // Prompt for password criteria
  var passwordCriteria = parseInt(prompt("Enter the length of the password"));
  // Check prompt if it is not a number or length of password is between 8 and 129.
  if (isNaN(passwordCriteria) || passwordCriteria < 8 || passwordCriteria > 128) {
    alert("Please enter only number and length between 8 and 128");
    return;
  }
  // After passed the if condition, confirm user to include or not uppercase, lowercase, numeric and special characters.
  var includeUppercase = confirm("please confirm include uppercase letter");
  var includeLowercase = confirm("please confirm include lowercase letter");
  var includeNumeric = confirm("please confirm include numeric");
  var includeSpecial = confirm("please confirm include special character");

  if (!includeUppercase && !includeLowercase && !includeNumeric && !includeSpecial) {
    alert("Please select at least one character type.");
    return;
  }
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




