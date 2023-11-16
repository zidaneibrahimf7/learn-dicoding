/* Promise Berantai */

function withDrawMoney(amount) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(amount > 100) {
        reject(new Error('Not enough money to withdraw'))
        return;
      }

      resolve(amount)
    }, 1000)
  });
}

function buyCinemaTicket(money) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(money < 10){
        reject(new Error('Not enough money to buy ticket'))
      }

      resolve('ticket-1')
    }, 1000)
  });
}

function goInsideCinema(ticket) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(!ticket) {
        reject(new Error('There is no Ticket!'))
      }

      resolve('Enjoy the movie')
    }, 1000)
  })
}

// function errorWithdraw(error) {
//   console.log('process error: Not enough money to withdraw')
// }

function watchMovie() {
  withDrawMoney(false)
  .then((money) => {
    return buyCinemaTicket(money)
  })
  .then((ticket) => {
    return goInsideCinema(ticket)
  })
  .then((result) => {
    console.log(result)
  })
  .catch((error) => {
    console.log(error.message)
  })
}

watchMovie()