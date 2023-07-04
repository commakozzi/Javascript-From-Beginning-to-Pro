/* ---------------------------------------------
Begin Practice exercise 3.1:
--------------------------------------------- */

let groceryList = ["milk", "bread", "apples"];

console.log(groceryList.length);
console.log(groceryList[0]);
console.log(groceryList[1]);
console.log(groceryList[2]);

groceryList[1] = "bananas";

console.log(`bread has been changed to: ${groceryList[1]}`);

/* ---------------------------------------------
End Practice exercise 3.1:
--------------------------------------------- */

/* ---------------------------------------------
Begin Array functions:
--------------------------------------------- */
// Array.push()
groceryList.push("tangerine");

console.log(groceryList);
console.log(groceryList.sort());

// Array.splice()
let arrOfShapes = ["circle", "triangle", "rectangle", "pentagon"];

arrOfShapes.splice(2, 0, "square", "trapezoid"); /* first number is starting index,
                                                    second is number of elements to delete */

console.log(arrOfShapes);

// Array.concat()
let arr5 = [1, 2, 3];
let arr6 = [4, 5, 6];
let arr7 = arr5.concat(arr6);

console.log(arr7);

let arr8 = arr7.concat(7, 8, 9);

console.log(arr8);

// Array.pop()
arr8.pop();

console.log(arr8);

// Array.find()
arr8 = [2, 6, 7, 8];

let findValue1 = arr8.find(function(e) { return e === 6; });
let findValue2 = arr8.find(e => e === 10);

console.log(findValue1, findValue2);

// Array.indexOf()
arr8 = [ 2, 6, 7, 8];

let findIndex1 = arr8.indexOf(6);
let findIndex2 = arr8.indexOf(10);

console.log(findIndex1, findIndex2);  // findIndex2 returns -1 because 10 doesn't exist.

/* ---------------------------------------------
End Array Functions.
--------------------------------------------- */

/* ---------------------------------------------
Begin Practice exercise 3.2:
--------------------------------------------- */
let shoppingList = [];

shoppingList.push("Milk", "Bread", "Apples");
//console.log(`line 79: ${shoppingList}`);

shoppingList.splice(1, 1, "Bananas", "Eggs");
// console.log(`line 82: ${shoppingList}`);

let removedItem = shoppingList.pop();
// console.log(`line 85: ${removedItem}`);
// console.log(`line 86: ${shoppingList}`);

shoppingList.sort();
// console.log(`line 89: ${shoppingList}`);

let milkLocation = shoppingList.indexOf("Milk");
// console.log(`line 92: ${milkLocation}`);

shoppingList.splice(1, 0, "Carrots", "Lettuce");
// console.log(`line 95: ${shoppingList}`);

let newShoppingList = [ "Juice", "Pop"];
let combinedItems = newShoppingList.concat(newShoppingList);
console.log(`combinedItems = ${combinedItems}`);
// console.log(`line 99: ${combinedItems}`);

shoppingList.concat(combinedItems);
console.log(shoppingList);
console.log(shoppingList.concat(combinedItems));
console.log(combinedItems);


/* ---------------------------------------------
End Practice exercise 3.2.
--------------------------------------------- */

/* ---------------------------------------------
Begin Multi-dimensional Arrays:
--------------------------------------------- */
let someValues1 = [1, 2, 3];
let someValues2 = [4, 5, 6];
let someValues3 = [7, 8, 9];
let arrayOfArrays = [someValues1, someValues2, someValues3];

console.log(arrayOfArrays);

let arrayOfArrays2 = arrayOfArrays;

console.log(arrayOfArrays2);

console.log(arrayOfArrays2[0][1]);
console.log(arrayOfArrays2[2][1]);


/* ---------------------------------------------
End Multi-dimensional Arrays.
--------------------------------------------- */

/* ---------------------------------------------
Begin Practice exercise 3.3:
--------------------------------------------- */
let myArray = [1, 2, 3];
let myMultiArray = [myArray, myArray, myArray];

console.log(myMultiArray[1][1]);


/* ---------------------------------------------
End Practice exercise 3.3.
--------------------------------------------- */

/* ---------------------------------------------
Begin Practice exercise 3.4:
--------------------------------------------- */
let car = {
    make: "Volvo",
    model: "POS",
    color: "Black",
    carIsFast: false,
    carVoice: "Vroom!",
    carSpeak: function() {
        console.log(this.carVoice);
    }
}

let myCar = car;
myCar.carIsFast = true;
myCar.make = "Ferrari";

console.log(myCar.make);
car.carSpeak();

/* ---------------------------------------------
End Practice exercise 3.4.
--------------------------------------------- */

/* ---------------------------------------------
Begin Practice exercise 3.5:
--------------------------------------------- */
let people = {
    friends: []
}

let friend1 = {
    firstName: "Jon",
    lastName: "Gentry",
    friendID: "01"
}
let friend2 = {
    firstName: "Anthony",
    lastName: "Salvatore",
    friendID: "02"
}
let friend3 = {
    firstName: "David",
    lastName: "Jolly",
    friendID: "03"
}

people.friends.push(friend1, friend2, friend3);

console.log(people);
console.log(people.friends);

/* ---------------------------------------------
End Practice exercise 3.5.
--------------------------------------------- */

