import React from 'react';
import Sidebar from '../components/Sidebar';
import { motion } from 'framer-motion';

const AdminUsers = () => {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active', lastLogin: '2024-09-01' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Inactive', lastLogin: '2024-08-25' },
    { id: 3, name: 'Michael Johnson', email: 'michael@example.com', role: 'Admin', status: 'Active', lastLogin: '2024-09-03' },
    { id: 4, name: 'Emily Davis', email: 'emily@example.com', role: 'User', status: 'Active', lastLogin: '2024-08-30' },
    { id: 5, name: 'David Wilson', email: 'david@example.com', role: 'User', status: 'Active', lastLogin: '2024-09-02' },
    { id: 6, name: 'Sophia Martinez', email: 'sophia@example.com', role: 'User', status: 'Inactive', lastLogin: '2024-08-22' },
    { id: 7, name: 'James Brown', email: 'james@example.com', role: 'Admin', status: 'Active', lastLogin: '2024-09-04' },
    { id: 8, name: 'Olivia Garcia', email: 'olivia@example.com', role: 'User', status: 'Active', lastLogin: '2024-08-29' },
    { id: 9, name: 'Liam Miller', email: 'liam@example.com', role: 'User', status: 'Inactive', lastLogin: '2024-08-21' },
    { id: 10, name: 'Isabella Rodriguez', email: 'isabella@example.com', role: 'Admin', status: 'Active', lastLogin: '2024-09-01' },
    { id: 11, name: 'Lucas Perez', email: 'lucas@example.com', role: 'User', status: 'Active', lastLogin: '2024-09-03' },
    { id: 12, name: 'Mia Gonzalez', email: 'mia@example.com', role: 'User', status: 'Inactive', lastLogin: '2024-08-20' },
    { id: 13, name: 'Alexander Martinez', email: 'alexander@example.com', role: 'Admin', status: 'Active', lastLogin: '2024-09-02' },
    { id: 14, name: 'Ava Hernandez', email: 'ava@example.com', role: 'User', status: 'Active', lastLogin: '2024-08-28' },
    { id: 15, name: 'Ethan Lee', email: 'ethan@example.com', role: 'User', status: 'Inactive', lastLogin: '2024-08-23' },
    { id: 16, name: 'Mason Thomas', email: 'mason@example.com', role: 'Admin', status: 'Active', lastLogin: '2024-09-03' },
    { id: 17, name: 'Charlotte Thompson', email: 'charlotte@example.com', role: 'User', status: 'Active', lastLogin: '2024-08-27' },
    { id: 18, name: 'Amelia White', email: 'amelia@example.com', role: 'User', status: 'Inactive', lastLogin: '2024-08-18' },
    { id: 19, name: 'Elijah Harris', email: 'elijah@example.com', role: 'Admin', status: 'Active', lastLogin: '2024-09-02' },
    { id: 20, name: 'Abigail Martin', email: 'abigail@example.com', role: 'User', status: 'Active', lastLogin: '2024-08-24' },
    { id: 21, name: 'Benjamin Jackson', email: 'benjamin@example.com', role: 'Admin', status: 'Active', lastLogin: '2024-09-04' },
    { id: 22, name: 'Ella Martinez', email: 'ella@example.com', role: 'User', status: 'Inactive', lastLogin: '2024-08-19' },
    { id: 23, name: 'Jack King', email: 'jack@example.com', role: 'User', status: 'Active', lastLogin: '2024-08-26' },
    { id: 24, name: 'Scarlett Scott', email: 'scarlett@example.com', role: 'User', status: 'Inactive', lastLogin: '2024-08-20' },
    { id: 25, name: 'William Moore', email: 'william@example.com', role: 'Admin', status: 'Active', lastLogin: '2024-09-01' },
    { id: 26, name: 'Sofia Taylor', email: 'sofia@example.com', role: 'User', status: 'Active', lastLogin: '2024-08-30' },
    { id: 27, name: 'Daniel Anderson', email: 'daniel@example.com', role: 'User', status: 'Inactive', lastLogin: '2024-08-22' },
    { id: 28, name: 'Mila Martinez', email: 'mila@example.com', role: 'User', status: 'Active', lastLogin: '2024-09-02' },
    { id: 29, name: 'Henry Martinez', email: 'henry@example.com', role: 'Admin', status: 'Active', lastLogin: '2024-09-03' },
    { id: 30, name: 'Grace Brown', email: 'grace@example.com', role: 'User', status: 'Active', lastLogin: '2024-08-25' },
  ];

  return (
    <div className="flex">
      <Sidebar role="admin" />
      <motion.div
        className="flex-1 p-8 ml-64"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <h1 className="text-3xl font-bold mb-6">User Management</h1>
        <div className="bg-white shadow-lg rounded-lg p-8 overflow-x-auto">
          <table className="min-w-full text-left">
            <thead>
              <tr>
                <th className="border-b px-4 py-2">ID</th>
                <th className="border-b px-4 py-2">Name</th>
                <th className="border-b px-4 py-2">Email</th>
                <th className="border-b px-4 py-2">Role</th>
                <th className="border-b px-4 py-2">Status</th>
                <th className="border-b px-4 py-2">Last Login</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <motion.tr
                  key={user.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="hover:bg-gray-100 transition-colors duration-200"
                >
                  <td className="border-b px-4 py-2">{user.id}</td>
                  <td className="border-b px-4 py-2">{user.name}</td>
                  <td className="border-b px-4 py-2">{user.email}</td>
                  <td className="border-b px-4 py-2">{user.role}</td>
                  <td className={`border-b px-4 py-2 ${user.status === 'Active' ? 'text-green-600' : 'text-red-600'}`}>
                    {user.status}
                  </td>
                  <td className="border-b px-4 py-2">{user.lastLogin}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminUsers;
