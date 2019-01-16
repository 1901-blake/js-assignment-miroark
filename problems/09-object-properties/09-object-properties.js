/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */
function objectProperties(someObj) {

  for (item in someObj){
    if (someObj[item].constructor === Object){
      //Recurseively call objectProperties. Who knows how many objects are nested?
      console.log(`Key: ${item}`);
      console.log(`Value:`);
      objectProperties(someObj[item]);
    }//end of object handling

    else if (someObj[item].constructor === Array) {
      //Iterate through the array, and display their values.
      console.log(`Key: ${item}`);

      //assemble string with contents in the array.
      let arrayContents = '[';
      someObj[item].forEach(function(element){
        arrayContents += element + ', ';
      });
      arrayContents = arrayContents.substring(0, arrayContents.length - 2);
      arrayContents += ']';

      console.log(`Value: ${arrayContents}
        `);
    }//end of array handling. Needs to be able to hand more arrays, or more objects.

    else {
      console.log(`Key: ${item}`);
      console.log(`Value: ${someObj[item]}
        `);
    }//end of primitives handling.
  }//end of for (x in y)
}//end of objectProperties

let testObj = {
  category : 'Fruit',
  object : {
    name : 'Banana',
    Rating : 7,
    Prices : [0.99,0.59,1.25]
  },
  Orders : ['Tampa, FL', 'New Albany, IN', 'Newark, DE', 'Fresno, CA']
}

objectProperties(testObj);
