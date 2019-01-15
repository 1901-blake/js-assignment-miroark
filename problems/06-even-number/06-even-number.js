/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */
function isEven(someNum) {
  return !(someNum%2);
}
console.log(`5 is even: ${isEven(5)}, 6 is even: ${isEven(6)}`);
