
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
    { 
      label: 'Resources',
      items: [
        { label: 'Submission Guidelines', path: '/submission-guidelines' },
        { label: 'Discord Guidelines', path: '/discord-guidelines' },
        { label: 'Privacy Policy', path: '/privacy-policy' },
      ]
    },
    { label: 'Host', path: '/host' },
    { 
      label: 'Sponsors',
      items: [
        { label: 'Sponsors', path: '/sponsors' },
        { label: 'Judges & Mentors', path: '/judges-mentors' },
      ]
    },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={cn(
      "fixed w-full top-0 z-50 transition-all duration-300",
      scrolled ? "bg-background/95 backdrop-blur-lg shadow-lg" : "bg-background/90 backdrop-blur-md",
      scrolled ? "border-b border-neon-magenta/40" : "border-b border-neon-magenta/30"
    )}>
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link 
          to="/" 
          className={cn(
            "text-xl md:text-2xl font-bold tracking-[0.2em] neon-text transition-all duration-300 hover:scale-105",
            scrolled ? "scale-95" : ""
          )}
        >
          MAXIMALLY
        </Link>

        <div className="hidden md:flex items-center">
          {navItems.map((item) => (
            item.items ? (
              <div key={item.label} className="relative group">
                <button className="text-foreground hover:neon-text transition-all duration-200 tracking-[0.15em] hover:scale-105 text-xs uppercase py-2 px-4">
                  {item.label}
                </button>
                <div className="absolute top-full left-0 hidden group-hover:block bg-background/95 backdrop-blur-lg border border-neon-magenta/30 min-w-[200px]">
                  {item.items.map((subItem) => (
                    <Link
                      key={subItem.path}
                      to={subItem.path}
                      className="block px-4 py-2 text-xs uppercase hover:bg-neon-magenta/10 hover:text-neon-magenta transition-colors duration-200"
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.path}
                to={item.path}
                className="text-foreground hover:neon-text transition-all duration-200 tracking-[0.15em] hover:scale-105 text-xs uppercase py-2 px-4"
              >
                {item.label}
              </Link>
            )
          ))}
        </div>

        <div className="hidden md:block">
          <Button 
            className={cn(
              "bg-neon-ultraviolet hover:bg-neon-ultraviolet/80 text-white px-6 py-2 rounded-none neon-border-ultraviolet transition-all duration-300 text-xs tracking-[0.15em] font-bold",
              scrolled ? "scale-95" : "",
              "hover:scale-105 hover:translate-y-[-2px]"
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
        "md:hidden fixed inset-x-0 top-[64px] bg-black/95 backdrop-blur-md border-b border-neon-magenta/30 transition-all duration-300 overflow-auto shadow-lg z-50",
        isOpen ? "max-h-[calc(100vh-64px)] opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"
      )}
      style={{ 
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        WebkitOverflowScrolling: 'touch'
      }}>
        <div className="container mx-auto px-4 py-6 space-y-6">
          {navItems.map((item, index) => (
            item.items ? (
              <div key={item.label} className="space-y-1">
                <div className="py-2 text-foreground text-sm tracking-[0.15em] uppercase opacity-60">
                  {item.label}
                </div>
                {item.items.map((subItem, subIndex) => (
                  <Link
                    key={subItem.path}
                    to={subItem.path}
                    className={cn(
                      "block py-2 pl-4 text-foreground hover:neon-text transition-all duration-200 transform text-sm tracking-[0.15em] uppercase",
                      isOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0",
                      "transition-all duration-300",
                      `delay-[${(index * 3 + subIndex) * 50}ms]`
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {subItem.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "block py-3 text-foreground hover:neon-text transition-all duration-200 transform text-sm tracking-[0.15em] uppercase",
                  isOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0",
                  "transition-all duration-300",
                  `delay-[${index * 50}ms]`
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            )
          ))}
          <Button 
            className="w-full bg-neon-ultraviolet hover:bg-neon-ultraviolet/80 text-white px-5 py-3 rounded-none neon-border-ultraviolet text-xs tracking-[0.15em] uppercase font-bold"
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
