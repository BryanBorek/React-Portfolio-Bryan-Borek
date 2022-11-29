import React from 'react';

export default function ContactForm() {
  return (
    <div className='d-flex m-2 p-2' style={{ justifyContent: "center"}}>
      <div className='d-flex card m-2 p-2' style={{ backgroundColor: 'rgba(255, 255, 255, 0.25)', borderRadius: "10px 10px 10px 10px", maxWidth: '575px' }}>
                <h3 className='mt-3px-3'>Reach out, I'd love to connect!</h3>
        <div>
          <div style={{ minHeight: "2em" }}></div>
        </div>
        <div>
        </div>
        <div style={{ height: "-webkit-fill-available" }}>
          <h4 className='px-3'>Name:</h4>
          <input className='mx-3 p-0' style={{ maxWidth:"90%"}}></input>
        </div>
        <div style={{ height: "-webkit-fill-available" }}>
          <h4 className='px-3'>E-Mail:</h4>
          <input className='mx-3 p-0' style={{ maxWidth:"90%"}}></input>
        </div>
        <div style={{ height: "-webkit-fill-available"}}>
          <h4 className='px-3'>Message:</h4>
          <textarea className='mx-3 p-0' style={{ width:"90%", height: "contents"}}></textarea>
        </div>
        <p className='m-0'>
          <a className="linkBtn mx-3" href="/#">Send</a>
        </p>
        <div>
          <div style={{ minHeight: "1em" }}></div>
        </div>
      </div>
    </div>
  );
}