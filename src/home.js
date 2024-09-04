import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './home.css';



// src/pages/Home.js
import { Link } from 'react-router-dom';
function Home() {
const navigate = useNavigate();

return (
  <motion.section
    className="landing-section"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <div className="landing-content">
      <motion.h1
        className="landing-title"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        Welcome to ChatTicket
      </motion.h1>
      <motion.p
        className="landing-subtitle"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
      >
        Your one-stop solution for online ticketing with seamless chatbot support.
      </motion.p>
      <motion.button
        className="cta-button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate('/')}
      >
        Login
      </motion.button>
    </div>
    <motion.div
      className="landing-image"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
    >
      <img src="https://www.chatbot.com/docs/chat-widget-api/header-image-mobile.6d1270eef30d7c3cfeaceb07ddfeade27287b444dd6bf860536272afbfe458f0.png" alt="ChatTicket Landing" />
    </motion.div>
  </motion.section>
);
}

export default Home;

