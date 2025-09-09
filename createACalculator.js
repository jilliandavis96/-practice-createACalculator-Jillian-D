//Step 1: Individual Functions for Each Operation
//1. Absolute Value Calculation
function absoluteValue(num){
    return Math.abs(num);
};
//2. Power Calculation
function powerCalculation(base, exponent){
    return Math.pow(base, exponent);
};
//3. Square Root Finder
function squareRoot(num){
    return Math.sqrt(num);
};
//4. Maximum and Minimum Finder
function findMaximum(numbers){
    return Math.max(...numbers);
};
function findMinimum(numbers){
    return Math.min(...numbers);
};

//5. Random Number Generator (within specified range)
function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
//6. Custom Rounding
function customRound(num, decimalPlaces){
   let factor = Math.pow(10, decimalPlaces);
   return Math.round(num * factor) / factor;
};

//Step 2: Test Each Function:
console.log("TESTING INDIVIDUAL FUNCTIONS");
console.log("Absolute value of -62.5:", absoluteValue(-62.5));
console.log("7 to the power of 2:", powerCalculation(7, 2));
console.log("Square root of 49:", squareRoot(49));
console.log("Maximum from [31, 58, -2, 0.55, 7]:", findMaximum([31, 58, -2, 0.55, 7]));
console.log("Minimum from [5, 28, -25, 0.73, 71]:", findMinimum([5, 28, -25, 0.73, 71]));
console.log("Random number between 1 and 30:", randomNumber(1, 30));
console.log("85.8837403 rounded to 2 decimal places:", customRound(85.8837403, 2));

//Step 3: Calculator Object
let calculator = {
   
    name: "Math Game Calculator",
    
    absolute: function(num) {
        return Math.abs(num);
    },
    
    power: function(base, exponent) {
        return Math.pow(base, exponent);
    },
    
    sqrt: function(num) {
        return Math.sqrt(num);
    },
    
    max: function(numbers) {
        return Math.max(...numbers);
    },
    
    min: function(numbers) {
        return Math.min(...numbers);
    },
    
    random: function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    
    round: function(num, decimalPlaces) {
        let factor = Math.pow(10, decimalPlaces);
        return Math.round(num * factor) / factor;
    }
};

//Step 4: Test the Calculator Object with Required Operations
console.log("Calculator Object Tests:");
console.log("Find absolute value of -45.67:", calculator.absolute(-45.67));
console.log("Raise 5 to the power of 3:", calculator.power(5, 3));
console.log("Calculate square root of 144:", calculator.sqrt(144));
console.log("Largest value from [3, 78, -12, 0.5, 27]:", calculator.max([3, 78, -12, 0.5, 27]));
console.log("Smallest value from [3, 78, -12, 0.5, 27]:", calculator.min([3, 78, -12, 0.5, 27]));
console.log("Random number between 1 and 50:", calculator.random(1, 50));
console.log("Round 23.67891 to 2 decimal places:", calculator.round(23.67891, 2));

//Demonstrate object properties and iteration
console.log("Calculator Properties");
console.log("Calculator name:", calculator.name);

//Use for... in loop to show all methods
console.log("\nCalculator capabilities:");
for (let key in calculator) {
    if (calculator.hasOwnProperty(key)) {
        if (typeof calculator[key] === 'function') {
            console.log("Method:", key);
        } else {
            console.log("Property:", key, "=", calculator[key]);
        }
    }
};
