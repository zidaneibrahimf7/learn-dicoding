document.addEventListener('DOMContentLoaded', function () {
  const submitBook = document.getElementById('inputBook');
  submitBook.addEventListener('submit', function (event) {
    event.preventDefault();
    addBook();
  });

  // Buat kondisi variabel menampung value dengan array kosong
  const incompleteBookshelfList = [];
  const completeBookshelfList = [];
  const RENDER_EVENT = 'render-book';

  function generatedId() {
    return +new Date();
  }

  function addBook() {
    const textBook = document.getElementById('inputBookTitle').value;
    const writerBook = document.getElementById('inputBookAuthor').value;
    const yearBook = document.getElementById('inputBookYear').value;

    const generatedID = generatedId();
    const isCompleted = document.getElementById('inputBookIsComplete').checked;

    const bookObject = generateBookObject(generatedID, textBook, writerBook, yearBook, isCompleted, false)

    // membuat kondisi apabila sudah dibaca dan belum dibaca
    if (isCompleted) {
      completeBookshelfList.push(bookObject);
    } else {
      incompleteBookshelfList.push(bookObject);
    }

    document.dispatchEvent(new Event(RENDER_EVENT))
    saveData();
  }


  function generateBookObject(id, title, author, year, isCompleted) {
    return {
      id,
      title,
      author,
      year,
      isCompleted: isCompleted,
    };
  }

  function moveBookToCompleted(id) {
    const bookToMove = incompleteBookshelfList.find(book => book.id == id);

    if (bookToMove) {
      bookToMove.isCompleted = true;
      incompleteBookshelfList.splice(incompleteBookshelfList.indexOf(bookToMove), 1);
      completeBookshelfList.push(bookToMove);
      document.dispatchEvent(new Event(RENDER_EVENT));
    }
    saveData();
  }

  // Fungsi untuk memindahkan buku dari "Selesai dibaca" ke "Belum Selesai Dibaca"
  function moveBookToIncomplete(id) {
    const bookToMove = completeBookshelfList.find(book => book.id == id);

    if (bookToMove) {
      bookToMove.isCompleted = false;
      completeBookshelfList.splice(completeBookshelfList.indexOf(bookToMove), 1);
      incompleteBookshelfList.push(bookToMove);
      document.dispatchEvent(new Event(RENDER_EVENT));
    }
    saveData();
  }

  // Menggunakan event delegation untuk menangani klik pada buku yang ingin dipindahkan
  document.getElementById('incompleteBookshelfList').addEventListener('click', function (event) {
    if (event.target.tagName === 'ARTICLE') {
      const bookId = event.target.dataset.id;
      moveBookToCompleted(bookId);
    }
  });

  document.getElementById('completeBookshelfList').addEventListener('click', function (event) {
    if (event.target.tagName === 'ARTICLE') {
      const bookId = event.target.dataset.id;
      moveBookToIncomplete(bookId);
    }
  });


  function makeBook(bookObject) {

    const bookItem = document.createElement('article');
    const bookTitle = document.createElement('h3');
    const bookAuthor = document.createElement('p');
    const bookYear = document.createElement('p');
    const actionButtons = document.createElement('div');

    bookItem.dataset.id = bookObject.id;

    bookTitle.innerText = bookObject.title;
    bookAuthor.innerText = `Penulis: ${bookObject.author}`;
    bookYear.innerText = `Tahun: ${bookObject.year}`;

    // membuat tombol aksi
    const moveButton = document.createElement('button');
    moveButton.innerText = bookObject.isCompleted ? 'Belum Selesai' : 'Selesai dibaca';
    moveButton.addEventListener('click', function () {
      if (bookObject.isCompleted) {
        moveBookToIncomplete(bookObject.id)
      } else {
        moveBookToCompleted(bookObject.id);
      }
    })

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Hapus Buku';
    deleteButton.addEventListener('click', function () {
      removeBook(bookObject.id);
    })

    // menambahkan elemen2 ke elemen artikel buku
    actionButtons.appendChild(moveButton);
    actionButtons.appendChild(deleteButton);

    bookItem.appendChild(bookTitle);
    bookItem.appendChild(bookAuthor)
    bookItem.appendChild(bookYear)
    bookItem.appendChild(actionButtons)

    return bookItem;

  }

  // Fungsi untuk menghapis buku yang ada
  function removeBook(id) {
    const bookToRemove = incompleteBookshelfList.find(book => book.id === id) || completeBookshelfList.find(book => book.id === id)
    completeBookshelfList.find(book => book.id === id);
    incompleteBookshelfList.find(book => book.id === id);

    if (bookToRemove) {
      const shelf = bookToRemove.isCompleted ? completeBookshelfList : incompleteBookshelfList;
      const bookIndex = shelf.findIndex(book => book.id === id);

      if (bookIndex >= 0) {
        shelf.splice(bookIndex, 1);
        document.dispatchEvent(new Event(RENDER_EVENT));
      }
    }
    saveData();
  }

  document.addEventListener(RENDER_EVENT, function () {
    const incompleteBookshelfElement = document.getElementById('incompleteBookshelfList');
    const completeBookshelfElement = document.getElementById('completeBookshelfList');

    incompleteBookshelfElement.innerHTML = '';
    completeBookshelfElement.innerHTML = '';

    incompleteBookshelfList.forEach(book => {
      if (book.isCompleted === false) {
        const bookElement = makeBook(book);
        incompleteBookshelfElement.appendChild(bookElement);
      }
    });

    completeBookshelfList.forEach(book => {
      if (book.isCompleted === true) {
        const bookElement = makeBook(book);
        completeBookshelfElement.appendChild(bookElement);
      }
    });
  });

  // Webstorage
  function saveData() {
    // Menyimpan data huku dalam bentuk JSON
    localStorage.setItem('incompleteBookshelfList', JSON.stringify(incompleteBookshelfList));
    localStorage.setItem('completeBookshelfList', JSON.stringify(completeBookshelfList))
  }

  // Fungsi untuk memuat data buku dari localStorage saat halaman dimuat
  function loadFromStorage() {
    const incompleteData = localStorage.getItem('incompleteBookshelfList');
    const completeData = localStorage.getItem('completeBookshelfList');

    if (incompleteData) {
      incompleteBookshelfList.push(...JSON.parse(incompleteData));
    }

    if (completeData) {
      completeBookshelfList.push(...JSON.parse(completeData))
    }

    document.dispatchEvent(new Event(RENDER_EVENT))
  }

  loadFromStorage();


  // Fitur Search
  const searchForm = document.getElementById('searchBook');
  searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const searchQuery = document.getElementById('searchBookTitle').value
    performSearch(searchQuery)
  })

  function performSearch(query) {
    // membuat array untuk menampung hasil pencarian
    const searchResults = searchBooks(query);

    // Menampilkan hasil pencarian
    renderSearchResults(searchResults);
  }

  function searchBooks(query) {
    // Lakukan pencarian berdasarkan judul (nama)
    return [...incompleteBookshelfList, ...completeBookshelfList].filter(book => {
      return book.title.toLowerCase().includes(query.toLowerCase());
    })
  }

  function renderSearchResults(results) {
    // const searchResultsSection = document.querySelector('#searchBook');
    const searchResultsElement = document.querySelector('#searchBook');
    searchResultsElement.classList.add('search-results');

    if (results.length === 0) {
      searchResultsElement.innerText = 'Tidak ada buku yang cocok';
    } else {
      results.forEach(book => {
        const bookInfo = document.createElement('');
        bookInfo.classList.add('search-section');
        bookInfo.innerHTML = `
         <h3>${book.title}</h3>
        <p>Penulis: ${book.author}</p>
        <p>Tahun: ${book.year}</p>
        `
        // const bookElement = makeBook(book);
        searchResultsElement.appendChild(bookInfo);
      });
    }

    // Hapus hasil pencarian sebelumnya (jika ada) dan tambahkan hasil pencarian baru
    const existingSearchResults = searchResultsSection.querySelector('.search-results');

    if (existingSearchResults) {
      searchResultsSection.removeChild(existingSearchResults);
    }
    searchResultsSection.appendChild(searchResultsElement);
  }
})

