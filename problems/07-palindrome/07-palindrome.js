/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */

function isPalindrome(someStr) {
  let i = 0;
  let j = someStr.length-1;
  while (i < j){
    console.log(`${someStr.charAt(i)} == ${someStr.charAt(j)}`);
    if (someStr.charAt(i) != someStr.charAt(j)) {
      return false;
    }
    i++;
    j--;
  }

  return true;
}

let pally = "tacocat";
let noPally = "tubacat";
let maybePally = "taco cat"; //question is, should I include spaces in the pallindrome or not?

console.log(isPalindrome(pally));
console.log(isPalindrome(noPally));
console.log(isPalindrome(maybePally));
