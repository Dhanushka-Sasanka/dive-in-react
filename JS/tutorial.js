
// Objects & Classes 

const user = {
    //key : "value"
    name: "Dhanushka Sasanka",
    age: 28,
    designation: "SSE",

    greet() {
        console.log("Hello", this.name + " !"); // this means inside the instance 
    }
};

console.log(user);
// accessing key 

console.log(user.name);
// user.name = "Paranavithana";
user.greet();

// creating blue print of a User

class User {

    //constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log("greet() inside User class.");
    }
}

const user2 = new User("Asanka", 27);
console.log(user2);

user2.greet();


// Arrays

const hobbies = ["Sports", "Cooking", "Reading"];

console.log(hobbies[1]);

hobbies.push("Coding")

console.log(hobbies);

// const index = hobbies.findIndex((item)=>{
//     return item === 'Cooking'
// })

const index = hobbies.findIndex((item) => item === 'Cooking');

console.log(index);

// Transform array data using map()
const newHobbies = hobbies.map((item) => item + "..!");

console.log(hobbies);
console.log(newHobbies)

// convert array to object 
const convertHobbies = hobbies.map((item) => ({ text: item }));
console.log(convertHobbies)

// Array Destructure

const userNameData = ["Romain", "Rainge"];
const fName = userNameData[0];
const lName = userNameData[1];

console.log(fName);
console.log(lName);

const [firstName, lastName] = ["Jhon", "Cena"];
console.log(firstName);
console.log(lastName);

// Object Destructure

const customer = {
    id: 524,
    name: "Somapala"
}

const customerId = customer.id;
const customerName = customer.name;

console.log(customerId);
console.log(customerName);

// =======destructure
// when Object Destructuring variable name should be same object key 
// but we can put a alias for key like userName in below

const { id, name: userName } = {
    id: 8604,
    name: "CM Punk"
}

console.log(id);
// console.log(name);
console.log(userName);

// Spread  Operator

const commers = ["Danapala", "Gunapala"];
const newCommers = ["Sumanasiri", "Thilak"];

// const mergeCommers = [commers,newCommers]
const mergeCommers = [...commers,...newCommers]

console.log(mergeCommers);

const extendCustomer = {
    isCreditCustomer : true,
    ...customer
};
console.log(extendCustomer);