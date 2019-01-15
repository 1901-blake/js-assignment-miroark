/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */

function bubbleSort(numArray) {
  for (let i = 0; i < numArray.length; i++){
    for (let j = 0; j < numArray.length; j++){
      if (numArray[i] < numArray[j]){
        let temp = numArray[i];
        numArray[i] = numArray[j];
        numArray[j] = temp;
      }
    }
  }
}// end bubbleSort

let array = [11,53,3,82,22,4,8,1,9,0,5,3,8,2,36,8,6,5732,82,47,9,4,2643,274];

bubbleSort(array);

console.log(array);
