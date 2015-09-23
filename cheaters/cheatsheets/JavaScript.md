## JavaScript

### Arrays

    var numbersArray = [0, 1, 2, 3, 4, 5, 6, 7];

#### .length()

Get length/size of array

    console.log("Array Length: " + numbersArray.length);


#### .pop()

Remove the LAST item AND store it as a variable

    var lastItem = numbersArray.pop();
    console.log("This was the last item: " + lastItem);
    console.log("Array After Pop: " + numbersArray);


#### .push()

ADD an item to the END of the array

    var newItem = 7;
    numbersArray.push(newItem);
    console.log("Array After Push: " + numbersArray);


#### .reverse()

Reverse the original array

    numbersArray.reverse();
    console.log("Same array after reverse: " + numbersArray);


#### .shift()

Get FIRST item AND remove it from array

    console.log("First Item (Shift): " + numbersArray.shift());
    console.log("Array After Shift: " + numbersArray);


#### .sort()

Sort the items of the array (no rules give least to greatest)

    console.log("Sorted array no rules: " + numbersArray.sort());

    function greatestToLeast(a, b) {
        return b - a;
    }
    console.log("Sorted greatest to least: " + numbersArray.sort(greatestToLeast));


#### .splice()

REMOVE item(s) from array, optionally add. 

splice accepts index,amount,newItem and returns an array of removed items.

    console.log("Items Removed With Splice: " + numbersArray.splice(2, 3));
    console.log("Array After Splice: " + numbersArray);


#### .unshift()

ADD item to the BEGINNING of array

    numbersArray.unshift(7);
    console.log("Array after unshift: " + numbersArray);


#### .concat()

Joins two arrays to create another

    var negativeNumbers = [-1, -2, -3, -4, -5];
    var newArray = numbersArray.concat(negativeNumbers);
    console.log("Combined Arrays: " + newArray);


#### .join()

Creates a string from an array separated by a given string

    var string = newArray.join(" + ");
    console.log("String from join: " + string);


#### .slice()

Returns NEW array by REMOVING edges from array.

slice accepts index,index (excluded, included). Starts cursor 0 at very beginning (not first item) and removes everything between two cursors.

    var sliceArray = newArray.slice(3, 7);
    console.log("New Array From Slice: " + sliceArray);


#### .indexOf() and .lastIndexOf()

FIND an element in an array

    var fruits = ["apples", "oranges", "grapes", "bananas", "apples"];

    var firstAppleIndex = fruits.indexOf("apples");
    var lastAppleIndex = fruits.lastIndexOf("apples");
    var firstMangoIndex = fruits.indexOf("mangos"); // Not found returns -1


#### .forEach()

ITERATE over the array

    var numbersArray = [1, 2, 3, 4, 5];
    numbersArray.forEach(function(item) {
        // console.log(item);
    });


#### .every()

TEST EVERY element for truthy

    var names = ["Brandon", "Destinee", "Harvey", "June", 24];

    function isString(item) {
        return typeof item === "string";
    }

    var everyNameIsAString = names.every(isString);


#### .some()

TEST ANY element for truthy

    var places = ["Los Angeles", "New York", "Miami", "Chicago", 33];

    function isNumber(item) {
        return typeof item === "number";
    }

    var anyPlaceIsANumber = places.some(isNumber);


#### .filter()

CREATE NEW array from elements that are truthy

    var companies = ["Apple", "Google", "Coca Cola", "General Electric"];

    function startsWithG(item) {
        return item[0] === "g" || item[0] === "G";
    }

    var companiesThatStartWithG = companies.filter(startsWithG);


#### .map()

CREATE NEW array from elements with function rules

    var oneThroughFive = [1, 2, 3, 4, 5];

    function multiplyByTwo(item) {
        return item * 2;
    }

    var twoFourSixEightTen = oneThroughFive.map(multiplyByTwo);


#### .reduce()

CREATE NEW VALUE from elements with function rules

    var tensToThousand = [1, 10, 100, 1000];

    function addTheNumbers(previousValue, currentValue) {
        return previousValue + currentValue;
    }

    var number = tensToThousand.reduce(addTheNumbers);
    // 2nd optional parameter: initial value to reduce
    var sum = tensToThousand.reduce(addTheNumbers, 0);


### Objects

#### CREATE an object

    var jane = {
        firstName: "Jane",
        lastName: "Smith",
        age: 24,
        getFullName: function() {
            return this.firstName + " " + this.lastName;
        }
    };

#### CREATE a class 

Use a constructor function for objects

    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

Methods should go into prototypes, not the constructor.

    // Saves memory.
    Person.prototype.getFullName = function() {
        return this.firstName + " " + this.lastName;
    };

    var joe = new Person("Joe", "Smith", 24);

    console.log(jane.getFullName());
    console.log(joe.getFullName());


### Strings

    var str = "The 10 quick brown foxes jumped over the lazy dog.";

#### .charAt()
    // Returns the character at a certain index
    console.log("Character at index 8: " + str.charAt(8));


#### .indexOf() AND .lastIndexOf()

    // Returns the index of the first instance of a given character
    console.log("First index of \"r\": " + str.indexOf("r"));
    console.log("Last index of \"r\": " + str.lastIndexOf("r"));


#### .search()

    // Same as indexOf(), but accepts a regex
    console.log("First index of \"10\": " + str.search(/10/));


#### .match()

    // Returns an array of all of the matches of a regex
    // Useful for trying to figure out how many times something appears
    // Get a match, then get the length of the returned array.
    console.log("Matches of \"r\": " + str.match(/the/gi));


#### .replace()

    // Returns a string with matched regex replaced with given string
    console.log("\"The\" to \"why\": " + str.replace(/the/gi, 'why'));


#### .slice()

    // Returns substring string by REMOVING edges of full string
    // Replacement for substr and substring bc it accepts backwards indexes
    // Accepts two index arguments
    console.log("Sliced String: " + str.slice(4, -4));


#### .split()

    // Turns string by a given string into an array
    console.log("Split string into array by space: " + str.split(" "));


#### .toLowerCase()

    // Makes string all lower case
    console.log("Lower Case String: " + str.toLowerCase());


#### .toUpperCase()

    // Makes string all upper case
    console.log("Upper Case String: " + str.toUpperCase());


### Dates

    var date = new Date();
    var dateWasBorn = new Date(1991, 3, 29, 4, 12, 46);
    var yearWasBorn = dateWasBorn.getFullYear();
    var monthWasBorn = dateWasBorn.getMonth(); // 0 to 11
    var dayOfMonthWasBorn = dateWasBorn.getDate();
    var dayOfWeekWasBorn = dateWasBorn.getDay(); // 0 to 6


#### Date comparison

    var newerDate = date > dateWasBorn ? date : dateWasBorn;
    var olderDate = date < dateWasBorn ? date : dateWasBorn;

    console.log(olderDate);

### Math

    var exponent = Math.pow(2, 3);
    var squareRoot = Math.sqrt(9);
    var roundedNumber = Math.round(30.45);
    var roundedUp = Math.ceil(30.45);
    var roundedDown = Math.floor(30.85);
    var largestNumber = Math.max(3, 9, 45, 18, 2);
    var smallestNumber = Math.min(3, 9, 45, 18, 2);
    var absolutValue = Math.abs(-7);
    var randomNumber = Math.random();
    var zeroOrOne = Math.round(Math.random());
    var zeroToNine = Math.floor(Math.random() * 10);
    var oneToTen = Math.ceil(Math.random() * 10);
    var minusOne = Math.cos(Math.PI);
    var one = Math.sin(Math.PI / 2);
    var piDividedBy4 = Math.atan2(1, 1);


### Functions

#### DECLARE 

_hoisted to the top on page load_

    function declaredFunction() {
        // do something
    }


#### EXPRESS

    var expressedFunction = function() {
      // do something
    };


#### CLOSURES

    function addSomething(a) {
        return function(b) {
            return a + b;
        };
    }
    var addFive = addSomething(5);
    var fivePlusTen = addFive(10);


#### CALLBACKS or HIGHER-ORDER FUNCTIONS

    var calculator = {
        calculate: function(num1, num2, callback) {
            return callback(num1, num2);
        }
    };

    var sum = function(num1, num2) {
        return num1 + num2;
    };

    var sumOfFiveAndTwo = calculator.calculate(5, 2, sum);
    console.log(sumOfFiveAndTwo);


### Callbacks

#### REWRITING NATIVE FUNCTIONS

    var myArray = [1, 2, 3, 4, 5];

    // array.forEach()
    function each(array, callback) {
        if (Array.isArray(array)) {
            var i;
            for (i = 0; i < array.length; i += 1) {
                callback(array[i], i);
            }
        }
    }

    // array.map() using the above each() function
    function arrayMap(array, callback) {
        var tempArray = [];
        each(array, function(item, index) {
            tempArray.push(callback(item, index));
        });
        return tempArray;
    }

    // array.filter() using the above each() function
    function arrayFilter(array, callback) {
        var tempArray = [];
        each(array, function(item) {
            if (callback(item)) {
                tempArray.push(item);
            }
        });
        return tempArray;
    }

    // array.reduce()/.concat() using the above each() function
    function arrayReduce(array, callback) {
        var finalValue = array[0];
        each(array.slice(1), function(item) {
            finalValue = callback(finalValue, item);
        });
        return finalValue;
    }

    // python's .zip() functionality, using the above arrayMap() function
    // given arrays of equal size
    function arrayZip(array1, array2 /*,... */) {
        var params = Array.prototype.slice.call(arguments);
        return arrayMap(params[0], function(a, i) {
            return arrayMap(params, function(item) {
                return item[i];
            });
        });
    }

    var secondArray = [6, 7, 8, 9, 10];

    var newArray = arrayZip(myArray, secondArray);

    function arrayIndexOf(array, item) {
        // indexOf() stops once the item is found
        var i;
        for (i = 0; i < array.length; i += 1) {
            if (array[i] === item) {
                return i;
            }
        }
        return -1;
    }

    var findFour = arrayIndexOf(myArray, 4);

    console.log(findFour);




### Best Practices

    // when using simple if/else: ternary operator
    var age = 22;
    var status = age >= 21 ? "major" : "minor";
    console.log("Status: " + status);


    // when using multiple if/else but with simple logic: switch
    var colorChosen = "orange";

    switch (colorChosen) {
        case "blue":
            console.log("I love blue!");
            break;
        case "red":
            console.log("I love red!");
            break;
        case "orange":
            console.log("I love orange!");
            break;
        default:
            console.log("I don't know that color.");
    }

    // Using operators in return statements
    // good when coupled with recursion to test "any" or "every" for truthy
    function either(on, off) {
        return on || off;
    }

    function both(on, off) {
        return on && off;
    }

    var on = false, off = true;

    console.log(either(on, off)); // returns true
    console.log(both(on, off)); // returns false

> From [rzCodes/rzJSFundamentals](https://github.com/rzCodes/rzJSFundamentals)
