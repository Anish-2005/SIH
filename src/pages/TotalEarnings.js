import React from 'react';
import Sidebar from './Sidebar'; // Assuming Sidebar is in the same directory
import { motion } from 'framer-motion';

const TotalEarningsPage = ({ role }) => {
  // Example breakdown of earnings, could be fetched from an API
  const earningsBreakdown = {
    productSales: 55000,
    subscriptionFees: 30000,
    serviceCharges: 25000,
    miscellaneous: 15000,
  };

  // Calculate total earnings
  const totalEarnings = Object.values(earningsBreakdown).reduce(
    (acc, value) => acc + value,
    0
  );

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar role={role} />

      {/* Main Content */}
      <div className="flex-1 ml-64 p-10 bg-gray-100">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 shadow-2xl rounded-xl p-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-6">
            Total Earnings
          </h2>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-4xl font-extrabold text-white mb-4"
          >
            ${totalEarnings.toLocaleString()}
          </motion.p>

          <div className="space-y-4">
            {Object.entries(earningsBreakdown).map(([key, value], index) => (
              <motion.div
                key={key}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  ease: 'easeOut',
                }}
                className="flex justify-between items-center bg-white bg-opacity-10 rounded-lg p-4"
              >
                <p className="text-lg font-medium text-white capitalize">
                  {key.replace(/([A-Z])/g, ' $1')} {/* Formats camelCase */}
                </p>
                <p className="text-lg font-semibold text-white">
                  ${value.toLocaleString()}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TotalEarningsPage;
