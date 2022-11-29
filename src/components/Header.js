import React from 'react';

function Header({ currentPage, handlePageChange }) {
  return (
    <div>
      <a href='#about' onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-link navBtn active' : 'navBtn nav-link'}>
        <h1 style={{ padding: "0px 10px", margin: "0px" }}>
          Bryan's Portfolio
        </h1>
      </a>
    </div>
  );
}

export default Header;