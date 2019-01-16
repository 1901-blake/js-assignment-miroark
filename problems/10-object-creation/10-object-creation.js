/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

function FunctionObject (name, status) {
  this.name = name;
  this.status = status
}

class ClassObject {
  constructor (name, status) {
    this.name = name;
    this.status = status;
  }
}

//literal
let objectLiteral = {
  name : 'Literal',
  status : '[OK]'
}

//function
let functionObject = new FunctionObject('Function', '[OK]');

//class
let classObject = new ClassObject('Class', '[OK]')

console.log(`
  Name: ${objectLiteral.name}                                                   Status: ${objectLiteral.status}
  Name: ${functionObject.name}                                                  Status: ${functionObject.status}
  Name: ${classObject.name}                                                     Status: ${classObject.status}`);
