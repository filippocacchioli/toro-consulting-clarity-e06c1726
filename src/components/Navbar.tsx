
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <div className="h-12 w-12 rounded-full bg-toro-gold flex items-center justify-center text-white font-serif text-xl font-bold mr-2">T</div>
          <div className="text-2xl font-serif font-medium">
            <span className="text-toro-dark">TORO</span>
            <span className="text-toro-gold"> Consulting</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="font-medium text-toro-dark hover:text-toro-gold transition-colors">Home</Link>
          <Link to="/chi-siamo" className="font-medium text-toro-dark hover:text-toro-gold transition-colors">Chi Siamo</Link>
          <Link to="/servizi" className="font-medium text-toro-dark hover:text-toro-gold transition-colors">Servizi</Link>
          <Link to="/blog" className="font-medium text-toro-dark hover:text-toro-gold transition-colors">Blog</Link>
          <Link to="/contatti" className="font-medium text-toro-dark hover:text-toro-gold transition-colors">Contatti</Link>
          <Link to="/contatti" className="btn-primary">Consulenza Gratuita</Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-toro-dark focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`} style={{top: '0', paddingTop: '4rem'}}>
        <div className="flex flex-col space-y-6 p-8">
          <Link to="/" className="font-medium text-xl text-toro-dark hover:text-toro-gold transition-colors" onClick={closeMenu}>Home</Link>
          <Link to="/chi-siamo" className="font-medium text-xl text-toro-dark hover:text-toro-gold transition-colors" onClick={closeMenu}>Chi Siamo</Link>
          <Link to="/servizi" className="font-medium text-xl text-toro-dark hover:text-toro-gold transition-colors" onClick={closeMenu}>Servizi</Link>
          <Link to="/blog" className="font-medium text-xl text-toro-dark hover:text-toro-gold transition-colors" onClick={closeMenu}>Blog</Link>
          <Link to="/contatti" className="font-medium text-xl text-toro-dark hover:text-toro-gold transition-colors" onClick={closeMenu}>Contatti</Link>
          <Link to="/contatti" className="btn-primary text-center mt-4" onClick={closeMenu}>Consulenza Gratuita</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
