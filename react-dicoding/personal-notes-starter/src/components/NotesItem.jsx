import React from 'react';

import NotesItemBody from './NotesItemBody';
import DeleteButton from './DeleteButton';
import ArchiveButton from './ArchiveButton';

function NotesItem({ title, createdAt, body, id, onDelete, onArchive, onUnarchive }) {
  return (
    <div className='note-item'>
      <NotesItemBody title={title} createdAt={createdAt} body={body} />
      <div className="note-item__action">
      <DeleteButton id={id} onDelete={onDelete} />
      <ArchiveButton id={id} onArchive={onArchive} />
      {/* Proses untuk melakukan arsip pesan */}
      {/* {
        archived ? (
          <span>
            Makan
          </span>
        ) : (
          <ArchiveButton id={id} onArchive={onArchive} />
        )
      } */}
      </div>
    </div>
  )
}

export default NotesItem;