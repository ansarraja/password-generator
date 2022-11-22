// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


// Function to prompt user for password options and generate password with user input
function generatePassword() {
  var chars = [];

  // get password length and alert if passward lenght is not in a specified range
  var passLength = prompt("What is your password length?");

  if (passLength < 10 || passLength > 64) {
    alert("Password should be at least 10 characters but no more than 64.");
  }

  // Prompt user to choose Character types for password and store input and alert user to select a type if none seleced
  else {
    var lowerLetter = confirm("Choose at least one LOWERCASE letter!");
    var upperLetter = confirm("Choose at least one UPPERCASE letter!");
    var num = confirm("Choose at least one Number!")
    var spChar = confirm("Choose at least one from Special characters ($@%&*, etc!")

    if (lowerLetter == false && upperLetter == false && num == false && spChar == false) {
      alert("At least one character type must be selected")
      return;
    }

    // concat user choosen character types in array so password only contain letters from user's choice
    if (upperLetter) {
      chars = chars.concat(upperCasedCharacters);
    };
    if (lowerLetter) {
      chars = chars.concat(lowerCasedCharacters);
    };
    if (num) {
      chars = chars.concat(numericCharacters);
    };
    if (spChar) {
      chars = chars.concat(specialCharacters);
    };

    //  passwordText.value = password;
    var password = "";
    for (var i = 0; i <= passLength; i++) {
      var randomNumber = Math.floor(Math.random() * chars.length);
      password += chars[randomNumber];
    };
    return password;
  };
  console.log(`lower case ${lowerLetter}`);
  console.log(lowerCasedCharacters);
  console.log("password " + password);
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
