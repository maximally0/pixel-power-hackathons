
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/40 border-t border-neon-magenta/30 py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl mb-4 neon-text-cyan">MAXIMALLY</h3>
            <p className="text-gray-300">
              Where we run multiple student-focused online hackathons every year and offer 
              "Hackathon-as-a-Service" to schools, clubs, and companies.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl mb-4 neon-text-ultraviolet">LINKS</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:neon-text transition-all">HOME</Link>
              </li>
              <li>
                <Link to="/hackathons" className="text-gray-300 hover:neon-text transition-all">HACKATHONS</Link>
              </li>
              <li>
                <Link to="/students" className="text-gray-300 hover:neon-text transition-all">FOR STUDENTS</Link>
              </li>
              <li>
                <Link to="/host" className="text-gray-300 hover:neon-text transition-all">HOST A HACKATHON</Link>
              </li>
              <li>
                <Link to="/sponsors" className="text-gray-300 hover:neon-text transition-all">SPONSORS & JUDGES</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:neon-text transition-all">CONTACT</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl mb-4 neon-text">CONNECT</h3>
            <div className="space-y-2">
              <a 
                href="https://discord.gg/maximally" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-gray-300 hover:neon-text-ultraviolet transition-all"
              >
                DISCORD
              </a>
              <a 
                href="https://devpost.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-gray-300 hover:neon-text-cyan transition-all"
              >
                DEVPOST
              </a>
              <a 
                href="https://github.com/maximally" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-gray-300 hover:neon-text transition-all"
              >
                GITHUB
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-neon-magenta/20 mt-8 pt-6 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} MAXIMALLY. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
