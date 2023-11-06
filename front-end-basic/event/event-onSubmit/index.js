const submitAction = document.getElementById('formDataDiri')

submitAction.addEventListener('submit', function (event) {
  const inputNama = document.getElementById('inputNama').value;
  const inputDomisili = document.getElementById('inputDomisili').value;
  const hiddenMessage = `Halo, ${inputNama}. Bagaimana cuacanya di ${inputDomisili}`

  document.getElementById('messageAfterSubmit').innerText = hiddenMessage;
  event.preventDefault()
})

// Memasukkan eveny onFocus

document.getElementById('inputNama').addEventListener('focus', function () {
  console.log('inputNama: focus');
  document.getElementById('notifikasiSisaKarakter').style.visibility = 'visible'
})