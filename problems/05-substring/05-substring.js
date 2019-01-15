/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */

function thereAreNoErrors(someStr, startIndex, endIndex) {
  //Error handling
  if(isNaN(startIndex)){
    console.log(
      `Error: Starting index is not a number.
      Please ensure you enter a valid number for starting index.`
    );
    return false;
  }
  if(isNaN(endIndex)){
    console.log(
      `Error: Ending index is not a number.
      Please ensure you enter a valid number for ending index!`
    );
    return false;
  }
  if (startIndex >= endIndex){
    console.log(
      `Error: Starting index greater than or equal to ending index.
      Please ensure starting index is less than the ending index in your call!`
    );
    return false;
  }

  if (endIndex > someStr.length){
    console.log(
      `Error: Ending index is greater than the largest available index.
      Please ensure your ending index is within the bounds of your array!`
    );
    return false;
  }

  if(startIndex < 0){
    console.log(
      `Error: Starting index is negative.
      Please ensure your call uses positive values for starting index!`
    );
    return false;
  }
  if(endIndex <= 0){
    console.log(
      `Error: Ending index is less than or equal to zero.
      Please ensure your ending index is at least 1.`
    );
    return false;
  }
  return true;
}

function substring(someStr, startIndex, endIndex) {
  let result = '';

  if (thereAreNoErrors(someStr, startIndex, endIndex)){
    for (let i = startIndex; i < endIndex; i++){
      result = result + someStr[i];
    }
  }

  return result;
}


console.log(`
  Input: ("Hello", 0, 3)
  Output: ${substring("Hello", 0, 3)}

  Input: ("Potato", 3, 6)
  Output: ${substring("Potato", 3, 6)}`
);
