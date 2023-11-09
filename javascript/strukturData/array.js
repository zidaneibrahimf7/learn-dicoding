/* Array */

const days = ['Minggu', "Senin", "Selasa", "Rabu"];
console.log(days)
console.log(days[0])
days[4] = "Kamis";
console.log(days)
days.push('Jumat');
console.log(days)

console.log(typeof days);
// untuk mengubah tipe data object di dalam array dari tipe object menjadi array, gunakan Array.isArray
console.log(Array.isArray(days)) //output : true

// perulangan menggunakan array
// menggunakan forEach
days.forEach((day) => {
  console.log(day)
})

// menghitung banyaknya data dalam array
console.log(days.length)
console.log('-----')

// mengakses array di dalam array
const dewa19 = ['Ahmad', 'Dhani', 'Ari', "Lasso", ["Once", "Mekel"]]
console.log(dewa19)
console.log(dewa19[4][0])
