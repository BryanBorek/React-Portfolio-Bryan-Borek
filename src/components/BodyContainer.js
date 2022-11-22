import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Navigation from './Navigation';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

export default function BodyContainer() {
    const [currentPage, setCurrentPage] = useState('About');
  
    const renderPage = () => {
      if (currentPage === 'About') {
        return <About />;
      }
      if (currentPage === 'Contact') {
        return <Contact />;
      }
      if (currentPage === 'Portfolio') {
        return <Portfolio />;
      }
      return <Resume />;
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <div class="h-100 d-inline-block m-2">
        <header>
          <Header />
        </header>
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
        <footer>
          <Footer />
        </footer>
      </div>
    )
  }