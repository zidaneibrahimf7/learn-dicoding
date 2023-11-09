/* Object */

/* const myObject {
//   key1: value,
//   key2: value,
//   key3: value,
} */

// key = PropertyName


// Membuat Object
const car = {
  brand: "Honda",
  model: "RXS-00913",
  year: 2020,
  "Jumlah Roda": 4,
  isConsumer: true,
  engine: {
    type: "V6",
    horsepower: 123,
    fuelType: "Petrol"
  },
}

// memanggil object dan berdasarkan PropertyName / key
console.log(car)
console.log(car.brand)
console.log('----');

// Hint => Key di dalam object itu sudah pasti string

// mennghapus property di dalam object menggunakan delete 
delete car.isConsumer;
console.log(car)
console.log('----');

// mengakses object di dalam object
console.log(car.engine)
console.log(car.engine.type)