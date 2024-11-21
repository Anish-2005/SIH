import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-600 text-white py-12 mt-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left space-y-6 md:space-y-0">
          {/* Logo and copyright */}
          <div className="text-center md:text-left">
            <p className="text-2xl font-semibold text-yellow-400">
              <Link to="/">LawAI - Government of India</Link>
            </p>
            <p className="text-lg mt-2">
              &copy; 2024 <Link to="/team" className="text-yellow-300 hover:text-yellow-500 transition-colors">CODE-A-COLA</Link>. All rights reserved.
            </p>
          </div>

          {/* Footer Navigation Links */}
          <nav className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-6 text-sm">
            <Link to="/privacypolicy" className="hover:text-yellow-300 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-yellow-300 transition-colors">Terms & Conditions</Link>
            <Link to="/accessibility" className="hover:text-yellow-300 transition-colors">Accessibility</Link>
          </nav>
        </div>

        {/* Footer Bottom Section */}
        <div className="text-center mt-6 text-xs text-gray-400">
          <p>Made with ❤️ by <Link to="/team" className="text-yellow-300 hover:text-yellow-500 transition-colors">CODE-A-COLA</Link> For a smarter tomorrow.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
