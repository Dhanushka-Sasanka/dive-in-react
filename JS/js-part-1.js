 function myFunction(){
   console.log('this is normal function');
 }

myFunction();


const myFunctionArrow = () =>{ 
  console.log('this is Arrow function');
}

myFunctionArrow();

// const printMyName = (name) =>{
//   console.log(name);
// }

// printMyName('Dhanushka');


// const printMyName = name =>{
//   console.log(name);
// }

// printMyName('Dhanushka');

const printMultipleValue = (num1 , num2) =>{
  return num1 * num2;
}

const printMultipleValue1 = (num1 , num2) => num1 * num2;


let result = printMultipleValue1(3 , 4);

console.log(result);


// ===========================
 
//  Exports and imports (Modules)

const person = {
  name: 'Dhanushka'
}

export default person;

export const cleanMethod = () => { 
  console.log('clean method called.!');
}

export const baseURL = 'localhost:8080';


// in import these files
// default export

import person from './js-part-1.js';
import psn from './js-part-1.js';

// named export 
// choose the name by us
import { baseURL } from './js-part-1.js';
import { cleanMethod } from './js-part-1.js';

// using alias name

import { myNameForCleanMethod as cleanMethod } from './js-part-1.js';

// import all data in js-part-1 file 
import * as bundeled from './js-part-1';


