//Step One

const myDog = {
    // Only change code below this line
  "name" : 'Carter',
  "legs" : 4,
  "tails" : 1,
  "friends" : ["everyone in the household"]
  
    // Only change code above this line
  };

  //Step Two

  
// Setup
const testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
  };
  
  // Only change code below this line
  const hatValue = testObj.hat;      // Change this line
  const shirtValue = testObj.shirt;    // Change this line

  //Step Three

   // Setup
const testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
  };
  
  // Only change code below this line
  const entreeValue = testObj["an entree"];   // Change this line
  const drinkValue = testObj["the drink"];    // Change this line

  //Step Four

  function functionWithArgs(a,b) {
    console.log(a+b);
    }
    functionWithArgs(1,2); 
    functionWithArgs(7,9); 

    //Step Five
    // Setup
var myArr = [ 2, 3, 4, 5, 6];

// Only change code below this line
var total = 0;
for (var i = 0; i < myArr.length; i++) {
  total += myArr[i];
}