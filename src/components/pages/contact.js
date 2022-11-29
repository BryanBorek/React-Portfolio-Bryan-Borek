import React from 'react';

import ContactForm from '../ContactForm';

export default function Contact() {
  return (
    <div style={{ width: "-webkit-fill-available", maxWidth: "-webkit-fill-available" }}>
      <h2 className='brandFont'>Contact</h2>
      <div className='d-flex flex-wrap justify-content-center'>
        {<ContactForm />}
      </div>
    </div>
  )
}