import React from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';
import Sidebar from './Sidebar'; // Ensure Sidebar is in the same directory

const ticketData = [
  { name: 'Jan', tickets: 400, resolutionTime: 24 },
  { name: 'Feb', tickets: 300, resolutionTime: 20 },
  { name: 'Mar', tickets: 200, resolutionTime: 18 },
  { name: 'Apr', tickets: 278, resolutionTime: 22 },
  { name: 'May', tickets: 189, resolutionTime: 25 },
];

const earningsData = [
  { name: 'Jan', earnings: 5000, cost: 2000, profit: 3000 },
  { name: 'Feb', earnings: 4500, cost: 1800, profit: 2700 },
  { name: 'Mar', earnings: 6000, cost: 2500, profit: 3500 },
  { name: 'Apr', earnings: 5500, cost: 2200, profit: 3300 },
  { name: 'May', earnings: 7000, cost: 2800, profit: 4200 },
];

const AdminAnalyticsPage = ({ role }) => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar role={role} />

      {/* Main Content */}
      <div className="flex-1 ml-64 p-10">
        <motion.div
          className="bg-white shadow-xl rounded-lg p-8 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Admin Analytics
          </h2>

          {/* Ticket Analytics Section */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Ticket Analytics</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart
                data={ticketData}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="tickets"
                  stroke="#4f46e5"
                  strokeWidth={3}
                  activeDot={{ r: 8 }}
                />
                <Line
                  type="monotone"
                  dataKey="resolutionTime"
                  stroke="#22c55e"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Earnings, Cost, and Profit Section */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Earnings, Cost & Profit
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={earningsData}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="earnings" fill="#4f46e5" radius={[10, 10, 0, 0]} />
                <Bar dataKey="cost" fill="#22c55e" radius={[10, 10, 0, 0]} />
                <Bar dataKey="profit" fill="#fbbf24" radius={[10, 10, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminAnalyticsPage;
