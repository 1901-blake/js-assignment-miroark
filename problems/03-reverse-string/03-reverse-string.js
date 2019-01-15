/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
function reverseStr(someStr) {
  let result = '';
  let manipulatedString = someStr;

  while (manipulatedString.length > 0) {
    result = result + manipulatedString.slice(manipulatedString.length-1, manipulatedString.length);
    manipulatedString = manipulatedString.slice(0,manipulatedString.length-1);
  }

  return result;
}
console.log(reverseStr('hello'));
