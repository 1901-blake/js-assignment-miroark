/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/
function spliceElement(someArr, index) {
//Assuming that at [index] we want to remove one item.
  return someArr.splice(index, 1);
}
testArray = [1,2,3,4,5];
console.log(`Removed ${spliceElement(testArray, 2)} from ${testArray}`);
