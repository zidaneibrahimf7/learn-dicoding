function getUsers(isOffline, callback) {
  // simulate network delay
  setTimeout(() => {
    const users = ['John', 'Jack', 'Abigail'];

    // pada callback juga dapat membawa argumen data error, 
  
    if(isOffline) {
      callback(new Error('cannot retrive users due offline'), null)
      return;
    }

    callback(users);
  }, 3000);
}

function usersCallback(users, error) {
  if(error) {
    console.log('process failed:' , error.message)
    return;
  }

  console.log('process success:', users)
}

getUsers(true, usersCallback)
getUsers(false, usersCallback)

// getUsers((users) => {
//   console.log(users)
// })

// Hint : Callback harus diletakkan diakhir 