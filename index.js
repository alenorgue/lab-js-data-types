/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string


let tongueTwister = `${s1} ${s2} ${s3} ${s4} ${s5}`

console.log('Iteracion 1.1: ', tongueTwister);
/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
let part1Modified = part1.slice(0, -1) + part1.slice(-1).toUpperCase();
let part2Modified = part2.slice(0, -1) + part2.slice(-1).toUpperCase();

let result = `${part1Modified}${part2Modified}`


// Print the cameLtaiL-formatted string

console.log('Iteracion 1.2: ', result);


/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)

let tipAmount = billTotal * 0.15


// Print out the tipAmount
console.log('Iteracion 2.1: ', tipAmount);



/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
let randomNumber = Math.floor(Math.random() * 10) + 1;

// Print the generated random number

console.log('Iteracion 2.2: ', randomNumber);

/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;

const expression2 = a || b;

const expression3 = !a && b;

const expression4 = !(a && b);

const expression5 = !a || !b;

const expression6 = !(a || b);

const expression7 = a && a;

// 1  false , 2 true , 3 false,  4 true, 5 true, 6 false, 7 true
console.log('Iteracion 3.1.1: ', expression1);
console.log('Iteracion 3.1.2: ', expression2);
console.log('Iteracion 3.1.3: ', expression3);
console.log('Iteracion 3.1.4: ', expression4);
console.log('Iteracion 3.1.5: ', expression5);
console.log('Iteracion 3.1.6: ', expression6);
console.log('Iteracion 3.1.7: ', expression7);

// Once you are done writing down your answers, print out each expression and compare it to your answer