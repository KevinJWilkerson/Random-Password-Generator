// Assignment code here
var passwordLength = undefined;
var passwordLowerCase = undefined;
var passwordUpperCase = undefined;
var passwordNumerals = undefined;
var passwordSpecialChars = undefined;
var passwordCharacterSelection = '';
var passwordResult = '';

var lowerCase = 'abcdefghijklmnopqrstuvwxyz'
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
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

  if (passwordLowerCase = true) {
    passwordResult += lowerCase.charAt(randomizer(lowerCase));
  }
  
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

  if (passwordUpperCase = true) {
    passwordResult += upperCase.charAt(randomizer(upperCase));
  }

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

  if (passwordNumerals = true) {
    passwordResult += numerals.charAt(randomizer(numerals));
  }

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

  if (passwordSpecialChars = true) {
    passwordResult += specialChars.charAt(randomizer(specialChars));
  }

  // Confirm that at least one character type was selected
  if (passwordLowerCase === false && passwordLowerCase === false && passwordNumerals === false && passwordSpecialChars === false) {
    alert("You must include at least one character type. Please try again.");
  }

  if (passwordLowerCase === true) {
    passwordCharacterSelection += lowerCase;
  }

  if (passwordUpperCase === true) {
    passwordCharacterSelection += upperCase;
  }

  if (passwordNumerals === true) {
    passwordCharacterSelection += numerals;
  }

  if (passwordSpecialChars === true) {
    passwordCharacterSelection += specialChars;
  }

  for (var i = (passwordLength - passwordResult.length); i < passwordLength; i++) {
    passwordResult += passwordCharacterSelection.charAt(randomizer(passwordCharacterSelection));
  }

  shuffleWord(passwordResult);

});

// Randomizer
function randomizer(num) {
  return Math.floor(Math.random() * num.length);
}

// Shuffler
function shuffleWord(word){
  var shuffledWord = '';
  word = word.split('');
  while (word.length > 0) {
    shuffledWord += word.splice(word.length * Math.random() << 0, 1);
  }
  return shuffledWord
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = passwordResult;
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  passwordResult = '';

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);