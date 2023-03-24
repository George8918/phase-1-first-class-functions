
function receivesAFunction(callback) {
  callback(); // call the callback function
}

// Function that returns a named function
function returnsANamedFunction() {
  // Define the named function
  function namedFunction() {
    console.log("This is a named function");
  }
  
  return namedFunction; // Return the named function
}

// Function that returns an anonymous function
function returnsAnAnonymousFunction() {
  // Define and return the anonymous function
  return function() {
    console.log("This is an anonymous function");
  }
}