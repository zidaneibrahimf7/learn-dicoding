import React from 'react';
import NotesItem from './NotesItem';
import { showFormattedDate } from '../utils/index';

function ArchiveNotes({ notes, onDelete, onArchive }) {
  const archivedNotes = notes.filter((note) => note.archived);

  return (
  <div className='notes-list'>
    {notes.length === 0 ? (
      <p className="notes-list__empty-message">No Archived Notes</p>
      ) : (        
        archivedNotes.map((note) => (
           <NotesItem
             key={note.id}
             id={note.id}
             title={note.title}
             createdAt={showFormattedDate(note.createdAt)}
             body={note.body}
             archived={note.archived}
             onDelete={onDelete}
             onArchive={onArchive}
            //  {...note }
            />
        ))
      )
    }
  </div>
  )
}
export default ArchiveNotes;
