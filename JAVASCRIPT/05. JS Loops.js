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
