/* Class */
// class -> sebuah template atau blueprint untuk membuat instance object
// bedanya class dan object, diibaratkan mobil, kalo class itu blueprint cetakan mobilnya, kalo object itu lebih kepada property yang ada di dalam mobil tersebut

/* penerapan Class pada ES5 */

// function Person(name) {
//   this.name = name;
// }

// Person.prototype.sayHello = function(friend) {
//   console.log(`Hello, ${friend.name}`)
// }

// function Teacher(name) {
//  Person.call(this, name);
// }

// Teacher.propotype = Object.create(Person.prototype);
// Teacher.prototype.constructor = Teacher;

// const TeacherA = new Teacher('Budi');
// const TeacherB  = new Teacher('Ani');
// TeacherA.sayHello(TeacherB)


/* Definisikan Class */
class MyClass {}
const MyExpressionClass = class {}
console.log(MyExpressionClass)
console.log('-----')



/* Fitur didalem Class Body */
// constructor -> Method atau function spesial yang akan terpanggil saat membuat instance
class KelasKu{
  constructor() {
    console.log('Ini adalah class kelasku')
  }
}
// menjalakan Class 
new KelasKu() // -> dibuat object nya sepeetinini, karena class sebenarnya adalah object
console.log('-----')



/* Method */
class MyCar {
  constructor(name, brand) {
    this.name = name;
    this.brand = brand;
  }
}

const car1 = new MyCar('Pajero', 'Honda')
const car2 = new MyCar('Avanza', 'Daihatsu')
console.log(car1);
console.log(car1.brand);
console.log(car1.name);
console.log(car2);
console.log(car2.brand);
console.log(car2.name);
console.log('-----')

// Membuat MetHod di dalam class
class ClassKu {
  firstField = 'First Field';
  
  firstMethod() {
    console.log(`Ini adalah method pertama dari class ${KelasKu.name}`)
  }

  // Getter
  get getFirstField() {
    // this keyword mereferensikan pada suatu instance yang dibuat
    return this.firstField //memanggil firstfield menggunakan 
  }

  // Setter 
  set setMyFirstField(value) {
    this.firstField = value;
  }
}

const myClass = new ClassKu()
myClass.firstMethod();

// Getter and Setter
console.log(myClass.getFirstField); // output: 'First Field'
myClass.setMyFirstField = 'Nilai Berubah'
console.log(myClass.getFirstField)


/* This keyword */ 
class MyThisClass {
  firstClass = 'Kelas Pertamaku'

  // getter
  get getFirstClass() {
    // this keyword mereferensikan pada suatu instance yang dibuat
    return this.firstClas
  }

  // setter
  set setFirstClass(value) {
    this.firstClass = value;
  }
}

const myThisClass = new MyThisClass();
console.log(myThisClass.getFirstClass); //output : Kelas Pertamaku

console.log('----')
/* Properties di dalam Class OOP */
class MyPropsClass {
  constructor(param1 = 'Dicoding', param2 = 'Indonesia') {
    this.param1 = param1;
    this.param2 = param2;
  }
}

const myPropsClass = new MyPropsClass();
console.log(myPropsClass.param1)
console.log(myPropsClass.param2)

/* Extends (Inheritance) */
// Mewarisi Properties atau method
// Langkah: 1. Nama Child

class Car {
  #engine = false;

  wheel = 4;
  color = 'white';
  speed = 100;
  nitro = null;

  // method
  startEngine() {
    console.log('Mesin Menyala');
    this.#engine = true;
  }
  driveOff() {
    if (this.#engine) {
      console.log('Mesin belum menyala')
      return false;
    } else {
      console.log('Gas menyala brow!');
    }
  }
}

// Extends untuk mengambil pewarisan objek yang sudah dibentuk di dalam class dengan membuat subclass
class Bugatti extends Car {
  wheel = 4;
  color = 'Red'
  speed = 100;

  // pemanggilan super untuk memanggil function di dalam class
  constructor(wheel, color) {
    super(wheel, color)
  }

    // Getter Setter
  get speed() {
    return this.speed + this.nitro;
  }
}
const zidaneBuggati = new Bugatti()
const ibrahimBuggati = new Bugatti()

console.log(zidaneBuggati)
zidaneBuggati.driveOff()


