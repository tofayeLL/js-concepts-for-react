
let myVar = 7;
// check any value truthy check shortcut way
if (myVar) {
    myVar = myVar * 100;

}
else {
    myVar = 0;

}


let myMoney = 50;
// check any value falsy shortcut way
if (!myMoney) {

}

// ---------------------------------------------------//
// let money = 100;
/* let food;
if (money > 100) {
    food = 'biriyani';
}
else {
    food = 'cha biscuit';
} */

//  shortcut this if else code we can use ternary
let money = 102;
let food1 = (money > 100) ? 'biriyani' : 'cha';
console.log(food1);

let food2 = (money > 90 && money < 150) ? 'pasta' : 'biscuit';
console.log(food2);



// --------------------------------------------------------//
// shortcut another way any number convert to string
let num = 52;
 let numstr = num + '';
//  console.log(num);
//  console.log(numstr);


//  shortcut another way anu string convert to number

let input = '240';
let  inputNumber = +input;
// console.log(input);
// console.log(inputNumber);


// ----------------------------------------------------------//
// another shortcut ternary about for true and false value uses and function call depends on value 

const isActive = true;

const showUser = () => console.log('display user');
const hideUser = () => console.log('hide user');

// isActive ? showUser() : hideUser();

// another shortcut by use AND operator 
isActive && showUser();

// another shortcut by use OR operator 

isActive || hideUser();



