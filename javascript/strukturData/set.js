/* Set */
const set = new Set(
  ['Apel', 'Jeruk', 'Anggur']
)

// Menambahkan data di dalam Set
set.add('Stroberi');
console.log(set)
// Di dalam set tidak bisa menambahkan data yang valuenya sama
set.add('Anggur');
console.log(set)