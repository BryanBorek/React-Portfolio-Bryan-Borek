import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
    return (
        <ul className='nav nav-tabs'>
            {/* about page */}
            <li className='nav-item'>
                <a href='#about'
                    onClick={() => handlePageChange('About')}
                    className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                >
                    About
                </a>
            </li>

            {/* contact page */}
            <li className='nav-item'>
                <a href='#contact'
                    onClick={() => handlePageChange('Contact')}
                    className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                >
                    Contact
                </a>
            </li>

            {/* portfolio page */}
            <li className='nav-item'>
                <a href='#portfolio'
                    onClick={() => handlePageChange('Portfolio')}
                    className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                >
                    Portfolio
                </a>
            </li>

            {/* resume page */}
            <li className='nav-item'>
                <a href='#resume'
                    onClick={() => handlePageChange('Resume')}
                    className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                >
                    Resume
                </a>
            </li>

        </ul>
    )
}

export default NavTabs;