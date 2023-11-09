// Reusable Function


// Array Map
const nameArray = ['Harry', 'Ron', 'Jeff', "Thomas"]

nameArray.map((name) => {
  return `${name}`
})

console.log(nameArray)
console.log('--------')

// Array Filter => callback function yang digunakan mengembalikan boolean

const truthyArray = [1, '', 0, 'Harry', 14]

truthyArray.filter((item) => Boolean(item))

console.log(truthyArray)
console.log('--------')

// bisa juga untuk menyaring ararray dari objek siswa yang layak mendapatkan beasiswa
const students = [
  {
    name: 'Harry',
    score: 55,
  },
  {
    name: 'James',
    score: 88,
  },
  {
    name: 'Ron',
    score: 90,
  },
];

// const scholarshipStudents = students.mapfilter((student) => student.score >= 60)
// console.log(scholarshipStudents)

// biar di cetak semua nama nya, pake map dulu
const scholarshipStudents = students.filter((student) => student.score >= 60).map((student) => student.name)
console.log(scholarshipStudents)
console.log('--------')

// Array Find => mencari apakah di dalam deretan nilai terdapat nilai yang sesuai dengan kriteria yang ada
const findJames = students.find((student) => student.name === 'James')
console.log(findJames)
console.log('--------')

// Array Sort
const months = ['march', 'jan', 'feb', 'dec']
months.sort()
console.log(months)
console.log('--------')

const array1 = [1, 30, 4, 1000, 101, 121];
array1.sort();
console.log(array1);
// output: [ 1, 1000, 101, 121, 30, 4 ] (loh kenapa ga urut?)
// agar urut, maka buat compare function sendrii

const compareNumber = (a, b) => {
  return a - b
}

const sortingNumber = array1.sort(compareNumber)
console.log(`Ini angka setelah di sort compare function : ${sortingNumber}`)
console.log('--------')
// Array forEach (memanggil fungsi callback pada setiap iterasi index array)
// cara imperative
const peoples = ['Harry', 'Ron', 'Jeff', 'Thomas'];

for(let i = 0; i < peoples.length; i++) {
  console.log(`Hello ${peoples[i]}!`)
}

// cara deklarative
peoples.forEach((people) => {
  return `Hello ${people}!`
})