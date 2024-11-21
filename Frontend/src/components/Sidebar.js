import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import './component-styles/Sidebar.css'; // Updated CSS for the menubar styling

const Sidebar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState('');
  const [badgeNumber, setBadgeNumber] = useState('');

  useEffect(() => {
    const storedName = localStorage.getItem('name');
    const storedBadgeNumber = localStorage.getItem('badgeNumber');
    if (storedName && storedBadgeNumber) {
      setName(storedName);
      setBadgeNumber(storedBadgeNumber);
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <motion.nav>

      <div className="sidebar-content bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-8">
        {/* Logo and Title */}
        <div className="sidebar-logo">
        <h1 className="text-7xl font-bold text-white ml-6">
        <a href="/">
            LawAI
        </a>
        </h1>


          <span className="material-icons text-white">gavel</span>
        </div>

        {/* Navigation Links */}
        <div className="sidebar-links flex space-x-4">
          <NavLink to="/home/query" activeClassName="active" className="sidebar-link">AI Lawyer</NavLink>
          <NavLink to="/bareacts" activeClassName="active" className="sidebar-link">Bare Acts</NavLink>
          <NavLink to="/home/database" activeClassName="active" className="sidebar-link">Database</NavLink>
          <NavLink to="/home/settings" activeClassName="active" className="sidebar-link">Settings</NavLink>
          
          {/* Conditional Rendering of Avatar or Text */}
          <NavLink to="/home/login" activeClassName="active" className="sidebar-link">
            {isLoggedIn ? (
              <img
                src="https://www.pngall.com/wp-content/uploads/12/Avatar-PNG-Images.png"
                alt="User Profile"
                className="user-avatar rounded-full w-8 h-8 object-cover"
              />
            ) : (
              'Login'
            )}
          </NavLink>
        </div>

        
      </div>
    </motion.nav>
  );
};

export default Sidebar;
