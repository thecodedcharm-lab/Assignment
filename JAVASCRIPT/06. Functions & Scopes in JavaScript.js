//=====================================================================================================================================================================
// Section 2: Function Declaration
//=====================================================================================================================================================================

// 1. Create a function declaration named displayCourse that returns "JavaScript Fundamentals". Call it and print the result.

function displayCourse(){
    return "JavaScript Fundamentals";
}console.log(displayCourse());

// 2 .Write a function declaration getStudentStatus that returns the string "Active Learner". Store the returned value in a variable and print it.

function getStudentStatus(){
    return "Active Learner";
}console.log(getStudentStatus());

// 3. Write a function declaration and call it before its definition. What happens and why? Explain briefly.

greet()
function greet(){
    console.log("Hello!");
}

//=====================================================================================================================================================================
// Section 3: Function Expression
//=====================================================================================================================================================================

// 1. Create a function expression named showMotto that returns "Code. Learn. Grow.". Call it and print the output.

const showMotto = function(){
    return "Code. Learn. Grow.";
}
console.log(showMotto());

// 2. Write a function expression getSemester that returns the number 3. Print the value returned by the function.

const getSemester = function(){
    return 3;
}
console.log(getSemester());

// 3. Create a function expression and try to call it before writing the expression. What error do you get and why?

console.log(welcomeMessage());
const welcomeMessage = function() {
    return "Welcome to the JavaScript session!";
};// ReferenceError:

//=====================================================================================================================================================================
// Section 4: Function Calling (Invocation)
//=====================================================================================================================================================================

// 1. Write a function declaration greetStudent that returns "All the best for your coding journey!". Call this function four times.

function greetStudent(){
    console.log ("All the best for your coding journey!");
}
greetStudent()
greetStudent()
greetStudent()
greetStudent()

// 2. Create a function expression todayFocus that returns "Focus on functions today". Store the result in a variable and print that variable.

const todayFocus = function(){
    return "Focus on functions today";
}
let xyz = todayFocus()
console.log(xyz);

// 3. Write one function declaration and one function expression. Call each of them twice and print all four results.

const Subject = function(){
    console.log("Mathematics")
}
Subject()
Subject()

function subject(){
    console.log("Python")
}
subject()
subject()

//=====================================================================================================================================================================
