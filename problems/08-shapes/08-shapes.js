/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
   *
  ***
 *****
*******
 *****
  ***
   *
*/
function isEven(someNum) {
  return !(someNum%2);
}

//-----------------------------------------------------------------

function printTriangle(height, character){
  for (let i = 0; i < height; i++){
    console.log(character.repeat(i+1));
  }
}// end of printTriangle

function printSquare(height, character){
  for (let i = 0; i< height; i++){
    console.log(character.repeat(height));
  }
}//end of printSquare

function printDiamond(height, character){

  for (i = 0; i < height; i++){
    console.log(`${" ".repeat((height-(i+1))/2)}${character.repeat(i+1)}`);
    i++; //weird, I know but the for loop won't let me add two at a time, so I have to increment here.
  }//top

  for (i = height-3; i > -1; i--){
    console.log(`${" ".repeat((height-(i+1))/2)}${character.repeat(i+1)}`);
    i--; //weird, I know but the for loop won't let me add two at a time, so I have to decrement here.
  }//bottom

}//end of printDiamond

//-------------------------------------------------------------------------------------------

function printShape(shape, height, character) {
  if (isEven(height)) {
    console.log(`Error: height is expected to be odd. ${height} is even though`)
  }
  else {
    switch (shape) {
      case "triangle":
        printTriangle(height, character);
        break;
        case "square":
          printSquare(height, character);
          break;
        case "diamond":
          printDiamond(height, character);
          break;
      default:
      console.log("Error: Invalid shape entered. Pleas make sure to use lower case is the function calls.");
    }
  }
}

printShape("circle", 5, '&');
printShape("triangle", 2, '^');
console.log(`


  `);
printShape("triangle", 3, '@');
console.log(`
  `);
printShape("square", 3, '.');
console.log(`
  `);
printShape("diamond", 5, ',');
console.log(`
  `);
printShape("diamond", 11, '/');
console.log(`
  `);
printShape("triangle", 5, 'r');
