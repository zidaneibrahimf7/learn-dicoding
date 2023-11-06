function greeting() {
  console.log('Good Morning');
}

greeting();

function multiply(a, b) {
  return a * b
}

console.log(multiply(2, 3))

function ucapan(nama, bahasa) {
  if (bahasa === 'English') {
    console.log(`Good Morning ${nama}`)
  } else if (bahasa === "French") {
    console.log(`Bonjour ${nama}`)
  } else {
    console.log(`Selamat Pagi ${nama}`)
  }
}

ucapan("Harry", "French")
let pesanUcapan = ucapan("Harry", "English")
console.log(pesanUcapan)

// function Parameters

const user = {
  id: 24,
  displayName: 'Michael',
  fullName: "Michael Benedict"
}

function introduction({ displayName, fullName }) { //dibangun jd object 
  console.log(`${displayName} is ${fullName}`)
}

introduction(user)

// Default parameters
function exponentsFormula(baseNumber, exponent = 2) { //diberikan nilai default exponent = 2
  const result = baseNumber ** exponent
  console.log(`${baseNumber}^${exponent} = ${result}`)
}

exponentsFormula(2, 2)

// Rest parameters
function sum(...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result
}

console.log(sum(1, 2, 3, 4, 5));