import React from 'react';
import { motion } from 'framer-motion';

const UserDashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">User Dashboard</h1>
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
        className="shadow-lg rounded-lg bg-white p-6"
      >
        <h2 className="text-xl font-semibold mb-2">Welcome to the User Panel!</h2>
        <p className="text-gray-600">This is where users can view their activities, manage their profile, and interact with the content.</p>
      </motion.div>
    </div>
  );
};

export default UserDashboard;
