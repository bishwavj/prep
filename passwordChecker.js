// Have the function StringChallenge(str) take the str parameter being passed and determine if it passes as a valid password that follows the list of constraints:

// 1. It must have a capital letter.
// 2. It must contain at least one number.
// 3. It must contain a punctuation mark or mathematical symbol.
// 4. It cannot have the word "password" in the string.
// 5. It must be longer than 7 characters and shorter than 31 characters.

// If all the above constraints are met within the string, the your program should return the string true, otherwise your program should return the string false. For example: if str is "apple!M7" then your program should return "true".

function StringChallenge(str) {
  const hasCapitalLetter = /[A-Z]/.test(str);
  const hasNumber = /\d/.test(str);
  const hasSymbol = /[!@#$%^&*()\-=_+[\]{};':"\\|,.<>/?]/.test(str);
  const hasPassword = /password/i.test(str);
  const isLengthValid = str.length > 7 && str.length < 31;
  if (hasCapitalLetter && hasNumber && hasSymbol && !hasPassword && isLengthValid) {
    return 'true';
  } else {
    return 'false';
  }
}

const input = "apple!M7";
console.log(StringChallenge(input)); // Output: "true"
