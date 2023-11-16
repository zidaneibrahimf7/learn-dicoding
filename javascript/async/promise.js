/* Promise */

function getUsers(isOffline) { //disini kita hapus callback yah!

  // masukkan promise
  return new Promise((resolve, reject) => {

    //simulate network delay
    setTimeout(() => {
      const users = ["doni", 'indro', 'kasino'];
  
      if(isOffline) {
        // callback(new Error('Cannot retrieve users due offline'))
        // ganti callback dengan reject yaa..!
        reject(new Error('cannot retrieve users due offline'))
        return;
      }
      
      // callback(users) (tidak perlu ada callback ketika memakai promise)
      resolve(users)
    }, 3000)
  })
}

getUsers(true)
.then(users => console.log(users))
.catch(err => console.log(err.message))

// function userCallback(error, users) {
//   if(error) {
//     console.log('process failed: ', error.message)
//     return;
//   }

//   console.log('process success: ', users)
// }

// getUsers(true, usersCallback)


