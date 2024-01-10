// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Password generation function
function generatePassword() {
  // Define characters to be used in the password
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  
   

   
  var passwordLength = parseInt(prompt("Enter password length (between 8 and 128 characters):"));

  // Validate password length
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid password length between 8 and 128 characters.");
    return "";
  }

  // Prompt the user for character types
  var useLowercase = confirm("Include lowercase characters?");
  var useUppercase = confirm("Include uppercase characters?");
  var useNumeric = confirm("Include numeric characters?");
  var useSpecialChars = confirm("Include special characters?");

  // Validate at least one character type is selected
  if (!useLowercase && !useUppercase && !useNumeric && !useSpecialChars) {
    alert("Please select at least one character type.");
    return "";
  }

  // Build the character set based on user selections
  var selectedChars = "";
  if (useLowercase) selectedChars += lowercaseChars;
  if (useUppercase) selectedChars += uppercaseChars;
  if (useNumeric) selectedChars += numericChars;
  if (useSpecialChars) selectedChars += specialChars;

  // Generate the password
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * selectedChars.length);
    password += selectedChars.charAt(randomIndex);
  }

  return password;
}

