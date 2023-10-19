// TODO: tampilkan teks pada notes.txt pada console.

const fs = require('fs');
const { resolve } = require('path')

const fileReadCallback = (error, data) => {
  if (error) {
    console.log('Gagal membaca berkas')
  }
  console.log(data)
};


fs.readFile(resolve(__dirname, 'notes.txt'), 'utf-8', fileReadCallback)
