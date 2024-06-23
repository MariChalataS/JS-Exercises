/* ობიექტები 
const flower = {
    name: "Vardi",
    color: "Witeli",
    forsale: function () {
        return this.name + " " + this.color;
    }
}
console.log(flower.forsale) 
*/



/* Array 
const names = [
    'მარი',
    'ნათია',
    {
        color1: 'მწვანე',
        color2: 'წითელი'
    }
]
console.log(`${names[1]}-ს უყვარს ${names[2].color2} ფერი`)

// ელემენტის რაოდენობის გაგება console.log(names.lengh)
// ცვლადი არის თუ არა მასივი console.log(Array.isArray(names))
// ცვლადი არის თუ არა მასივი console.log(names instanceof Array)
*/



/* ფუნქცია
function greet(name) {
    console.log(`Hello ${name}`)
}
greet(`World`); */



/* ანონიმური ფუნქცია 
// 1)
(function () {
    console.log(`Hello World`)
})();
// 2)
const func = function () {
    console.log(`Hello World`)
};
func();
*/ 



/* Arrow ფუნქცია 
function sum (a) {
    return a + 10
}
console.log(sum(10))  

const sum = a => a + 10;
console.log(sum(10)) 

const sum = (a, b) => a + b
console.log(sum(10, 10)) 
*/



/* პირობითი ოპერატორები, if() else if() else 
const number = x => {
    if (x > 10) {
       console.log(true)
    }
    else if (x = 10) {
       console.log(true)
    }
    else {
        console.log(false)
    }
}
number(15);
*/



/* switch ოპერატორი 
const flowers = flower => {
    switch(flower) {
        case `ვარდი`:
            console.log(`${flower} არის წითელი`)
            break;
        case `ია`:
            console.log(`${flower} არის იისფერი`)
            break;
        case `გვირილა`:
            console.log(`${flower} არის თეთრი`)
            break;
        default:
            console.log(`გთხოვთ აირჩიოთ სხვა ყვავილი`)
    }
}
flowers(`გვირილა`); 
*/



/* break და continue ოპერატორები
const names = ['Mary', 'Mariami', 'Marikuna'];
for ( let name of names ) {
    if ( name == 'Mariami' ) break;
    console.log(name)
} 

const names = ['Mary', 'Mariami', 'Marikuna'];
for ( let name of names ) {
    if ( name == 'Mariami' ) continue;
    console.log(name)
} 
*/



/* for ციკლი (loop) 
const names = ['Mary', 'Mariami', 'Marikuna'];
for ( let i = 0; i < names.length ; i++ ) {
    console.log(names[i])
}
*/



/* for...in ციკლი // ობიექტებისთვის
const person = {
    name: 'Mary',
    surname: 'Chalatashvili',
    age: 22
};
for ( const prop in person ) {
    console.log(`${[prop]}: ${person[prop]}`)
}
*/



/* for...of ციკლი // მასივებისთვის
const names = ['Mary', 'Mariami', 'Marikuna'];
for ( const name of names ) {
    console.log(name)
}
*/



/* while და do while ციკლი
const names = ['Mary', 'Mariami', 'Marikuna'];
let i = 0;
while ( 0 < names.length ) {
    console.log(names[i]);
    i++
}

let i = 10;
do {
    console.log(`hi`)
}
while ( i < 5 ) ;
*/



/* foreach ციკლი 
const names = ['Mary', 'Mariami', 'Marikuna'];

names.forEach(( name, index, Array) => {
    console.log(`სახელი ${name} , ინდექსი - ${index}`)
});

names.forEach( name => console.log(name) )
*/


/* მეთოდი vs ფუნქცია 
const user = {
    firstName: `Mari`,
    lastName: `Chalata`,
    fullName() {
        return this.firstName + " " +this.lastName
    }
}
console.log(user.fullName()); 

function fullName(firstName, lastName) {
    return firstName + " " +lastName
}
console.log(fullName(`Mari`, `Chalata`))
*/



/* Set მეთოდი 
const names = new Set(['Mary', 'Mariami', 'Marikuna'])

names.add(`Mariko`)
names.delete(`Marikuna`)

console.log(names.size)
console.log(names.has(`Mary`))

names.forEach( name => console.log(name) )
*/



/* სახელების შეთანხმებები 
// Camel case
// Variables
const firstName = 'Mary'
// Objects
const userData = {
    firstName: 'Mary',
    lastName: 'Chalata'
}
// Function
function getFullName() {
    return 10 + 5
}
console.log(getFullName())
// Boolean
const isRed = true;

// Pascal case 
// Class
class MakeUser {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
const user = new MakeUser('Mary', 'Chalata')
// Uppercase
var DAYS = 7;
*/



/* კლასები 
class Car {
    constructor (brand, model, color) {
       this.brand = brand;
       this.model = model;
       this.color = color;
    }
}
const myCar = new Car('BMW', 'Mercedes', 'Passat');
console.log(myCar) 
//          II
class User {
    constructor (firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

class Student extends User {
    constructor (firstName , lastName , grade) {
        super(firstName, lastName);
        this.grade = grade;
    }
}

const userN = new User('Mary', 'Chalatashvili');
const studentN = new Student('Mary', 'Chalatashvili', 99)

console.log(userN)
console.log(studentN)
*/



/* ობიექტის დესტრუქტურიზაცია 
const user = {
   firstName: `Mary`,
   lastName: `Chalatashvili`,
   age: 22
}
const { firstName, age } = user
console.log(firstName, age)

const array = [1, 2, 3, 4, 5, 6, 7]
const [a, b, ...rest] = array
console.log(rest)
*/

/* const a = callback => {
    setTimeout(() => {
      console.log(`First`),
      callback()
    }, 3000)
}

const b = () => {
    console.log(`Second`)
}

a(b)
*/