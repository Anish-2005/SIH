import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (role) => {
    if (role === 'admin') {
      navigate('/admin');
    } else {
      navigate('/user');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <button
          onClick={() => handleLogin('admin')}
          className="bg-blue-500 text-white py-2 px-4 rounded-full w-full mb-4"
        >
          Admin Login
        </button>
        <button
          onClick={() => handleLogin('user')}
          className="bg-green-500 text-white py-2 px-4 rounded-full w-full"
        >
          User Login
        </button>
      </div>
    </div>
  );
};

export default Login;
