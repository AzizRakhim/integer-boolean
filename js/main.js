// EXERCISE 1

/*
let a = +prompt("a: ");
let b = +prompt("b: ");

let c = Math.sqrt(Math.sqrt(a ** 3 - b ** 3 + (a ** 3 + b ** 3)));
console.log(c);
*/

// EXERCISE 2

/*
let a = +prompt("a: ");
let b = +prompt("a: ");

let c = (Math.sqrt(a) * (1/6) + Math.sqrt(b) * (1/3)) ** 2;

console.log(c);
*/

// EXERCISE 3

/*
// let a, b, c, d, e;
// a = +prompt("a: ");

// b = Math.floor(a / 100);
// a = Math.floor(a % 100); 
// c = Math.floor(a / 10);
// d = Math.floor(a % 10);

// console.log(Math.floor(e = d * 100 + c * 10 + b));
*/

// EXERCISE 4

/*
let a, b, c, d;

a = +prompt("a: ");

b = Math.floor(a / 100);
a = Math.floor(a % 100);
c = Math.floor(a / 10);
d = Math.floor(a % 10);

console.log(Math.floor(c * 100 + b * 10 + d));
*/

// EXERCISE 5

/*
let a = +prompt("a: ");
let b = +prompt("b: ");

let c = (9 * a**2 * b) - (27 * a**2 * b**2) + (15 * b**2);

console.log(c.toFixed(2));
*/

// EXERCISE 6

/*
let r, n, a, b, e;

r = +prompt("r: ");
n = +prompt("n: ");
a = +prompt("a: ");
b = +prompt("b: ");

e = (1 + r / 100)**n / Math.sqrt(a**2 + b**2);

console.log(e);
*/

// EXERCISE 7

/*
let x1, y1, x2, y2, a;

x1 = +prompt("x1: ");
y1 = +prompt("y1: ");
x2 = +prompt("x2: ");
y2 = +prompt("y2: ");

a = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2);

console.log(a.toFixed(2));
*/

// EXERCISE 8

/*
let x1, y1, x2, y2, x3, y3, a, b, c, p, s;
x1 = +prompt("x1: ");
y1 = +prompt("y1: ");
x2 = +prompt("x2: ");
y2 = +prompt("y2: ");
x3 = +prompt("x3: ");
y3 = +prompt("y3: ");

a = Math.sqrt((x1 - x2)**2 + (y1 - y2)**2);
b = Math.sqrt((x1 - x3)**2 + (y1 - y3)**2);
c = Math.sqrt((x2 - x3)**2 + (y2 - y3)**2);

p = (a + b + c) / 2;
s = Math.sqrt(p * (p - a) * (p - b) * (p - c));

console.log(p.toFixed(2) * 2, s);
*/

// EXERCISE 9

/*
let a, x;

a = +prompt("a: ");

x = Math.sin(a);

console.log(x);
*/


// EXERCISE 10

/*
let a, x;

a = +prompt("a: ");

x = Math.cos(a);

console.log(x);
*/

// SPIN-OFF EXERCISE 1

/*
let a = +prompt("Enter the 1st number: ");
let b = +prompt("Enter the 2nd number: ");

console.log(a == b ? `${a} and ${b} are equal` : a > b ? `${a} is bigger than ${b}` : `${b} is bigger than ${a}`);
*/