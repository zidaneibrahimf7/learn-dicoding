import React from 'react'

import NotesItem from './NotesItem';

function NotesList({ notes, onDelete, onArchive }) {
  return (
    <div className='notes-list'>
      {/* menampilkan pesan "Tidak ada catatan menggunakan Ternary Operator" */}
      {notes.length === 0 ? (
        <p className="notes-list__empty-message">Tidak ada catatan</p>
        ) : (
          notes.map((note) => (
            <NotesItem
              key={note.id}
              id={note.id}
              onDelete={onDelete}
              onArchive={onArchive}
              {...note} />
          ))
        )
      }
    </div>
  )
}

export default NotesList;