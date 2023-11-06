console.log('Hello World!')

// Expression dan Statement
let yourName = 'Sky Walker';
console.log(yourName)
// let fullName = let yourName;
let fullName = (yourName + " Luke")
// let fullName = "SkyWalker" + "Luke"
console.log(fullName)
console.log('------------')
// Typeof => Tipe data
let x
console.log(typeof (x))
// Number
let a = 10;
console.log(a);
console.log(typeof (a));
let b = 17.25
console.log(b)
console.log(typeof (b))
console.log('------------')
// Operator

// Assignment Operator
let c = 10;
let d = 5;

c += d;

console.log(c)
console.log('------------')
// Bilangan operator
// x += y; // artinya -> x = x + y;
// x -= y; // artinya -> x = x - y;
// x *= y; // artinya -> x = x * y;
// x /= y; // artinya -> x = x / y;
// x %= y; // artinya -> x = x % y;

// Comparison Operator
let e = 10;
let f = 12;

console.log(e < f)
console.log(f < e)
console.log('------------')
const aString = '10';
const aNumber = 10

console.log(aString == aNumber) // true, karena nilainya sama-sama 10
console.log(aString === aNumber) // false, karena walaupun nilainya sama, tetapi tipe datanya berbeda
console.log('------------')
// Logical Operator
let g = 10;
let h = 12;

// And Operator
console.log(a < 15 && b > 10);
console.log(a > 15 && b > 10);
console.log('------------')

// Ternary Operator => ... ? ... : ... ()
console.log(true ? 'Hai' : 'Hello')

console.log('------------')
// If-else statement
const isRaining = true;
console.log('Persaipan sebelum berangkat kegiatan')
if (isRaining) {
  console.log('Hari ini hujan. Bawa Payung!')
}
console.log('Berangkat kegiatan')
console.log('------------')

// Switch Case Statement
let language = 'French';
let greeting = null;

switch (language) {
  case "English":
    greeting = "Good Morning";
    break;
  case "French":
    greeting = "Bonjour!";
    break;
  default:
    greeting = "Selamat Pagi!"
    break;
}

console.log(greeting)
console.log('------------')

// For Loops
console.log(0)
console.log(1)
console.log(2)
console.log(3)
console.log(4)
// gak efektif. jadi pake for loop atau map(nanti dibahas ttg map)
for (let i = 0; i < 5; i++) {
  console.log(i)
}

// Cara lain melakukan looping juga menggunakan For..Of
let myArray = ["Luke", "Han", "Chewbacca", "Leia"]

for (const arrayItem of myArray) {
  console.log(`My name is ${arrayItem}.`)
}

// Bisa menggunakan While-do While

// While
let j = 1;
while (j <= 10) {
  console.log(j);
  j++;
}

// do-while
let k = 11;

do {
  console.log(k);
  k++;
}



while (k <= 20)
console.log('------------')