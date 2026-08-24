// ==========================================
// 1. VARIABLES & DATA TYPES
// ==========================================
console.log("=== 1. VARIABLES & DATA TYPES ===");

// String
var studentName = "Boshra";
// Number
var age = 20;
var grade = 85;
// Boolean
var isStudent = true;
// Undefined
var city;
// Null
var phone = null;
// Array
var subjects = ["HTML", "CSS", "JavaScript"];
// Object
var student = {
    name: "Boshra",
    age: 20,
    department: "Systems"
};
console.log(studentName);
console.log(age);
console.log(grade);
console.log(isStudent);
console.log(city);
console.log(phone);
console.log(subjects);
console.log(student);

// ==========================================
// 2. OPERATORS
// ==========================================
console.log("=== 2. OPERATORS ===");
var number1 = 10;
var number2 = 3;
// Arithmetic Operators
console.log("Addition:", number1 + number2);
console.log("Subtraction:", number1 - number2);
console.log("Multiplication:", number1 * number2);
console.log("Division:", number1 / number2);
console.log("Modulus:", number1 % number2);
// Comparison Operators
console.log(number1 > number2);
console.log(number1 < number2);
console.log(number1 == number2);
console.log(number1 != number2);
console.log(number1 === number2);
// ==========================================
// 3. IF STATEMENT
// ==========================================
console.log("=== 3. IF ===");
var degree = 85;
if (degree >= 50) {
    console.log("You passed");
}
// ==========================================
// 4. IF / ELSE
// ==========================================
console.log("=== 4. IF / ELSE ===");
var result = 70;
if (result >= 50) {
    console.log("Pass");
} else {
    console.log("Fail");
}
// ==========================================
// 5. ELSE IF
// ==========================================
console.log("=== 5. ELSE IF ===");
var mark = 85;
if (mark >= 90) {
    console.log("Excellent");
} else if (mark >= 75) {
    console.log("Very Good");
} else if (mark >= 50) {
    console.log("Pass");
} else {
    console.log("Fail");
}
// ==========================================
// 6. SWITCH
// ==========================================
console.log("=== 6. SWITCH ===");
var day = 3;
switch (day) {
    case 1:
        console.log("Saturday");
        break;
    case 2:
        console.log("Sunday");
        break;
    case 3:
        console.log("Monday");
        break;
    case 4:
        console.log("Tuesday");
        break;
    default:
        console.log("Invalid day");
}
// ==========================================
// 7. FOR LOOP
// ==========================================
console.log("=== 7. FOR LOOP ===");
for (var i = 1; i <= 5; i++) {
    console.log(i);
}
// ==========================================
// 8. WHILE LOOP
// ==========================================
console.log("=== 8. WHILE LOOP ===");
var counter = 1;
while (counter <= 5) {
    console.log(counter);
    counter++;
}
// ==========================================
// 9. DO WHILE LOOP
// ==========================================
console.log("=== 9. DO WHILE LOOP ===");
var number = 1;
do {
    console.log(number);
    number++;
} while (number <= 5);
// ==========================================
// 10. ARRAY
// ==========================================
console.log("=== 10. ARRAY ===");
var fruits = ["Apple", "Banana", "Orange", "Mango"];
console.log(fruits);
// Access Array Elements
console.log(fruits[0]);
console.log(fruits[2]);
// Array Length
console.log(fruits.length);
// ==========================================
// 11. ARRAY WITH FOR LOOP
// ==========================================
console.log("=== 11. ARRAY WITH FOR LOOP ===");
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// ==========================================
// 12. STRING METHODS
// ==========================================
console.log("=== 12. STRING METHODS ===");
var message = "JavaScript is Easy";
// Length
console.log(message.length);
// Upper Case
console.log(message.toUpperCase());
// Lower Case
console.log(message.toLowerCase());
// Includes
console.log(message.includes("JavaScript"));
// Index Of
console.log(message.indexOf("Easy"));
// Slice
console.log(message.slice(0, 10));
// ==========================================
// 13. FUNCTION DECLARATION
// ==========================================
console.log("=== 13. FUNCTION DECLARATION ===");
function sayHello() {
    console.log("Hello Boshra");
}
sayHello();
// ==========================================
// 14. FUNCTION WITH PARAMETERS
// ==========================================
console.log("=== 14. FUNCTION WITH PARAMETERS ===");
function welcome(name) {
    console.log("Welcome " + name);
}
welcome("Boshra");
welcome("Ebraheem");
// ==========================================
// 15. FUNCTION WITH RETURN
// ==========================================
console.log("=== 15. FUNCTION WITH RETURN ===");
function addNumbers(num1, num2) {
    return num1 + num2;
}
var sum = addNumbers(10, 20);
console.log(sum);
// ==========================================
// 16. FUNCTION EXPRESSION
// ==========================================
console.log("=== 16. FUNCTION EXPRESSION ===");
var multiply = function (num1, num2) {
    return num1 * num2;
};
console.log(multiply(5, 4));
// ==========================================
// 17. OBJECT
// ==========================================
console.log("=== 17. OBJECT ===");
var developer = {
    name: "Boshra",
    age: 20,
    department: "Systems",
    university: "Al-Azhar"
};
console.log(developer);
// ==========================================
// 18. ACCESS OBJECT PROPERTIES
// ==========================================
console.log("=== 18. OBJECT PROPERTIES ===");
console.log(developer.name);
console.log(developer.age);
console.log(developer.department);
// ==========================================
// 19. MODIFY OBJECT PROPERTY
// =========================================
console.log("=== 19. MODIFY OBJECT ===");
developer.age = 21;
console.log(developer.age);
// ==========================================
// 20. ADD NEW OBJECT PROPERTY
// ==========================================
console.log("=== 20. ADD PROPERTY ===");
developer.language = "JavaScript";
console.log(developer);
// ==========================================
// 21. OBJECT METHOD
// ==========================================
console.log("=== 21. OBJECT METHOD ===");
var person = {
    name: "Boshra",
    sayHello: function () {
        console.log("Hello, my name is " + this.name);
    }
};
person.sayHello();
// ==========================================
// 22. HOISTING
// ==========================================
console.log("=== 22. HOISTING ===");
console.log(studentCity);
var studentCity = "Kafr El-Sheikh";
// //////////////////////////////////////////////////////