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
  function Bird(name) {
    this.name = name;
    this.numLegs = 2;
  }
  
  let canary = new Bird("Tweety");
  let ownProps = [];
  // Add your code below this line
  
  ownProps = Object['keys'](canary);
  
  //Use Prototype Properties to Reduce Duplicate Code
  function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.numLegs = 4;
  
  // Add your code above this line
  let beagle = new Dog("Snoopy");
  
  //Iterate Over All Properties
  function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.numLegs = 4;
  
  let beagle2 = new Dog("Snoopy");
  
  let ownProps2 = [];
  let prototypeProps = [];
  
  // Add your code below this line 
  for (let prop in beagle2) {
    if (beagle2.hasOwnProperty(prop)) {
      ownProps2.push(prop);
    } else {
      prototypeProps.push(prop);
    }
  }
  
  
  //Understand the Constructor Property
  function Dog(name) {
    this.name = name;
  }
  
  // Add your code below this line
  function joinDogFraternity(candidate) {
    if (candidate.constructor === Dog) {
      return true;
    } else {
      return false;
    }
  }
  
  //Change the Prototype to a New Object
  function Dog(name) {
    this.name = name; 
  }
  
  Dog.prototype = {
    // Add your code below this line
    numLegs: 3, 
    eat: function() {
      console.log("nom nom nom");
    },
    describe: function() {
      console.log("My name is " + this.name);
    }
  };
  
  //Remember to Set the Constructor Property when Changing the Prototype
  function Dog(name) {
    this.name = name; 
  }
  
  // Modify the code below this line
  Dog.prototype = {
    constructor: Dog,
    numLegs: 2, 
    eat: function() {
      console.log("nom nom nom"); 
    }, 
    describe: function() {
      console.log("My name is " + this.name); 
    }
  };
  
  //Understand Where an Object’s Prototype Comes From
  function Dog(name) {
    this.name = name;
  }
  
  let beagle3 = new Dog("Snoopy");
  
  // Add your code below this line
  Dog.prototype.isPrototypeOf(beagle3);
  
  
  //Understand the Prototype Chain
  function Dog(name) {
    this.name = name;
  }
  
  let beagle4 = new Dog("Snoopy");
  
  Dog.prototype.isPrototypeOf(beagle4);  // => true
  
  // Fix the code below so that it evaluates to true
  Object.prototype.isPrototypeOf(Dog.prototype);
  
  
  //Use Inheritance So You Don't Repeat Yourself
  function Cat(name) {
    this.name = name; 
  }
  
  Cat.prototype = {
    constructor: Cat
  };
  
  function Bear(name) {
    this.name = name; 
  }
  
  Bear.prototype = {
    constructor: Bear
  };
  
  function Animal() { }
  
  Animal.prototype = {
    constructor: Animal,
    eat: function() {
      console.log("nom nom nom");
    }
    };
  
  //Inherit Behaviors from a Supertype
  function Animal() { }
  
  Animal.prototype = {
    constructor: Animal, 
    eat: function() {
      console.log("nom nom nom");
    }
  };
  
  // Add your code below this line
  
  let duck = new Animal(); // Change this line
  let beagle5 = new Animal(); // Change this line
  
  duck.eat(); // Should print "nom nom nom"
  beagle5.eat(); // Should print "nom nom nom" 
  
  //Set the Child's Prototype to an Instance of the Parent
  function Animal() { }
  
  Animal.prototype = {
    constructor: Animal,
    eat: function() {
      console.log("nom nom nom");
    }
  };
  
  function Dog() { }
  
  // Add your code below this line
  Dog.prototype = Object.create(Animal.prototype);
  
  let beagle6 = new Dog();
  beagle6.eat();  // Should print "nom nom nom"
  
  //Reset an Inherited Constructor Property
  function Animal() { }
  function Bird() { }
  function Dog() { }
  
  Bird.prototype = Object.create(Animal.prototype);
  Dog.prototype = Object.create(Animal.prototype);
  
  // Add your code below this line
  Dog.prototype.constructor = Dog;
  Bird.prototype.constructor = Bird;
  
  
  let duck2 = new Bird();
  let beagle7 = new Dog();
  
  //Add Methods After Inheritance
  function Animal() { }
  Animal.prototype.eat = function() { console.log("nom nom nom"); };
  
  function Dog() { }
  
  // Add your code below this line
  
  Dog.prototype = Object.create(Animal.prototype);
  Dog.prototype.constructor = Dog;
  Dog.prototype.bark = function() {
      console.log("Woof!")
  };
  
  // Add your code above this line
  
  let beagle10 = new Dog();
  
  beagle10.eat(); // Should print "nom nom nom"
  beagle10.bark(); // Should print "Woof!"
  
  //Override Inherited Methods
  function Bird() { }
  
  Bird.prototype.fly = function() { return "I am flying!"; };
  
  function Penguin() { }
  Penguin.prototype = Object.create(Bird.prototype);
  Penguin.prototype.constructor = Penguin;
  
  // Add your code below this line
  
  Penguin.prototype.fly = () => 'Alas, this is a flightless bird.';
  
  // Add your code above this line
  
  let penguin = new Penguin();
  console.log(penguin.fly());
  
  //Use a Mixin to Add Common Behavior Between Unrelated Objects
  let bird = {
    name: "Donald",
    numLegs: 2
  };
  
  let boat = {
    name: "Warrior",
    type: "race-boat"
  };
  
  // Add your code below this line
  
  let glideMixin = function(obj) {
      obj.glide = function() {
          console.log("gliding")
      }
  }
  
  glideMixin(bird);
  glideMixin(boat);
  
  
  //Use Closure to Protect Properties Within an Object from Being Modified Externally
  function Bird() {
    let weight = 15;
  
    this.getWeight = () => weight;
  }
  
  //Understand the Immediately Invoked Function Expression (IIFE)
  (function () {
    console.log("A cozy nest is ready");
  })(); 
  
  //Use an IIFE to Create a Module
  const funModule = (function () {
    return {
      isCuteMixin: obj => {
        obj.isCute = () => true;
      },
      singMixin: obj => {
        obj.sing = () => console.log("Singing to an awesome tune");
      }
    };
  })();
  
  
  