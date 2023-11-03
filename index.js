function isPalindrome(word) {
  // Write your algorithm here
  let characters = word.split('')
  let revChar = characters.slice().reverse()
  let originalWord = characters.join('');
  let revWord = revChar.join('');
  return originalWord ===revWord;
}
isPalindrome('racecar')


/* 
  Add your pseudocode here

  a function that takes a word and spells it backwards to see if it matches forward
  1. input the string
  2. turn the string into an array
  3. reverse the reverse the array
  4. compare the two arrays
  5. return the result

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
