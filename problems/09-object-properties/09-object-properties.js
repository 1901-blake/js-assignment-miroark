/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */

function arrayElements (someArray, indents = 0) {
  someArray.forEach((element) => {
    if (element.constructor === Object){
      console.log(`${" ".repeat(indents)}{`);
      objectProperties(element, indents + 1);
      console.log(`${" ".repeat(indents)}}
      `)
    }//Object Handler. COMPLETE

    else if (element.constructor === Array) {
      console.log(`${" ".repeat(indents)}Array in an array.`);
    }//Array Handler

    else {
      console.log(`${" ".repeat(indents)}${element}`);
    }//Primitive Handler. COMPLETE

  });
}//end of arrayElements. IN PROGRESS

function objectProperties(someObj, indents = 0) {

  for (item in someObj){
    if (someObj[item].constructor === Object){
      //Recurseively call objectProperties. Who knows how many objects are nested?
      console.log(`${" ".repeat(indents)}Key: ${item}`);
      console.log(`${" ".repeat(indents)}Value:{`);
      objectProperties(someObj[item], indents + 1);
      console.log(`${" ".repeat(indents)}}
      `);
    }//end of object handling. COMPLETE

    else if (someObj[item].constructor === Array) {
      console.log(`${" ".repeat(indents)}Key: ${item}`);
      console.log(`${" ".repeat(indents)}Value: [`);

      arrayElements(someObj[item], indents + 1);

      console.log(`${" ".repeat(indents)}]
      `);
    }//end of array handling. COMPLETE

    else {
      console.log(`${" ".repeat(indents)}Key: ${item}`);
      console.log(`${" ".repeat(indents)}Value: ${someObj[item]}
        `);
    }//end of primitives handling. COMPLETE
  }//end of for (x in y)
}//end of objectProperties. COMPLETE

let testObj = {
  category : 'Fruit',
  object : {
    name : 'Banana',
    rating : 7,
    prices : [0.99,0.59,1.25],
    randomObject : {
      favoriteColor : 'Green',
      why : 'Just Because'
    }
  },
  orders : ['Tampa, FL', 'New Albany, IN', 'Newark, DE', 'Fresno, CA'],
  arrayOfObjects : [{name : 1, area : 'left'}, {name : 2, area:'right'}],
  arrayOfArrays : [[1,2,3],[2,3,4],[4,5,6]]
}

objectProperties(testObj);
