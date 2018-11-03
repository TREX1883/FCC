// FREE CODE CAMP BASIC DATA STRUCTURE

//--------------------------------------------------
//Use an Array to Store a collection of Data
let yourArray = [
    '22', 22, true, 'coding', 35
];
console.log(yourArray.length);

//--------------------------------------------------
//Access an Array's contents using bracket notation
let myArray = ["a", "b", "c", "d"];
// change code below this line
myArray[1] = 'not b anymore';
//change code above this line
console.log(myArray);

//--------------------------------------------------
//Add items to an Array with push() and unsift() 
function mixedNumbers(arr) {
  arr.unshift('I', 2, 'three')
  arr.push(7, 'VIII', 9)
  // change code above this line
  return arr;
}
// do not change code below this line
console.log(mixedNumbers(['IV', 5, 'six']));
//---------------------------------------------------
//Remove Item from an Array with pop() and shift() 
function popShift(arr) {
let popped = arr.pop(); // change this line
let shifted = arr.shift(); // change this line
  //arr.pop(); // change this line
  //arr.shift(); // change this line
  return [shifted, popped];
  //return [arr]
}
// do not change code below this line
console.log(popShift(['challenge', 'is', 'not', 'complete']));

//---------------------------------------------------
//Remove Item Using splice() 
function sumOfTen(arr) {
  // change code below this line
  arr.splice(2, 2);
  // change code above this line
  return arr.reduce((a, b) => a + b);
}

// do not change code below this line
console.log(sumOfTen([2, 5, 1, 5, 2, 1]));

//---------------------------------------------------
//Add Item using Splice() 
function htmlColorNames(arr) {
  // change code below this line
  arr.splice(0,2, 'DarkSalmon', 'BlanchedAlmond');
  return arr;
} 
// do not change code below this line
console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurqoise', 'FireBrick']));

//---------------------------------------------------
//Copy Array Item using splice() 
function forecast(arr) {
  // change code below this line
  return arr.slice(2,4);
}
// do not change code below this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

//---------------------------------------------------
//Copy an Array with the Spread Operator 
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // change code below this line
    newArr.push([...arr]);
    // change code above this line
    num--;
  }
  return newArr;
}
// change code here to test different cases:
console.log(copyMachine([true, false, true], 2));

//---------------------------------------------------
//Combine Arrays with the Spread Operator
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragment, 'is', 'fun']
  return sentence;
}

// do not change code below this line
console.log(spreadOut());

//---------------------------------------------------
//Check for the Presence of an Element with indexOf() 
function quickCheck(arr, elem) {
  // change code below this line
    if (arr.indexOf(elem) !== -1) {
	return true
    } else {
	return false;
    }
  // change code above this line
}
// change code here to test different cases:
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

//---------------------------------------------------
//Iterate through all an Array's items using for loops
function filteredArray(arr, num) {
  let newArr = [];
  // change code below this line
for (let i = 0; i < arr.length; i++){
  if (arr[i].indexOf(num) === -1) {
    newArr.push(arr[i]);
  }
}
  // change code above this line
  return newArr;
}

// change code here to test different cases:
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

//---------------------------------------------------
//Create complex multi-dimensional arrays
let myNestedArray = [
  // change code below this line
[[[["deepest"], "deeper"], "deep"]]
  // change code above this line
];

//---------------------------------------------------
//Add key-value pairs to JavaScript Object
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

// change code below this line
foods.bananas = 13,
foods.grapes = 35,
foods.strawberries = 27;
// change code above this line

console.log(foods);

//---------------------------------------------------
//Modify an Object Nested within an Object
let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

// change code below this line
userActivity.data.online = 45;
// change code above this line

console.log(userActivity);

//---------------------------------------------------
//Access property naes with bracket notation
let foods2 = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};
// do not change code above this line

function checkInventory(scannedItem) {
  // change code below this line
return foods[scannedItem];
}

// change code below this line to test different cases:
console.log(checkInventory("apples"));

//---------------------------------------------------
//Use the delete keyword to remove object properties
let foods3 = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

// change code below this line
delete foods.oranges;
delete foods.plums;
delete foods.strawberries;
// change code above this line

console.log(foods);

//---------------------------------------------------
//Check if an Object has a Property
let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(obj) {
  // change code below this line
return ('Alan' in users && 'Jeff' in users && 'Sarah' in users && 'Ryan' in users)
  // change code above this line
}

console.log(isEveryoneHere(users));

//---------------------------------------------------
//Iterate through the keys of an Object with a for.. in Statement
let users2 = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function countOnline(obj) {
  // change code below this line
let n = 0;
for (let user2 in obj) if (obj[user2].online) n++;
return n;
  // change code above this line
}

console.log(countOnline(users));

//---------------------------------------------------
//Generate an Array of all Object Keys with Object.Keys() 
let users3 = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
  // change code below this line
return Object.keys(obj);
  // change code above this line
}

console.log(getArrayOfUsers(users3));

//---------------------------------------------------
//Modify an Array Stored in an Object
let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  // change code below this line  
userObj.data.friends.push(friend);
return userObj.data.friends;
  // change code above this line
}

console.log(addFriend(user, 'Pete'));