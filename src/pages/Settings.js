import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import Sidebar from '../components/Sidebar';
import { ThemeContext } from '../ThemeContext'; // Import ThemeContext

const Settings = ({ role }) => {
  const { theme, toggleTheme } = useContext(ThemeContext); // Get theme and toggle function from context

  // Example settings with additional functionalities
  const [settings, setSettings] = useState([
    { name: 'Notification', enabled: true },
    { name: 'Dark Mode', enabled: theme === 'dark' }, // Set initial state based on the current theme
    { name: 'Email Alerts', enabled: true },
    { name: 'Two-Factor Authentication (2FA)', enabled: false },
    { name: 'Auto-Logout Timer', enabled: 15 }, // Minutes
    { name: 'Language Preference', enabled: 'English' }
  ]);

  const languages = ['English', 'Spanish', 'French'];

  // Function to handle toggling settings
  const toggleSetting = (index) => {
    const newSettings = [...settings];
    if (newSettings[index].name === 'Dark Mode') {
      toggleTheme(); // Toggle the theme
    } else if (newSettings[index].name === 'Auto-Logout Timer') {
      const newTime = prompt("Set Auto-Logout Timer (in minutes)", newSettings[index].enabled);
      if (!isNaN(newTime) && newTime > 0) {
        newSettings[index].enabled = parseInt(newTime);
      }
    } else if (newSettings[index].name === 'Language Preference') {
      const selectedLanguage = prompt("Set Language Preference", newSettings[index].enabled);
      if (languages.includes(selectedLanguage)) {
        newSettings[index].enabled = selectedLanguage;
      }
    } else {
      newSettings[index].enabled = !newSettings[index].enabled;
    }
    setSettings(newSettings);
  };

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <Sidebar role={role} />

      {/* Main Content */}
      <motion.div
        className="flex-1 ml-64 p-8"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <motion.h1
          className="text-3xl font-bold text-gray-900 dark:text-white mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          Settings
        </motion.h1>

        <motion.div
          className="bg-white dark:bg-gray-800 shadow-xl rounded-lg p-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <motion.ul
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
            }}
          >
            {settings.map((setting, index) => (
              <motion.li
                key={index}
                className="flex justify-between items-center mb-6"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                <span className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                  {setting.name}
                </span>
                {setting.name === 'Auto-Logout Timer' || setting.name === 'Language Preference' ? (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="py-2 px-6 bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold shadow-md"
                  >
                    {setting.enabled.toString()}
                  </motion.div>
                ) : (
                  <motion.button
                    onClick={() => toggleSetting(index)}
                    className={`py-2 px-6 rounded-lg font-semibold shadow-md transition-all duration-300 ease-in-out ${
                      setting.enabled
                        ? 'bg-green-500 text-white hover:bg-green-600'
                        : 'bg-gray-300 text-gray-700 dark:bg-gray-600 dark:text-gray-400'
                    }`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {setting.enabled ? 'Enabled' : 'Disabled'}
                  </motion.button>
                )}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Settings;
