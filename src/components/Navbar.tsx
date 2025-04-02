
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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

  const handleNavigation = (path: string) => {
    closeMenu();
    
    // Check if we're already on the path, if so just scroll to top
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }
    
    // Otherwise navigate and scroll to top
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-1' : 'bg-white/90 backdrop-blur-md shadow-lg py-2'}`}>
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center" onClick={() => handleNavigation('/')}>
          <Logo size="small" className="mr-3" />
          <div className="text-2xl font-serif font-medium">
            <span className="text-toro-dark">TORO</span>
            <span className="text-toro-gold"> Consulting</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => handleNavigation('/')} className="font-medium text-toro-dark hover:text-toro-gold transition-colors">Home</button>
          <button onClick={() => handleNavigation('/chi-sono')} className="font-medium text-toro-dark hover:text-toro-gold transition-colors">Chi Sono</button>
          <button onClick={() => handleNavigation('/servizi')} className="font-medium text-toro-dark hover:text-toro-gold transition-colors">Servizi</button>
          <button onClick={() => handleNavigation('/blog')} className="font-medium text-toro-dark hover:text-toro-gold transition-colors">Blog</button>
          <button onClick={() => handleNavigation('/contatti')} className="font-medium text-toro-dark hover:text-toro-gold transition-colors">Contatti</button>
          <button onClick={() => handleNavigation('/contatti')} className="btn-primary">Consulenza Gratuita</button>
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
          <button onClick={() => handleNavigation('/')} className="font-medium text-xl text-toro-dark hover:text-toro-gold transition-colors">Home</button>
          <button onClick={() => handleNavigation('/chi-sono')} className="font-medium text-xl text-toro-dark hover:text-toro-gold transition-colors">Chi Sono</button>
          <button onClick={() => handleNavigation('/servizi')} className="font-medium text-xl text-toro-dark hover:text-toro-gold transition-colors">Servizi</button>
          <button onClick={() => handleNavigation('/blog')} className="font-medium text-xl text-toro-dark hover:text-toro-gold transition-colors">Blog</button>
          <button onClick={() => handleNavigation('/contatti')} className="font-medium text-xl text-toro-dark hover:text-toro-gold transition-colors">Contatti</button>
          <button onClick={() => handleNavigation('/contatti')} className="btn-primary text-center mt-4">Consulenza Gratuita</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
