
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Hackathons', path: '/hackathons' },
    { label: 'For Students', path: '/students' },
    { label: 'Host', path: '/host' },
    { label: 'Sponsors', path: '/sponsors' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={cn(
      "fixed w-full top-0 z-50 transition-all duration-300",
      scrolled ? "bg-background/95 backdrop-blur-lg shadow-lg" : "bg-background/90 backdrop-blur-md",
      scrolled ? "border-b border-neon-magenta/40" : "border-b border-neon-magenta/30"
    )}>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link 
          to="/" 
          className={cn(
            "text-2xl md:text-3xl font-bold tracking-wider neon-text transition-all duration-300",
            scrolled ? "scale-90" : ""
          )}
        >
          MAXIMALLY
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="text-foreground hover:neon-text transition-all duration-200 tracking-wider hover:scale-105"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Button 
            className={cn(
              "bg-neon-ultraviolet hover:bg-neon-ultraviolet/80 text-white px-5 py-2 rounded-none neon-border-ultraviolet transition-all duration-300",
              scrolled ? "scale-95" : ""
            )}
          >
            JOIN DISCORD
          </Button>
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none transition-transform duration-200 hover:scale-110"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-neon-magenta" />
          ) : (
            <Menu className="w-6 h-6 text-neon-magenta" />
          )}
        </button>
      </div>

      {/* Mobile Menu with Animation */}
      <div className={cn(
        "md:hidden bg-black/95 backdrop-blur-md border-b border-neon-magenta/30 transition-all duration-300 overflow-hidden",
        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="container mx-auto px-4 py-3 space-y-4">
          {navItems.map((item, index) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "block py-2 text-foreground hover:neon-text transition-all duration-200 transform",
                isOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0",
                "transition-all duration-300",
                `delay-[${index * 50}ms]`
              )}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Button 
            className="w-full bg-neon-ultraviolet hover:bg-neon-ultraviolet/80 text-white px-5 py-2 rounded-none neon-border-ultraviolet"
            onClick={() => setIsOpen(false)}
          >
            JOIN DISCORD
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
