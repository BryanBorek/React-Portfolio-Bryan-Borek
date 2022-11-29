import React from 'react';
import '../styles/Navbar.css';

function Navigation({ currentPage, handlePageChange }) {
    return (
        <ul className='nav' style={{height: "fit-content", display: "inline-flex", flexWrap: "nowrap", overflow: "scroll"}}>
            {/* about page */}
            <li className='nav-item active' style={{padding: "0px", margin: "0px"}}>
                <a href='#about'
                    onClick={() => handlePageChange('About')}
                    className={currentPage === 'About' ? 'nav-link navBtn active' : 'navBtn nav-link'}
                    style={{paddingTop: "0px", paddingBottom: "0px", paddingLeft: "10px", paddingRight: "10px", margin: "0px"}}
                    ><p style={{padding: "10px", margin: "0px", color: "black", minHeight: "48px"}}>
                    About
                </p>
                </a>
            </li>

            {/* portfolio page */}
            <li className='nav-item active' style={{padding: "0px", margin: "0px"}}>
                <a href='#portfolio'
                    onClick={() => handlePageChange('Portfolio')}
                    className={currentPage === 'Portfolio' ? 'nav-link navBtn active' : 'navBtn nav-link'}
                    style={{paddingTop: "0px", paddingBottom: "0px", paddingLeft: "10px", paddingRight: "10px", margin: "0px"}}
                    ><p style={{padding: "10px", margin: "0px", color: "black", minHeight: "48px"}}>
                    Portfolio
                    </p>
                </a>
            </li>

            {/* resume page */}
            <li className='nav-item active' style={{padding: "0px", margin: "0px"}}>
                <a href='#resume'
                    onClick={() => handlePageChange('Resume')}
                    className={currentPage === 'Resume' ? 'nav-link navBtn active' : 'navBtn nav-link'}
                    style={{paddingTop: "0px", paddingBottom: "0px", paddingLeft: "10px", paddingRight: "10px", margin: "0px"}}
                    ><p style={{padding: "10px", margin: "0px", color: "black", minHeight: "48px"}}>
                    Resumè
                    </p>
                </a>
            </li>

            {/* contact page */}
            <li className='nav-item active' style={{padding: "0px", margin: "0px"}}>
                <a href='#contact'
                    onClick={() => handlePageChange('Contact')}
                    className={currentPage === 'Contact' ? 'nav-link navBtn active' : 'navBtn nav-link'}
                    style={{paddingTop: "0px", paddingBottom: "0px", paddingLeft: "10px", paddingRight: "10px", margin: "0px"}}
                    ><p style={{padding: "10px", margin: "0px", color: "black", minHeight: "48px"}}>
                    Contact
                    </p>
                </a>
            </li>

        </ul>
    )
}

export default Navigation;