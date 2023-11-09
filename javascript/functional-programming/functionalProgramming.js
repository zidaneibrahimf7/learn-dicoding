/* functional Programming */

// Deklaratif Function
const names = ['Harry', 'Ron', 'Jeff', 'Thomas']

const newNames = names.map((name) => `My name is ${name}`);

console.log(newNames)

const numbers = [28, 31, 53, 99];

const newNumbers = numbers.map((number) => `Ini adalah nomornya -> ${number}`)
console.log(newNumbers)

console.log('----')

/* Pure Function  */

let PI = 3.14;

const hitungLuasLingkaran = (jariJari) => {
  return PI * (jariJari * jariJari)
}

console.log(hitungLuasLingkaran(7))

PI = 5; //ga sengaja PI berubah
console.log(hitungLuasLingkaran(6))
console.log('----')
// Kode diatas merupakan Impure Function karena bila nilai Pi nya berubah, maka nilai hitungLuasLingkaran pun akan berubah
// agar menjadi nilainya konstan, pastikan bahwa nilai PI masuk ke dalam function

// Pure Function => tidak berubah nilainya walaupun berada diluar fungsinya

const createPerson = (age, person) => {
  // person.age
  // return person
  // membangun destructuring object untuk membuat pure function
  return {...person, age }
}

const person = {
  name: 'Zidane'
}
const newPerson = createPerson(23, person)

console.log({
  person,
  newPerson
})
console.log('--------')

// Immutability => sebuah objek tidak boleh diubah setelah objek tersebit dibuat

const user = {
  firstName: 'Harry',
  lastName: 'protter'
  
}

// const createUserLastName = (lastName, user) => {
//   user.lastName = newLastName
// }

// createUserLastName('Potter', user)
// console.log(user)

const createNewUserLastName = (newLastName, user) => {
  // lakukan perubahan pada nilai return dalam objek baru
  return {...user, lastName: newLastName}
}

const newUser = createNewUserLastName('Potter', user)

console.log(`Sebelum diganti nilainya begini : ${user.lastName}`) 
console.log(`Ini setelah dirubah : ${newUser.lastName}`) 

// memang diatas tergantikan, tapi kalo sesuai dengan paradigma Functional Programming, terapkan perubahan bukan dengan mengubah nilai objek secara langsung

// Recursive => teknik sebuah function yang memanggil dirinya sendiri; 

// mengubah fungsi countDown untuk menggunakan iterasi seperti for, foreach, while
// const countDown = start => {
//   do {
//     console.log(start);
//     start -= 1;
//   }
//   while (start > 0)
// }

// countDown(10)

const countDown = start => {
  console.log(start);
  if (start > 0) countDown(start-1)
}

countDown(10)