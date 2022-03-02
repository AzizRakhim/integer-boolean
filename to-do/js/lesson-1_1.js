let userName = "Ali";

console.log(userName);

let n = 15;
let a = 10;
let b = n + a;
a = 15;

console.log(b, a);

console.log(n > 0);
console.log(n < 0);

n = prompt("Yangi son kiriting");

console.log(n < 0);

a = n + 20;

console.log(a);

n = Number(prompt("Yangi son kiriting"));

a = n + 20;

console.log(a);

n = +prompt("Yangi son kiriting");

a = n + 20;

console.log(a);

n = -prompt("Yangi son kiriting", 15);

a = n + 20;

console.log(a);

a = confirm("Siz 18 yoshdan kattamisiz?");

if (a){
  alert("Marhamat xush kelibsiz");
} else {
  alert("Siz chopildingiz");
}

console.log(a);

a = 0;

console.log(a >= 0);

console.log(typeof a);
console.log(typeof userName);

a = 2;
b = 3;

console.log(6 ** 2);
console.log(a ** b);

console.log(196 ** 0.5);

a = 196;
b = 3;

console.log(a ** (1 / 2));

a = 5;
a = a + 1;
a++;
a--;

console.log(a);
console.log(a++);
console.log(++a);

b = 4;
a = 5 + b++;
console.log(b);
console.log(a);
console.log(a);
console.log(a);

a = 5 + b++ + b;
console.log(a);

a = 5;
b = 4;
console.log(++a + b++ + ++b + a++);

a = 3;
b = 2;
c = 1;
console.log(c++ + ++c + b++ - --a + a++);

a = a + b;
a += b;
a -= 4;
a *= 4 + 3; // a = a * (4 + 3) => 14
a **= 4;

console.log(a);

a = 15;
const userNameTwo = "Javohir";

userNameTwo = "Ahmad";

console.log(userNameTwo);