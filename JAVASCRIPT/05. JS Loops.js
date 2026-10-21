//  JavaScript Assignment: for Loop

// Q1. Counting Numbers 🔢

for (let i = 1; i <= 15; i++) {
  console.log(i);
}

// Q2. Even Numbers 🎯

for (let i = 2; i <= 40; i+=2) {
  console.log(i);
}

// Q3. Odd Numbers 🏃

for (let i = 1; i <= 35; i+=2) {
  console.log(i);
}

// Q4. Saving Money 💰

let savings = 0;
for (let i = 1; i <= 10; i++) {
  savings += i*10;
}
console.log("Total savings after 10 days:", "₹" + savings);

// Q5. Multiplication Table 📚

let num = 12;
for (let i =1 ; i<=10;i++){
    console.log(`${num} x ${i} = ${num * i}`)
}

// Q6. Daily Water Intake 💧

let glasses = 0
for (let i = 1 ; i <= 7 ; i++ ){
  glasses+=3
  console.log(`DAY ${i} : ${glasses} Glasses 💧`)
}

// Q7. Shopping Calculation 🛍️

let cost = 0
for ( let i = 1 ; i <= 10; i++ ){
  cost+= 15
  console.log(`${i} Chocolate🍫 = ₹${cost} `)
}

// Q8. Sum of Even Numbers ➕

let sum = 0
for (let i = 2; i <= 30; i+=2) {
  sum+=i
}
console.log(`Sum of even numbers: ${sum} 🧮`);

// Q9. Weekly Exercise 💪

let pushUp = 0
for (let i = 1 ; i <= 7 ; i++ ){
  pushUp+=5
  console.log(`DAY ${i} : ${pushUp} push-ups💪`)
}

// Q10. Movie Tickets 🎬

let Cost = 0
for ( let i = 1 ; i <= 10; i++ ){
  Cost+= 150
  console.log(`${i} people👩‍🦱 = ₹${Cost} `)
}

// Part B] For Loop (Additional advanced questions)

// 1.
// Given an array of temperatures [28, 32, 25, 40, 18, 35],
// use a for loop to count how many days were hotter than 30°C.
let temperature = [28, 32, 25, 40, 18, 35]
let count = 0
for (i=0;i<temperature.length;i++){
    if (temperature[i]>30){
        count+=1
    }
}
console.log(count)

// 2.
// Write a for loop that calculates the sum of all digits 
// of a given number (example: 4729 → 4+7+2+9 = 22).
let number = 4729;
let sum = 0;
for (; number > 0; number = Math.floor(number / 10)) {
    sum += number % 10;
}
console.log("Sum of digits:", sum);

// 3.
// Create a for loop that prints only the numbers between 1 
// and 100 that are divisible by both 3 and 5, but not by 7.
for (i=1;i<=100;i++){
    if(i%3==0 && i%5==0 && i%7!=0){
        console.log(i)
    }
}

// 4.
// Given the string "JavaScript", use a for loop to create a new 
// string that contains only the consonants (remove vowels).
let string="JavaScript";
for(i=0;i<string.length;i++){
    console.log(string[i])
}

// 5.
// Write a for loop that finds the largest number in an array
// of positive integers without using any sorting method.
let numbers = [12, 45, 23, 89, 34, 67];
let largest = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}
console.log("Largest number:", largest);

// 6.
// Use a for loop to check whether a given number is a perfect
// number (a number equal to the sum of its proper divisors). 
// Example: 28.
let Number = 28;
let Sum = 0;
for (let i = 1; i < Number; i++) {
    if (Number % i === 0) {
        Sum += i;
    }
}
if (Sum === Number) {
    console.log(Number, "is a perfect number");
} else {
    console.log(Number, "is not a perfect number");
}

// 7.
// Print the following series using a single for loop:
// 1 2 4 8 16 32 64 128
let num = 1;
for (let i = 1; i <= 8; i++) {
    console.log(num);
    num *= 2;
}

// 8.
// Write a for loop that prints the first 20 Fibonacci 
// numbers (starting with 0 and 1).
let first = 0;
let second = 1;
for (let i = 1; i <= 20; i++) {
    console.log(first);
    let next = first + second;
    first = second;
    second = next;
}

// 9.
// Given an array of student scores [45, 78, 90, 32, 56, 88],
// use a for loop to calculate the average and also count how 
// many students scored above the average.
let scores = [45, 78, 90, 32, 56, 88];
let SUM = 0;
for (let i = 0; i < scores.length; i++) {
    SUM += scores[i];
}
let average = SUM / scores.length;
let Count = 0;
for (let i = 0; i < scores.length; i++) {
    if (scores[i] > average) {
        Count++;
    }
}
console.log("Average score:", average);
console.log("Students scoring above average:", Count);

// 10.
// Write a for loop that converts a decimal number to its binary 
// representation (without using built-in methods like toString(2)).
let NUM = 13;
let binary = "";
for (; NUM > 0; NUM = Math.floor(number / 2)) {
    binary = (NUM % 2) + binary;
}
console.log("Binary:", binary);
