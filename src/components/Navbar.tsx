import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Logo from './Logo';
import { useIsMobile } from '@/hooks/use-mobile';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkBackground, setIsDarkBackground] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Check if we're on a path with dark background (add more as needed)
    const isDark = location.pathname === '/' || location.pathname.includes('/dark-background');
    setIsDarkBackground(isDark);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleNavigation = (path: string, hash?: string) => {
    setIsOpen(false);
    
    if (hash && location.pathname === path) {
      // We're already on the right page, just need to scroll to the right section
      const element = document.getElementById(hash);
      if (element) {
        // Adjust scroll position to account for header height
        const navbarHeight = 100; // Approximate navbar height plus some padding
        const yOffset = -navbarHeight;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
      return;
    }
    
    // Different page, navigate there first
    if (hash) {
      // Store the hash target in localStorage so we can scroll to it after navigation
      localStorage.setItem('scrollTarget', hash);
    }
    
    // Check if we're already on the path, if so just scroll to top
    if (location.pathname === path && !hash) {
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }
    
    // Otherwise navigate and scroll to top
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const navbarClasses = isScrolled 
    ? 'bg-white shadow-md py-2' 
    : 'bg-white/90 backdrop-blur-md shadow-lg py-2.5';

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navbarClasses}`}>
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

        {/* Mobile Menu */}
        {isMobile ? (
          <>
            <button 
              className="md:hidden text-toro-dark focus:outline-none" 
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetContent 
                side="right" 
                className="w-full bg-toro-dark p-0 flex flex-col"
              >
                <div className="flex justify-end p-4">
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:text-toro-gold focus:outline-none"
                    aria-label="Close menu"
                  >
                    <X size={24} />
                  </button>
                </div>
                <div className="flex flex-col space-y-6 p-8">
                  <button onClick={() => handleNavigation('/')} className="font-medium text-xl text-white hover:text-toro-gold transition-colors">Home</button>
                  <button onClick={() => handleNavigation('/chi-sono')} className="font-medium text-xl text-white hover:text-toro-gold transition-colors">Chi Sono</button>
                  <button onClick={() => handleNavigation('/servizi')} className="font-medium text-xl text-white hover:text-toro-gold transition-colors">Servizi</button>
                  <button onClick={() => handleNavigation('/blog')} className="font-medium text-xl text-white hover:text-toro-gold transition-colors">Blog</button>
                  <button onClick={() => handleNavigation('/contatti')} className="font-medium text-xl text-white hover:text-toro-gold transition-colors">Contatti</button>
                  <button onClick={() => handleNavigation('/contatti')} className="bg-toro-gold text-white text-center px-6 py-3 rounded-md hover:bg-toro-gold-light transition-colors mt-4">Consulenza Gratuita</button>
                </div>
              </SheetContent>
            </Sheet>
          </>
        ) : (
          <button 
            className="md:hidden text-toro-dark focus:outline-none" 
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
