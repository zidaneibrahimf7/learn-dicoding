const newElement = document.createElement("li");
newElement.innerText = 'Selamat Menikmati';
// Untuk memunculkannya ke dalam web, gunakan AppendChild
daftar.appendChild(newElement)

// InsertBefore -> memasukan konten sebelumnya
const elemenAwal = document.createElement('li')
elemenAwal.innerText = "Hidupkan Kompor";
const itemAwal = document.getElementById('awal');
// InsertBefore
daftar.insertBefore(elemenAwal, itemAwal);
