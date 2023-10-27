// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
function ContactItemBody({ name, tag }) {
  return (
    <div className="contact-item_body">
      <h3 className='contact-item_title'>{name}</h3>
      <p className='contact-item_username'>@{tag}</p>
    </div>
  );
}

export default ContactItemBody;