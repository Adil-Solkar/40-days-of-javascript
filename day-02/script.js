// ✅ Task 1: Declare variables for a person’s name, age, isStudent status, and favorite programming language.

const firstName = 'Adil'
let age = 28
let isStudent = false
let favProgrammingLanguage = 'JS'

// ✅ Task 2: Print the values to the console.
console.log(firstName, age, isStudent, favProgrammingLanguage)

// ✅ Task 3: Try reassigning values to let and const variables and observe errors.

favProgrammingLanguage = 'python' // output-> python
// firstName = 'Bob' 
// output -> Uncaught TypeError: Assignment to constant variable.

// ✅ Task 4: Create an object and an array, assign them to new variables, modify, and observe changes.

const person = {
  name: "Sam",
  age: 25,
  city: "New York"
};
const fruits = ["Apple", "Banana", "Orange", "Mango"];

// assigning object and array to new variable
const anotherPerson = person
const moreFruits = fruits

// modifying the values
person.city = 'Mumbai'
fruits[0] = 'Pineapple'

// as both the object and array share the same refrence in the memory the value for both changes
console.log(person)
console.log(anotherPerson)
console.log(fruits)
console.log(moreFruits)