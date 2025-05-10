
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-background/90 backdrop-blur-md border-t border-neon-magenta/30 py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-md font-pixel mb-4 neon-text">MAXIMALLY</h3>
            <p className="text-sm text-gray-300 mb-4">
              Where we run multiple student-focused online hackathons every year and 
              offer 'Hackathon-as-a-Service' to schools, clubs, and companies.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-magenta">
                Twitter
              </a>
              <a href="https://discord.gg/S2YyGtBWKa" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-cyan">
                Discord
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-ultraviolet">
                GitHub
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-md font-pixel mb-4 neon-text-cyan">LINKS</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/hackathons" className="text-gray-400 hover:text-neon-cyan">
                  Hackathons
                </Link>
              </li>
              <li>
                <Link to="/students" className="text-gray-400 hover:text-neon-cyan">
                  For Students
                </Link>
              </li>
              <li>
                <Link to="/host" className="text-gray-400 hover:text-neon-cyan">
                  Host a Hackathon
                </Link>
              </li>
              <li>
                <Link to="/sponsors" className="text-gray-400 hover:text-neon-cyan">
                  Sponsors
                </Link>
              </li>
              <li>
                <Link to="/judges-mentors" className="text-gray-400 hover:text-neon-cyan">
                  Judges & Mentors
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-neon-cyan">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-md font-pixel mb-4 neon-text-ultraviolet">POLICIES</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/submission-guidelines" className="text-gray-400 hover:text-neon-ultraviolet">
                  Submission Guidelines
                </Link>
              </li>
              <li>
                <Link to="/discord-guidelines" className="text-gray-400 hover:text-neon-ultraviolet">
                  Discord Guidelines
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-neon-ultraviolet">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/our-commitment" className="text-gray-400 hover:text-neon-ultraviolet">
                  Our Commitment
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Maximally. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
