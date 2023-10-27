import React from 'react';

function NotesItemBody({ title, body, createdAt }) {
  return (
    <div className='note-item__content'>
      <h2 className='note-input__title'>{title}</h2>
      <p className='note-item__date'>{createdAt}</p>
      <p className='note-item__body'>{body}</p>
    </div>
  )
}

export default NotesItemBody;