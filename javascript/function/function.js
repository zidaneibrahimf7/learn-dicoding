/* Function */

// membuat Fungsi
function greeting() {
  console.log('Good Morning');
}
// Memanggil Fungsi
greeting();
console.log('----')

// Membuat Function saat melakukan Event
// 1. Secara terprogramnya
// function myFunc() { /* ... */}
// myFunc()

// // 2. Event Terjadi
// document.addEventListener('click', function() {})

// // 3. Terpanggil otomatis
// (function() {
//   console.log*'Function terpanggil otomatis'
// })();


function multiply(a, b) {
  return a * b
}
// Deklarasi nilai di dalam fungsi
console.log(multiply(2, 3))
console.log('----')

// Membuat ekspression dan logic di dalam function
function ucapan(nama, bahasa) {
  if (bahasa === 'English') {
    console.log(`Good Morning ${nama}`)
  } else if (bahasa === "French") {
    console.log(`Bonjour ${nama}`)
  } else {
    console.log(`Selamat Pagi ${nama}`)
  }
}

ucapan("Harry", "French") //output : Bounjour Harry
let pesanUcapan = ucapan("Harry", "English")
console.log(pesanUcapan)

// function Parameters
const user = {
  id: 24,
  displayName: 'Michael',
  fullName: "Michael Benedict"
}

// Memanggil parameter di dalam variabel object dengan emmanggil key nya
function introduction({ displayName, fullName }) { //dibangun jd object 
  console.log(`${displayName} is ${fullName}`)
}

introduction(user) //memanggil function dan get variabel key nya untuk mendapatkan value di dalam variabel object tersebut;

// Default parameters
function exponentsFormula(baseNumber, exponent = 2) { //diberikan nilai default exponent = 2
  const result = baseNumber ** exponent
  console.log(`${baseNumber}^${exponent} = ${result}`)
}

exponentsFormula(2, 2)

// Rest parameters => memanggil 
function sum(...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result
}

console.log(sum(1, 2, 3, 4, 5));

//Arrow function
const sayHello = (greet) => {
  console.log(`${greet}`);
}

sayHello('Selamat Datang');

const perkalian = (a, b) => {
  return a * b;
}

console.log(perkalian(2, 3))

// closure  => fungsi yang bersarang di dalam fungsi

function init() {
  const name = 'Obi Wan';

  function greet() {
    console.log(`Hallo, ${name}`);
  }

  greet();
}

init()

//menggunakan closure membantu kita untuk membuat seolah2 itu private, krn di dalam js tidak seperti java yg bisa kita buat public dan private

// contoh
let counter = 0;

const add = () => {
  return ++counter;
}

console.log(add())
console.log(add())
counter = 23;
console.log(add()) //ini secara gak langsung akan selalu mengakses function add()

// biar jadi private gimana?

const tambah = () => {
  let counter = 0;
  return () => {
    return ++counter;
  }
}

const addCounter = tambah();

console.log(addCounter())
console.log(addCounter())
