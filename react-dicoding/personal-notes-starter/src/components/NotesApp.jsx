import React, { Component } from 'react';
import NotesList from './NotesList';
import { getInitialData, showFormattedDate } from '../utils/index';
import NotesInput from './NotesInput';
import SearchBar from './SearchBar';
import ArchiveNotes from './ArchiveNotes';

class NotesApp extends Component {
  constructor(props) {
    super(props);
    const data = getInitialData();
    this.state = {
      // membuat array kosong dengan kondisi notes dan archive notes kondisi true and false
      notes: data.filter((note) => !note.archived),
      searchKeyword: '',
      archivedNotes: data.filter((note) => note.archived),
      // archivedNotes: [],
    };
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    const archivedNotes = this.state.archivedNotes.filter((note) => note.id !== id);
    this.setState({ notes, archivedNotes });
  }

  onAddNotesHandler({ title, body }) {
    this.setState((prevState) => ({
      notes: [
        ...prevState.notes,
        {
          id: +new Date(),
          createdAt: new Date(),
          title,
          body,
          archived: false,
        },
      ],
    }));
  }

  // Memasukkan fungsi agar button archive menyimpan pesan yang diarsip
  onArchiveHandler(id) {
    const updatedNotes = this.state.notes.map((note) => {
      if (note.id === id) {
        return { ...note, archived: true };
      }
      return note;
    });

    const archivedNote = updatedNotes.find((note) => note.id === id)

    //kondisi agar menghapus data notes yang ada di NotesList ke dalam Archive Notes
    if(archivedNote) {
      this.setState((prevState) => ({
        notes: prevState.notes.filter((note) => note.id !== id ),
        archivedNotes: [...prevState.archivedNotes, archivedNote],
      }));
    }
  }

  // Membangun fungsi untuk melakukan pencarian berdasarkan kata kunci
  onSearchChangeHandler = (searchKeyword) => {
    this.setState({ searchKeyword });
  };

  render() {
    const { notes, archivedNotes, searchKeyword } = this.state;

    const filteredNotes = notes.filter((note) =>
      note.title.toLowerCase().includes(searchKeyword.toLowerCase())
    );

    const formattedNotes = filteredNotes.map((note) => ({
      ...note,
      createdAt: showFormattedDate(note.createdAt),
    }));

    return (
      <div className="notes-app">
        <header className="note-app__header">
          <h1>Mu Notes</h1>
          <SearchBar onSearchKeyword={this.onSearchChangeHandler} />
        </header>
        <div className="note-app__body">
          <NotesInput addNotes={this.onAddNotesHandler} />
          <h2>Catatan Saya</h2>
          <NotesList
            notes={formattedNotes}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
          />
          <h2>Pesan yang diarsip</h2>
          <ArchiveNotes
            notes={this.state.archivedNotes}
            onDelete={this.onDeleteHandler}
          />
        </div>
      </div>
    );
  }
}

export default NotesApp;
