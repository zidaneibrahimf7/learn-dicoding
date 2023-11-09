



// Mengenal Object
const user = {
  firstName: "Luke",
  lastName: "Skywalker",
  age: 19,
  isJedi: true,
  "home world": "Taottoine"
}

console.log(`Halo, nama saya adalah ${user.firstName} ${user.lastName}`)
console.log(`Saya berumur ${user.age} tahun`)
// mengakses key yang memiliki spasi atau karakter
console.log(`Saya berasal dari ${user["home world"]}`);

// Memodifikasi sebuah object
user.age = "23";
user["lastName"] = "Shaw";
// menambahkan key "class"
user.class = "Computer Science"
// Menghapus property pada object
delete user.isJedi
console.log(user)
console.log('------------')

// Spread operator juga bisa melalui Object
const obj1 = {
  firstName: 'Obi-Wan',
  age: 30
}

const obj2 = {
  lastName: 'Kenobi',
  gender: 'M'
}

const newObj = { ...obj1, ...obj2 }
console.log(newObj)

// Array => tipe data yang dapat mengelompokan lebih dari satu nilai
let myArray = ["Cokelat", 42.5, 22, true, "Programming"];
console.log(myArray);
console.log(...myArray);
console.log(myArray[0]);
console.log(myArray[1]);
// menghitung total index pada array
console.log(`Panjang nilai myArray adalah ${myArray.length}`);

// Menambahkan data ke dalam array => Push
myArray.push('Bio');
console.log(myArray)
// Mengeluarkan data atau elemen terakhir dari array
myArray.pop();
console.log(myArray);
// mmemanipulasi data pada Array adalah shift() dan unshift()
myArray.shift();
myArray.unshift('Apple');
console.log(myArray);

delete myArray[1];
console.log(myArray);
// memakai 'delete' hanya menghapus berdasarkan satu index yg ditentukan, untuik menghapus elemen gunakan Splice
myArray.splice(2, 1);
console.log(myArray)

const months = ['January', 'march', 'April', 'May'];
console.log('before splice: ', months);

months.splice(1, 0, 'February');
console.log('after splice: ', months)
// Spread Operator
const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
console.log(...favorites)
const others = ["Cake", "Pie", "Donut"]
console.log(...others)
console.log(favorites, others)
const allFavorites = [...favorites, ...others]
console.log(allFavorites)
console.log('------------')


// Destructuring Array dan Object 

// Diberikan data JSON:
// [
//   {
//     "id": 14,
//     "title": "Belajar Fundamental Aplikasi Android",
//     "author": "Google ATP"
//   },
//   {
//     "id": 51,
//     "title": "Belajar Membuat Aplikasi Android untuk Pemula",
//     "author": "Google ATP"
//   },
//   {
//     "id": 123,
//     "title": "Belajar Dasar Pemrograman Web",
//     "author": "Dicoding Indonesia"
//   },
//   {
//     "id": 163,
//     "title": "Belajar Fundamental Front-End Web Development",
//     "author": "Dicoding Indonesia"
//   }
// ]

// Destructuring Object
const profile = {
  firstName: "John",
  lastName: 'Doe',
  age: 18,
}

let firstName = "Dimas";
let age = 20;

// Menginisialisasi nilai baru melalui destrcuturing object
({ firstName, age } = profile);
console.log(firstName);
console.log(age)

// const { firstName, lastName, age } = profile; //ini yg dimaksud Destructuring Object

// console.log(firstName, lastName, age);

// Destructuring Array
const menus = ["Ikan", "Sayur", "Nugget", "Sup Ayam"];

const [firstFood, secondFood, thirdFood, fourthFood] = menus; //Ini destructuring array

console.log(firstFood)
console.log(secondFood)
console.log(thirdFood)
console.log(fourthFood)
// Array Destructuring dapat digunakan untuk menukar nilai antara dua variabel
let a = 1;
let b = 2;
let temp

console.log('Sebelum Swap: ')
console.log("Nilai a: " + a);
console.log("nilai b: " + b);

temp = a;
a = b;
b = temp;
console.log('Setelah swap: ');
console.log("Nilai a: " + a);
console.log("nilai b: " + b);
console.log('------------')

// Konsep Mapping => tipe data yang menyimpan koleksi data dg format key-value

const myMap = new Map([
  ['1', 'a String Key'],
  [1, 'a number key'],
  [true, true]
]);

console.log(myMap)

const capital = new Map([
  ['Jakarta', 'Indonesia'],
  ['London', 'England'],
  ['Tokyo', 'Japan']
]);

console.log(capital.size);
console.log(capital.get('London'));
capital.set('New Delhi', "India")
console.log(capital.size)
console.log(capital.get('New Delhi'))

// Set => memberikan output yg valuenya sama, akan dibuang
const numberSet = new Set([1, 4, 6, 4, 1, 6, 4, 1]);

//menambah nilai dari Set bisa gunakan add
numberSet.add(5).add(10)

// menghaous nilai set bisa gunakan Delete
numberSet.delete(4)
console.log(numberSet);