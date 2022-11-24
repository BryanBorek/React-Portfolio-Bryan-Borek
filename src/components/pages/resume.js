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
    <div>
      <h2>Bryan's Resume</h2>
      <p>
        Work History:
      </p>
      <div>
      <button className="glass btn" onClick={downloadPDF}>
          Download PDF
        </button>
      </div>
    </div>
  );
}