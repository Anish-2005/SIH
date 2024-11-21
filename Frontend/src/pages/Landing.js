import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import KeyFeatures from '../components/KeyFeatures';
import '../styles/Landing.css';
import img from '../images/Landing.jpg';
import Footer from '../components/Footer';

const Landing = () => {
  const navigate = useNavigate();
  const [showButton, setShowButton] = useState(false);

  const handleDownload = () => {
    navigate('/download');
  };

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    
    <div className="landing bg-gray-100 text-gray-900 font-sans">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-blue-700 to-blue-800 text-white py-6 shadow-lg">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-wide">LawAI - Government of India</div>
          <button
            aria-label="Download resources"
            className="text-xl transition transform hover:scale-105 hover:shadow-lg p-2 rounded-full"
            onClick={handleDownload}
            style={{ cursor: 'pointer' }}
          >
            <span className="material-icons">file_download</span>
          </button>
        </div>
      </header>
 {/* Back to Top Button */}
 {showButton && (
  <button
    onClick={scrollToTop}
    className="fixed bottom-6 right-6 bg-blue-600 text-white w-12 h-12 rounded-full shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-110 flex items-center justify-center z-50"
    aria-label="Back to top"
  >
    <span className="material-icons text-lg">arrow_upward</span>
  </button>
)}


      {/* Navigation */}
      <nav className="bg-blue-700 text-white text-sm py-4 shadow-md">
        <div className="container mx-auto px-6 flex justify-center space-x-8">
          <a href="#home" className="text-lg font-medium hover:text-blue-300 transition duration-200">
            Home
          </a>
          <a href="#features" className="text-lg font-medium hover:text-blue-300 transition duration-200">
            Features
          </a>
          <a href="#testimonials" className="text-lg font-medium hover:text-blue-300 transition duration-200">
            Testimonials
          </a>
          <a href="#contact" className="text-lg font-medium hover:text-blue-300 transition duration-200">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-8">
      <section className="hero bg-gradient-to-r from-indigo-600 to-indigo-400 py-16 text-center rounded-lg shadow-2xl">
        <h1 className="text-5xl font-extrabold text-white mb-6 tracking-wide leading-tight">
          Empowering Law Enforcement with AI
        </h1>
        <p className="text-white text-lg md:text-xl mb-8 leading-relaxed max-w-2xl mx-auto">
          Access accurate legal information and streamline the FIR writing process using advanced AI technology, making law enforcement more efficient and transparent.
        </p>
        <a
          href="/home/query"
          className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-indigo-100 transition duration-300"
        >
          Get Started
        </a>
      </section>



        {/* Image Section */}
        <section className="image-section py-16 bg-gradient-to-r from-gray-100 to-white mt-12">
  <div className="container mx-auto text-center relative">
    {/* Image */}
    <div className="relative mb-8">
      <img
        src={img}
        alt="Indian Government Building"
        className="mx-auto rounded-xl shadow-2xl transform transition-transform hover:scale-105"
        style={{ maxHeight: '500px', objectFit: 'cover', width: '100%' }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40 rounded-xl">
        <p className="text-white text-lg md:text-2xl font-semibold text-center px-6 py-4">
          An initiative representing trust and authority abiding by the constitution.
        </p>
      </div>
    </div>

    {/* Additional Description */}
    <p className="text-gray-700 text-md md:text-xl mx-auto max-w-6xl px-4">
      This initiative is designed to bring the power of technology to law enforcement agencies, providing them with the resources they need to uphold justice and maintain public trust.
    </p>
  </div>
</section>



        {/* Features Section */}
        <section id="features" className="features bg-gray-50 py-12 mt-10">
          <KeyFeatures />
        </section>
        <section className="vision bg-gray-50 py-16">
  <div className="container mx-auto text-center px-6">
    {/* Vision Icon */}
    <div className="flex justify-center mb-6">
      <div className="bg-blue-100 p-4 rounded-full shadow-lg">
        <span className="material-icons text-blue-600 text-4xl">visibility</span>
      </div>
    </div>

    {/* Vision Heading */}
    <h2 className="text-3xl font-extrabold text-blue-800 mb-4">Our Vision</h2>
    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
      At LawAI, we aim to bridge the gap between law enforcement and advanced technology, empowering officers with tools to uphold justice swiftly and accurately across the nation.
    </p>

    {/* Vision Details */}
    <div className="mt-10 flex flex-wrap justify-center gap-8">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3 lg:w-1/4">
        <h3 className="text-xl font-semibold text-blue-700 mb-2">Innovative AI Tools</h3>
        <p className="text-gray-700 text-sm">
          Leveraging the latest AI advancements to bring unmatched precision in legal processes.
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3 lg:w-1/4">
        <h3 className="text-xl font-semibold text-blue-700 mb-2">Empowering Officers</h3>
        <p className="text-gray-700 text-sm">
          Providing law enforcement with resources that make their work efficient and impactful.
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3 lg:w-1/4">
        <h3 className="text-xl font-semibold text-blue-700 mb-2">Nationwide Impact</h3>
        <p className="text-gray-700 text-sm">
          Reaching every corner of the country to ensure justice is accessible to all.
        </p>
      </div>
    </div>
  </div>
</section>
{/* 
      <section className="impact bg-blue-50 py-12 text-center">
  <h2 className="text-2xl font-bold text-blue-800 mb-6">Our Impact</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div className="stat">
      <h3 className="text-xl font-semibold text-blue-600">500+</h3>
      <p className="text-gray-600">Cases Assisted</p>
    </div>
    <div className="stat">
      <h3 className="text-xl font-semibold text-blue-600">99.5%</h3>
      <p className="text-gray-600">Accuracy in Legal References</p>
    </div>
    <div className="stat">
      <h3 className="text-xl font-semibold text-blue-600">24/7</h3>
      <p className="text-gray-600">Support Available</p>
    </div>
  </div>
</section> */}


        {/* Testimonials Section
        <section id="testimonials" className="testimonials bg-blue-50 py-12 mt-10 rounded-lg shadow-lg">
          <h2 className="text-center text-3xl font-semibold text-blue-800 mb-6">What Our Users Say</h2>
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-around space-y-6 md:space-y-0 md:space-x-6">
            <blockquote className="text-gray-700 bg-white p-6 rounded-lg shadow-md w-full md:w-1/3 text-center">
              <p className="italic">"LawAI helped us streamline our FIR process with ease."</p>
              <footer className="mt-4 text-blue-700">- Officer A. Sharma</footer>
            </blockquote>
            <blockquote className="text-gray-700 bg-white p-6 rounded-lg shadow-md w-full md:w-1/3 text-center">
              <p className="italic">"An invaluable tool for legal accuracy."</p>
              <footer className="mt-4 text-blue-700">- Lawyer M. Khan</footer>
            </blockquote>
            <blockquote className="text-gray-700 bg-white p-6 rounded-lg shadow-md w-full md:w-1/3 text-center">
              <p className="italic">"Efficient and reliable for our daily operations."</p>
              <footer className="mt-4 text-blue-700">- Inspector L. Singh</footer>
            </blockquote>
          </div>
        </section> */}
        <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-16 px-6">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    {/* Left Section */}
    <div className="text-center md:text-left space-y-6">
      <h2 className="text-4xl font-bold text-blue-900">Get in Touch</h2>
      <p className="text-gray-600 text-lg">
        Have questions, feedback, or just want to say hello? Fill out the form or reach us via our contact details below. We're here to help!
      </p>
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <i className="fas fa-envelope text-blue-500"></i>
          <span className="text-gray-700">info@example.com</span>
        </div>
        <div className="flex items-center space-x-3">
          <i className="fas fa-phone-alt text-blue-500"></i>
          <span className="text-gray-700">+123 456 7890</span>
        </div>
        <div className="flex items-center space-x-3">
          <i className="fas fa-map-marker-alt text-blue-500"></i>
          <span className="text-gray-700">123 Street Name, City, Country</span>
        </div>
      </div>
    </div>

    {/* Right Section */}
    <div className="bg-white shadow-lg rounded-lg p-8 space-y-6" id="contact">
      <h3 className="text-2xl font-semibold text-gray-800">Send us a Message</h3>
      <form className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm font-medium text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            className="mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Your Email"
            className="mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="text-sm font-medium text-gray-600">
            Message
          </label>
          <textarea
            id="message"
            rows="4"
            placeholder="Write your message here..."
            className="mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</div>


      </main>

      <Footer />
    </div>
  );
};

export default Landing;
