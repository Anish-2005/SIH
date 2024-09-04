import React from 'react';
import { motion } from 'framer-motion';
import Sidebar from './Sidebar'; // Ensure Sidebar is correctly imported

const SpecialOffers = ({ role }) => {
  const offers = [
    { id: 1, title: '10% off on annual subscription', validUntil: '2024-12-31' },
    { id: 2, title: 'Buy one get one free', validUntil: '2024-11-15' },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar role={role} />

      {/* Main Content */}
      <div className="flex-1 ml-64 p-10">
        <motion.div
          className="bg-white shadow-xl rounded-lg p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Special Offers & Promotions</h2>

          <motion.ul
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } }
            }}
          >
            {offers.map((offer) => (
              <motion.li
                key={offer.id}
                className="mb-6 p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <h3 className="text-2xl font-bold text-white mb-2">{offer.title}</h3>
                <p className="text-lg text-gray-200">Valid until: {offer.validUntil}</p>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </div>
  );
};

export default SpecialOffers;
