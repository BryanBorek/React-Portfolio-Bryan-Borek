import React from 'react';

export default function ContactForm() {
  return (
    <div className='d-flex' style={{ justifyContent: "center" }}>
      <div className='d-flex card m-2' style={{ backgroundColor: 'rgba(255, 255, 255, 0.25)', borderRadius: "10px 10px 10px 10px", maxWidth: '575px' }}>
        <h3 className='m-2 p-2 brandFont'>Reach out, I'd love to connect!</h3>
        <div className='p-2'>
        <div>
          <div style={{ minHeight: "2em" }}></div>
        </div>
        <div>
        </div>
        <div style={{ height: "auto" }}>
          <h4 className='p-2 pb-0 brandFont'>Name:</h4>
          <input className='m-0 p-2' style={{ width: "100%", borderRadius: "10px", borderColor: "transparent" }}></input>
        </div>
        <div style={{ height: "auto" }}>
          <h4 className='p-2 pb-0 brandFont'>E-Mail:</h4>
          <input className='m-0 p-2' style={{ width: "100%", borderRadius: "10px", borderColor: "transparent" }}></input>
        </div>
        <div style={{ height: "auto" }}>
          <h4 className='p-2 pb-0 brandFont'>Message:</h4>
          <textarea className='m-0 mb-1 p-2' style={{ width: "100%", height: "contents", borderRadius: "10px", borderColor: "transparent" }}></textarea>
        </div>
        <p className='m-0'>
          <a className="linkBtn m-0" href="/#">Send</a>
        </p>
        </div>
      </div>
    </div>
  );
}