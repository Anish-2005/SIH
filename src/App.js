import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminDashboard from './pages/AdminDashboard';
import AdminUsers from './pages/AdminUsers';
import UserDashboard from './pages/UserDashboard';
import UserProfile from './pages/UserProfile';
import Settings from './pages/Settings';
import Login from './pages/Login';
import Home from './home'; // Import the Home component
import { ThemeProvider } from './ThemeContext';
import TotalEarnings from './components/TotalEarnings';
import AdminAnalytics from './pages/AdminAnalytics';
import SpecialOffers from './components/SpecialOffers';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/analytics" element={<AdminAnalytics />} />
            <Route path="/admin/users" element={<AdminUsers />} />
            <Route path="/admin/totalearning" element={<TotalEarnings />} />
            <Route path="/admin/SpecialOffers" element={<SpecialOffers />} />
            <Route path="/admin/settings" element={<Settings role="admin" />} />
            <Route path="/user" element={<UserDashboard />} />
            <Route path="/user/profile" element={<UserProfile />} />
            <Route path="/user/settings" element={<Settings role="user" />} />
            <Route path="/home" element={<Home />} /> {/* Add this route */}
            <Route path="/" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
