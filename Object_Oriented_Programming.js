//Object Oriented Programming 

//Create a Basic JavaScript Object
let dog = {
  name: "Aflac",
  numLegs: 2
};

//Use Dot Notation to Access the Properties of an Object
let dog2 = {
  name: "Spot",
  numLegs: 4
};
// Add your code below this line
console.log(dog2.name)
console.log(dog2.numLegs)

//Create a Method on an Object
let dog3 = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + dog3.numLegs + " legs.";}
};

dog3.sayLegs();

//Make Code More Reusable with the this Keyword
let dog4 = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
};

dog4.sayLegs();

//Define a Constructor Function
function Dog() {
  this.name = "Bob";
  this.color = "Greene";
  this.numLegs = 8;
}

//Use a Constructor to Create Objects
function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
// Add your code below this line

let hound = new Dog();

//Extend Constructors to Receive Arguments
function Dog(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
}

let terrier = new Dog("Daniel", "Greenie");

//Verify an Object's Constructor with instanceof
/* jshint expr: true */

function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Add your code below this line

let myHouse = new House(5);

myHouse instanceof House

//Understand Own Properties

