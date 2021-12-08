// Assignment code here
var passwordLength = undefined;
var passwordLowerCase = undefined;
var passwordUpperCase = undefined;
var passwordNumerals = undefined;
var passwordSpecialChars = undefined;

var lowerCase = 'abcdefghijklmnopqrstuvwxyz'
var upperCase = lowerCase.toUpperCase
var numerals = '1234567890'
var specialChars = '!@#$%^&*()'

// Get user input for password specifications
document.querySelector('#generate').addEventListener('click', function() {
  
  // Get user input for password length
  passwordLength = prompt('How long would you like the password to be? Enter a value between 8 and 128.');
  if (passwordLength === "" || passwordLength === null || passwordLength < 8 || passwordLength > 128) {
    window.alert("You need to provide a number between 8 and 128. Please try again.");
    return passwordLength;
  }
  
  console.log(passwordLength);

  // Get user input for password lower case and convert to lower case
  getPasswordLowerCase = prompt('Would you like the password to include lower case letters? Enter "Yes" or "No" to proceed.');

  // change value of passwordLowerCase to lower case string of getPasswordLowerCase 
  passwordLowerCase = getPasswordLowerCase.toLowerCase();

  // Check value of passwordLowerCase and convert to true or false value
  if (passwordLowerCase === '' || passwordLowerCase === null || (passwordLowerCase !== 'yes' && passwordLowerCase !== 'no')) {
    alert("You need to provide a valid response. Please try again.");
    return;
  }  else if (passwordLowerCase === "yes") {
    passwordLowerCase = true;
  } else {
    passwordLowerCase = false;
  }
  
  console.log(passwordLowerCase);

  // Get user input for password upper case
  getPasswordUpperCase = prompt('Would you like the password to include upper case letters? Enter "Yes" or "No" to proceed.');
  
  // Convert user passwordLowerCase prompt response string to lower case
  passwordUpperCase = getPasswordUpperCase.toLowerCase();

  // Check value of passwordLowerCase and convert to true or false value
  if (passwordUpperCase === "" || passwordUpperCase === null || (passwordUpperCase !== 'yes' && passwordUpperCase !== 'no')) {
    window.alert("You need to provide a valid response. Please try again.");
    return;
  } else if (passwordUpperCase === "yes") {
    passwordUpperCase = true;
  } else {
    passwordUpperCase = false;
  }

  console.log(passwordUpperCase);

  // Get user input for password numerals
  getPasswordNumerals = prompt('Would you like the password to include numbers? Enter "Yes" or "No" to proceed.');
  
  // Convert user passwordNumerals prompt response string to lower case
  passwordNumerals = getPasswordNumerals.toLowerCase();

  // Check value of passwordNumerals and convert to true or false value
  if (passwordNumerals === "" || passwordNumerals === null || (passwordNumerals !== 'yes' && passwordNumerals !== 'no')) {
    window.alert("You need to provide a valid response. Please try again.");
    return;
  } else if (passwordNumerals === "yes") {
    passwordNumerals = true;
  } else {
    passwordNumerals = false;
  }

  console.log(passwordNumerals);

  // Get user input for password special characters
  getPasswordSpecialChars = prompt('Would you like the password to include special characters? Enter "Yes" or "No" to proceed.');
  
  // Convert user passwordSpecialChars prompt response string to lower case
  passwordSpecialChars = getPasswordSpecialChars.toLowerCase();

  // Check value of passwordSpecialChars and convert to true or false value
  if (passwordSpecialChars === "" || passwordSpecialChars === null || (passwordSpecialChars !== 'yes' && passwordSpecialChars !== 'no')) {
    window.alert("You need to provide a valid response. Please try again.");
    return;
  } else if (passwordSpecialChars === "yes") {
    passwordSpecialChars = true;
  } else {
    passwordSpecialChars = false;
  }

  console.log(passwordSpecialChars);

  // Confirm that at least one character type was selected
  if (passwordLowerCase === false && passwordLowerCase === false && passwordNumerals === false && passwordSpecialChars === false) {
    alert("You must include at least one character type. Please try again.");
  }

});

// Randomizer
function randomizer(num) {
  return Math.floor(Math.random() * num);
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);