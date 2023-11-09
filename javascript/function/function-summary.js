/* Regular Function */

function myFunction(param1, param2) {
  console.log('Params 1: ', param1)
  console.log('Params 2: ', param2)
}
console.log(myFunction)
myFunction('Parameter 1', 'parameter 2')
console.log('------')

// Default Argument
function myFunc(params1, params2 = 'ini default Parameternya di tempat kedua') {
  console.log('Parameter 1: ', params1);
  console.log('Parameter 2: ', params2);
}
console.log(myFunc)
myFunc('Ini parameter ke satu')
console.log('------')
// membuat function dengan spread operator
function myNamedParamFunc({param1 = 1, param2 } = {}) {
  console.log(`param1: ${param1}, param2: ${param2}`)
}

console.log(myNamedParamFunc({
  param2: 'Parameter kedua',
  param1: 'Parameter kesatu',
}))

console.log(myNamedParamFunc)
console.log(myNamedParamFunc()) //output: param1 : 1, param2: undefined
console.log('------')

/* function expression */
// Suatu function dapat disimpan dalam variabel, bahkan dapat menjadi input dari function lain;
const myExpressionFunc = function() {
  console.log('Ini adalah Expressionn function saya')
}

myExpressionFunc()

//Menjadi input dari function lain...

function dipslayResult(data) {
  console.log(data)
}

function sumTwoNumber(x, y, callback) {
  const result = x + y;
  callback(result); 
}

sumTwoNumber(10, 2, dipslayResult)
console.log('------')

// Rest Parameters => memanggil semua params
function myParamFunc(param1, param2, ...param3) {
  console.log('Params 1: ', param1)
  console.log('Params 2: ', param2)
  console.log('Params 3: ', param3)
}

myParamFunc(
  'Parameter pertama',
  'Parameter Kedua',
  1, 2, 3, 4,
)
console.log('-----')


// Arrow Function 
const myArrayFunc = () => {
  return 'Ini adalah arrow function saya'
  // menggunakan return apabila banyak yang di return
}

console.log(myArrayFunc())

// Arrow function dengan default parameters
const arrowDefaultFunc = (param1, param2 = 2) => `param1 : ${param1}; param2: ${param2}` ;
console.log(arrowDefaultFunc())