// Assignment code here
var passwordLength = undefined;
var passwordLowerCase = undefined;
var passwordUpperCase = undefined;
var passwordNumerals = undefined;
var passwordSpecialChars = undefined;

// Get user input for password specifications
document.querySelector('#generate').addEventListener('click', function() {
  
  // Get user input for password length
  passwordLength = prompt('How long would you like the password to be? Enter a value between 8 and 128.');
  if (passwordLength === "" || passwordLength === null || passwordLength < 8 || passwordLength > 128) {
    window.alert("You need to provide a number between 8 and 128. Please try again.");
    return passwordLength;
  }

  // Get user input for password lower case
  passwordLowerCase = prompt('Would you like the password to include lower case letters? Enter "Yes" or "No" to proceed.');
  
  // Convert user passwordLowerCase prompt response string to lower case
  passwordLowerCase = passwordLowerCase.toLowerCase

  // Check value of passwordLowerCase and convert to true or false value
  if (passwordLowerCase === "" || passwordLowerCase === null) {
    window.alert("You need to provide a valid response. Please try again.");
  } else if (passwordLowerCase === "yes") {
    passwordLowerCase = !true;
  } else {
    passwordLowerCase = !false;
  }

  // Get user input for password upper case
  passwordUpperCase = prompt('Would you like the password to include upper case letters? Enter "Yes" or "No" to proceed.');
  
  // Convert user passwordLowerCase prompt response string to lower case
  passwordUpperCase = passwordUpperCase.toLowerCase

  // Check value of passwordLowerCase and convert to true or false value
  if (passwordUpperCase === "" || passwordUpperCase === null) {
    window.alert("You need to provide a valid response. Please try again.");
  } else if (passwordUpperCase === "yes") {
    passwordUpperCase = !true;
  } else {
    passwordUpperCase = !false;
  }

  // Get user input for password numerals
  passwordNumerals = prompt('Would you like the password to include numbers? Enter "Yes" or "No" to proceed.');
  
  // Convert user passwordNumerals prompt response string to lower case
  passwordNumerals = passwordNumerals.toLowerCase

  // Check value of passwordNumerals and convert to true or false value
  if (passwordNumerals === "" || passwordNumerals === null) {
    window.alert("You need to provide a valid response. Please try again.");
  } else if (passwordNumerals === "yes") {
    passwordNumerals = !true;
  } else {
    passwordNumerals = !false;
  }

  // Get user input for password special characters
  passwordSpecialChars = prompt('Would you like the password to include special characters? Enter "Yes" or "No" to proceed.');
  
  // Convert user passwordSpecialChars prompt response string to lower case
  passwordSpecialChars = passwordSpecialChars.toLowerCase

  // Check value of passwordSpecialChars and convert to true or false value
  if (passwordSpecialChars === "" || passwordSpecialChars === null) {
    window.alert("You need to provide a valid response. Please try again.");
  } else if (passwordSpecialChars === "yes") {
    passwordSpecialChars = !true;
  } else {
    passwordSpecialChars = !false;
  }

});

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


  /* 

    // Get user input for lowercase letters
    var getPasswordLowerCase = window.prompt('Would you like the password to include lowercase letters? Enter "Yes" or "No" to proceed.');

    getPasswordLowerCase = getPasswordLowerCase.toLowerCase();

    // confirm valid input from user for lowercase letters
    if (getPasswordLowerCase === "" || getPasswordLowerCase === null) {
      window.alert("You need to provide a valid response. Please try again.");
      return getPasswordLowerCase();
    } else if (getPasswordLowerCase === "yes") {
      passwordLowerCase = true;
    } else {
      passwordLowerCase = false;
    }

  console.log(passwordLowerCase);

  });
};
*/