import React from 'react';

export default function Resume() {
  const downloadPDF = () => {
    fetch('BBorekPortfolio.pdf').then(response => {
      response.blob().then(blob => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'BBorekPortfolio.pdf';
        alink.click();
      })
    })
  }
  return (
    <div style={{ width: "-webkit-fill-available", maxWidth: "-webkit-fill-available" }}>
      <h2 className='brandFont'>Resumè</h2>
      <div className='d-flex flex-wrap justify-content-center'>
        <div className='d-flex' style={{ justifyContent: "center" }}>
          <div className='d-flex card m-2 px-0 py-2' style={{ backgroundColor: 'rgba(255, 255, 255, 0.25)', borderRadius: "10px 10px 10px 10px", maxWidth: '575px' }}>
            <h3 className='m-2 px-2 pb-2 brandFont'>Bryan Borek Tech Industry Resumè</h3>
            <p className='m-0 p-2 glass' style={{ minHeight: "7em", width: '100%', minWidth: "200px" }}>
              Hi, I’m Bryan and this is my Tech Resume.
              <br></br>
              <br></br>

              I am currently in the final 3 weeks of the Full-Stack Coding Bootcamp From the University of Minnesota.
              <br></br>
              <br></br>

              Before that, I went to school for Graphic Design and Animation.
              <br></br>
              <br></br>

              I have recently launched my own startup and decided to take up learning coding to help with future development.
              <br></br>
              <br></br>

              I’ll come back to update this in the future.
              <br></br>
              <br></br>

              Thanks and have a great day!
            </p>
            <div>
              <button className="mx-2 mt-2 linkBtn" onClick={downloadPDF}>
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}