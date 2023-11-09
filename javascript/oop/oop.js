const car = {
  // properties
  brand: 'Ford',
  color: 'red',
  maxSpeed: 200,
  chassisNumber: 'f-1',

  // Methods
  drive: () => {
    console.log('driving');
  },
  reverse: () => {
    console.log('reversing');
  },
  turn: () => {
    console.log('turning');
  }
}


console.log(car);
console.log(car.brand);
console.log(car.color);
console.log(car.chassisNumber)

car.drive();
console.log('--------------')

// kalo jenis carnya sama cuma beda properties nya aja, apa harus tulis satu-satu lagi?
// Jawabannya jelas tidak, makanya kita pake constructor, pewarisan, dan object blueprint

// object blueprint
function Car(brand, color, maxSpeed) {
  this.brand = brand;
  this.color = color;
  this.maxSpeed = maxSpeed;
}

Car.prototype.drive = function () {
  console.log(`${this.brand} ${this.color} is Driving`)
}
Car.prototype.reverse = function () {
  console.log(`${this.brand} ${this.color} is reversing`)
}
Car.prototype.turn = function () {
  console.log(`${this.brand} ${this.color} is turning`)
}

Car()



// nah untuk menggunakan object blueprint di atas, pake constructor function
const car1 = new Car('Toyota', 'Blue', 179);
const car2 = new Car('Honda', 'Dark Blue', 298);

console.log(car1)
console.log(car1.brand)
car1.drive()
console.log('<><><>ini batas car1<><><>')
console.log(car2)
console.log(car2.brand, car2.color)
car2.reverse()

class Mobil { }
console.log(typeof Mobil) //ini juga akan bernilai function, karena di js gaada sama sekali class

class Mycar {
  constructor(brand, color, maxSpeed, chassisNumber) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    // this.chassisNumber = chassisNumber;
    // disini bisa dimasukkin konsep Getter dan Setter (instance class bersifat mutable)
    this.chassisNumber = `${brand}-${Math.floor(Math.random() * 1000)}`; //ini yg disebut mutable, atau dapat berubah-ubah
  }
}

class Mail {
  constructor(sender, receiver, subject, body) {
    this.sender = sender;
    this.receiver = receiver;
    this.object = object;
    this.body = body;
  }
}

const mobilku1 = new Mycar('Honda', 'Green', 289, 'f-1');
console.log(mobilku1)
console.log(mobilku1.brand);
console.log(mobilku1.color);
console.log(mobilku1.maxSpeed);
console.log(mobilku1.chassisNumber);

// Getter dan Setter (Data property dan Acessor Property) (Data property => property yang menampung sebuah nilai dalam objek)
// Acessor Property => Property yang dikontrol oleh sebuah getter dan setter
class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  };

  // Accessor property ditandai dengan get and set
  get fullName() { //
    return `${this.firstName} ${this.lastName}`
  }

  set fullName(fullName) {
    const [firstName, lastName] = fullName.split(' ');
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const user = new User('John', 'Doe');
console.log(user);
console.log(user.fullName);

user.fullName = 'Naruto Uzumaki';
console.log(user);
console.log(user.fullName)


// // Method
// drive() {
//   console.lo
// }

// Inheritance / Pewarisan

// class WhatsAppService {
//   constructor(sender) {
//     this.sender = sender;
//   }


//   sendMessage(message, receiver) {
//     console.log(`${this.sender} sent ${message} to ${receiver}`);
//   }

//   sendBroadcastMessage(message, receivers) {
//     for (const receiver of receivers) {
//       this.sendMessage(message, receiver);
//     }
//   }
// }

// class EmailService {
//   constructor(sender) {
//     this.sender = sender
//   }

//   sendMessage(message, receiver) {
//     console.log(`${this.sender} sent ${message} to ${receiver}`)
//   }

//   sendDelayedMessage(message, receiver, delay) {
//     setTimeout(() => {
//       this.sendMessage(message, receiver);
//     }, delay)
//   }
// }

// nah disana kan sejenis, maka dibuat jadi satu
// buat superclass lalu subclass

// superclass
class MailService {
  constructor(sender) {
    this.sender = sender;
  }

  sendMessage(message, receiver) {
    console.log(`${this.sender} sent ${message} to ${receiver}`);
  }

}

// Subclass
class WhatsAppService extends MailService {
  // overriding => memperbolehkan subclass mendefinisikan implementasinya sendiri pada sebuah methods
  // constructor Overriding
  // menambahkan isBusiness sebagai properti baru yang lebih spesifik pada subclass WhatsAppService di dalam MailService
  constructor(sender, isBusiness) {
    super(sender);
    this.isBusiness = isBusiness;
  }
  sendBroadcastMessage(message, receivers) {
    for (const receiver of receivers) {
      this.sendMessage(message, receiver);
    }
  }

}

// Subclass
class EmailService extends MailService {
  sendDelayedMessage(message, receiver, delay) {
    setTimeout(() => {
      this.sendMessage(message, receiver);
    }, delay);
  }
}
// nah kalo kaya gini, objek whatsapp dan email seakan tidak memiliki perbedaan
// const whatsapp = new MailService('+6281234567890');
// const email = new MailService('dimas@dicoding.com');

// nah, dengan pewarisan atau inheritance, kita bisa memecahkan masalah tersebut

const whatsapp = new WhatsAppService('+6281234567890');
const email = new EmailService('dimas@dicoding.com');

whatsapp.sendMessage('Hello', '+6289876543210');
whatsapp.sendBroadcastMessage('Hello', ['+6289876543210', '+6282234567890']);
// whatsapp.sendDelayedMessage(); // Error

email.sendMessage('Hello', 'john@doe.com');
email.sendDelayedMessage('Hello', 'john@doe.com', 3000);
// email.sendBroadcastMessage(); // Error


class Developer {
  constructor(name) {
    this.name = name;
  }

  commitChange() {
    console.log(`${this.name} is committing changess....`);
  }
}

// class FrontEndDeveloper extends Developer {
//   buildUI() {
//     console.log(`${this.name} is Building UI`);
//   }
// }

// class BackEndDeveloper extends Developer {
//   buildAPI() {
//     console.log(`${this.name} is Building API`)
//   }
// }

// class DevOps extends Developer {
//   deployApp() {
//     console.log(`${this.name} is deploying app`)
//   }
// }

// cara diatas tidak efektif karena jika terjadi perubahan pada salah satu function. maka dibuatlah object composition
// object composition adalah mengubah class menjadi function berdasarkan kemampuannya

function canBuildApi(developer) {
  return {
    buildAPI: () => {
      console.log(`${developer.name} is building API...`)
    }
  }
}
function canBuildUI(developer) {
  return {
    buildUI: () => {
      console.log(`${developer.name} is building UI...`)
    }
  }
}
function canDeployApp(developer) {
  return {
    deployApp: () => {
      console.log(`${developer.name} is deploying App...`)
    }
  }
}

// dengan dipceah sesuai kemampuan tersebut, maka akan mempermudah cara kita untuk membangun objek apapun dengan peran apapun...

function createBackEndDeveloper(name) {
  const developer = new Developer(name);
  return Object.assign(developer, canBuildApi(developer))
}
// Object.assign untuk mempermudah fungsi menjadi object creator mengomposisikan objek kemampuan2 yg dibutuhkan..

function createFrontEndDeveloper(name) {
  const developer = new Developer(name);
  return Object.assign(developer, canBuildUI(developer))
}

function createDevOps(name) {
  const developer = new Developer(name);
  return Object.assign(developer, canDeployApp(developer))
}

function createFullstackDeveloper(name) {
  const developer = new Developer(name);
  return Object.assign(developer, canBuildApi(developer), canBuildUI(developer), canDeployApp(developer))
}

const FrontEndDeveloper = createFrontEndDeveloper('Zidane')
FrontEndDeveloper.commitChange()
FrontEndDeveloper.buildUI()
console.log(`is ${FrontEndDeveloper.name} developer?`, FrontEndDeveloper instanceof Developer)
