console.log("Operators and Expression in Javascript");

/*  1. Odd or Even?
    - Take a number and find if the number is an odd or even number.
    - Print the number and result in the console.
*/

const number = 456;

if (number % 2 === 0) {
  console.log(`${number} is an even number`);
} else {
  console.log(`${number} is an odd number`);
}

/*  2.Do you have a Driving License?
    Let's check if you are eligible to get a driving license. The eligibility to get a driving licence is 18 years.

    -Manage `age` as a variable.
    -Check if the age is elligible for a driving license and print it on the console accordingly.
*/

let age = 18;

if (age >= 18) {
  console.log(
    `You are ${age} years old, So you are eligible for a driving license`,
  );
} else {
  console.log(
    `You are ${age} years old, So you not are eligible for a driving license`,
  );
}

/* 3. Calculate CTC with a Bonus
    Let's calculate how much you earn from your office.

    - You get 12,300 rupees as your monthly salary.
    - You get a 20% bonus on your annual salary.
    - How much money do you make per annum as a CTC?
*/

const monthlySalary = 12300;
const annualSalary = monthlySalary * 12;
const bonus = annualSalary * (20 / 100);
const annualCTC = annualSalary + bonus;

console.log(`The new annual CTC is ${annualCTC}`);
console.log(`Montly salary after bonus is ${monthlySalary + bonus / 12}`);

/* 4. Write a program for the Traffic Light Simulation.
    Red Light... Green Light... Let's Play!

    - Create a `color` variable.
    - Based on the color variable's value print in the console if a traveller needs to STOP or GO.
    The Red color is for STOP and the Green color is for GO.
*/

const color = "Red";

if (color === "Green") {
  console.log("GO!");
} else if (color === "Red") {
  console.log("STOP!");
} else {
  console.log("Please enter a valid color");
}

/* 5. Create an Electricity Bill Calculator
    Let's calculate how much you pay for electricity bills per month and annually.

    - Create a `units` variable. Based on this value you will calculate the total electricity bill for a month.
    - If each day you consume the `units` and each unit cost 150 rupees, how much will you be charged per month?
    - If there is a 20% discount on the annual payment, how much will you be charged for an annual payment?
*/

const units = 2;
const unitCostPerDay = 150;
const costOfElectricityPerDay = units * unitCostPerDay;
const monthlyBill = costOfElectricityPerDay * 30;
const discontOnAnnualPayment = 20;
const annuallBill = monthlyBill * 12;
const anuallBillAfterDiscount =
  annuallBill - annuallBill * (discontOnAnnualPayment / 100);

console.log(`Your montly electricity bill is Rs ${monthlyBill}`);
console.log(
  `After 20% of discount your annual electricity bill is Rs ${anuallBillAfterDiscount}`,
);

/* 6. Leap Year Checker
    Is 2025 a Leap Year?

    - Take `year` as input.
    - Use the arithmetic operator and ternary operator to print if a year is a leap year or not.
*/

const year = 2000;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(`${year} is a leap year`);
} else {
  console.log(`${year} is not a leap year`);
}

/* 7. Max of Three Numbers
    Find the max number from the lot.

    - Take three numbers and assign them to variables p, q, and r.
    - Now find the maximum of these three numbers using the comparison operators.
 */

const num1 = 15;
const num2 = 25;
const num3 = 5;

if (num1 > num2 && num1 > num3) {
  console.log(`${num1} is greater`);
} else if (num2 > num1 && num2 && num3) {
  console.log(`${num2} is greater`);
} else if (num3 > num1 && num3 > num2) {
  console.log(`${num3} is greater`);
} else {
  console.log(
    "No single greater number as atlest 2 numbers are equal or all numbers are equal",
  );
}

/* 8. Bitwise Doubling
    A tricky one for you

    - Create a variable `count` and assign  a value, say, 5.
    - Now use the Bitwise shift operator to make the number double.
    - Print it on the console.
*/

const count = 5;
const doubledCount = count << 1;

console.log(doubledCount);
