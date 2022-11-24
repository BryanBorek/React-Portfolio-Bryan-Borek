import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Navigation from './Navigation';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import '../styles/Navbar.css';
import '../styles/Section.css';

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
    <div className="h-100 w-100 d-inline-block" style={{ backgroundImage: "url(./testBG.jpg)", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed", overflow: "scroll" }}>
      <header className='d-flex w-100 glass'>
        <div className='d-flex flex-wrap w-100' style={{ justifyContent: "space-between" }}>
          <Header />
          <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
        </div>
      </header>
      <section className='contentContainer d-flex w-100'>
        <div className='sectionGlass d-flex p-2' style={{ width: "90%", maxWidth: "1200px", overflow: "scroll" }}>
          {renderPage()}
        </div>
      </section>
      <footer className='footerContainer d-flex my-3 w-100'>
        <div className='sectionGlass d-flex' style={{ width: "90%", maxWidth: "1200px", position: "relative" }}>
          <Footer />
        </div>
      </footer>
    </div>
  )
}