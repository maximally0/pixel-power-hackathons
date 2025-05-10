
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
    <nav className="fixed w-full top-0 z-50 bg-background/90 backdrop-blur-md border-b border-neon-magenta/30">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link 
          to="/" 
          className="text-2xl md:text-3xl font-bold tracking-wider neon-text hover:animate-flicker"
        >
          MAXIMALLY
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="text-foreground hover:neon-text transition duration-200 tracking-wider"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Discord Button */}
        <div className="hidden md:block">
          <Button className="bg-neon-ultraviolet hover:bg-neon-ultraviolet/80 text-white px-5 py-2 rounded-none neon-border-ultraviolet">
            JOIN DISCORD
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-foreground focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-neon-magenta" />
            ) : (
              <Menu className="w-6 h-6 text-neon-magenta" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md border-b border-neon-magenta/30">
          <div className="container mx-auto px-4 py-3 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block py-2 text-foreground hover:neon-text"
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
      )}
    </nav>
  );
};

export default Navbar;
