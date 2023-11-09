/* Map */

// menyimpan nilai pada map dengan method set()
// const myMap = new Map();
// myMap.set(key, value);
// myMap.set(key, value);

// menyimpan nilai pada map secara langsung
// const myMap = new Map([
//   [key, value],
//   [key, value],
// ])

// Tipe data Map adalah Object


// Membuat Map
const StockofFruits = new Map([
  ['Melon', 2],
  ['Anggur', 3],
])

// Akses Map Function
console.log(StockofFruits)
console.log(StockofFruits.get('Melon'))
console.log('------')
// untuk mengubah atau menambah value pada key, bisa gunakan Set
StockofFruits.set('Melon', 10)
console.log(StockofFruits)
console.log(StockofFruits.get('Melon'))
StockofFruits.set('Nanas', 7)
console.log(StockofFruits)
console.log(StockofFruits.get('Nanas'))
console.log('------')
// Map.keys() => untuk mengembalikan seluruh key dalam bentuk MapIterator
console.log(StockofFruits.keys()) 
// Map.values() => mengembalikan Values dalam bentuk mapIterator
console.log(StockofFruits.values())
// Perulangan dapat dilakukan dengan menggunakan For.. Of