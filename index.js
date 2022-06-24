// Hoisting Definition: Hoisting is the process of saving the declaration of
// functions and variables in memory before the code has ran

var name // Declaration
name = 'Marcus' // Initialization

/* 
  START: Hoisting Variables, var, let and const
*/

// Hoisting var
function printName() {
  console.log(name)
  var name
  name = 'Marcus'
}

printName()

// Hoisting let and const
function printName() {
  const name = 'Marcus'
  console.log(name)
}

printName()

/* 
  END: Hoisting Variables, var, let and const
*/

/* 
  START: Hoisting functions
*/

// function keyword
function printName() {
  var name = 'Marcus'
  name = getNewName()

  console.log(name)

  function getNewName() {
    return 'Roland'
  }
}

console.log(printName())

// Arrow functions
function printName() {
  const getNewName = () => 'Roland'
  var name = 'Marcus'
  name = getNewName()

  console.log(name)
}

printName()

/* 
  END: Hoisting functions
*/
