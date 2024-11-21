import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar'; // Import Sidebar component
import MenuBar from '../components/MenuBar'; // Import MenuBar component
import Footer from '../components/Footer'; // Import Footer component

const Settings = () => {
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState('English');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // State to track screen size

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Update isMobile on window resize
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleNotificationsChange = () => {
    setNotifications(!notifications);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <div className="settings-container min-h-screen flex flex-col">
      {/* Conditionally render Sidebar or MenuBar based on screen size */}
      {isMobile ? <MenuBar /> : <Sidebar />}

      <main className="main-content flex-grow">
        <h2 className="settings-title text-4xl font-semibold text-blue-900 text-center mb-8 mt-14">Settings</h2>
        <p className="settings-description mb-8">Customize your application settings here.</p>

        <div className="setting-item mb-6">
          <label className="setting-label flex items-center space-x-2">
            <input
              type="checkbox"
              checked={notifications}
              onChange={handleNotificationsChange}
              className="setting-checkbox"
            />
            <span>Enable Notifications</span>
          </label>
        </div>

        <div className="setting-item mb-6">
          <label htmlFor="language" className="setting-label block text-gray-700">Language</label>
          <select
            id="language"
            value={language}
            onChange={handleLanguageChange}
            className="setting-select w-full p-2 border border-gray-300 rounded-lg"
          >
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            {/* Add more languages as needed */}
          </select>
        </div>

        <div className="setting-item mb-6">
          <label htmlFor="case-templates" className="setting-label block text-gray-700">Default Case Templates</label>
          <select id="case-templates" className="setting-select w-full p-2 border border-gray-300 rounded-lg">
            <option value="template1">Template 1</option>
            <option value="template2">Template 2</option>
            {/* Add more templates as needed */}
          </select>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Settings;
