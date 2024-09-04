import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Sidebar = ({ role }) => {
  const location = useLocation(); // Get the current location

  const links = role === 'admin' ? [
    { name: 'Admin Analytics', path: '/admin/analytics' },
    { name: 'Power BI', path: '/admin/analytics' },
    { name: 'Users', path: '/admin/users' },
    { name: 'Total Earnings', path: '/admin/totalearning' },
    { name: 'Special Offers', path: '/admin/SpecialOffers' },
    { name: 'Settings', path: '/user/settings' }
  ] : [
    { name: 'Admin Analytics', path: '/admin/analytics' },
    { name: 'Power BI', path: '/admin/analytics' },
    { name: 'Users', path: '/admin/users' },
    { name: 'Total Earnings', path: '/admin/totalearning' },
    { name: 'Special Offers', path: '/admin/SpecialOffers' },
    { name: 'Settings', path: '/user/settings' }
  ];

  return (
    <div className="fixed inset-y-0 left-0 w-64 bg-gray-900 text-white flex flex-col p-6 shadow-lg">
      <motion.h2
        className="text-3xl font-bold mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {role === 'admin' ? 'Admin Dashboard' : 'User Panel'}
      </motion.h2>
      <nav>
        <ul>
          {links.map((link, index) => (
            <motion.li
              key={link.name}
              className={`mb-6 ${
                location.pathname === link.path ? 'bg-gray-800 text-gray-300' : ''
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4, ease: 'easeOut' }}
            >
              <Link
                to={link.path}
                className={`block text-lg px-4 py-2 rounded ${
                  location.pathname === link.path ? 'font-bold' : 'hover:text-gray-300'
                } transition-colors duration-300 ease-in-out`}
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
