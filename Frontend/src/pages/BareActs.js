import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import MenuBar from '../components/MenuBar';
import '../styles/BareActs.css';
import axios from 'axios';
import Footer from '../components/Footer';

const BareActs = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [laws, setLaws] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Determine if the screen is mobile-sized
  const [showButton, setShowButton] = useState(false); // For the Back to Top button

  useEffect(() => {
    const fetchLaws = async () => {
      try {
        const response = await axios.get('https://chatbot-for-fir-backend.vercel.app/api/laws/acts');
        setLaws(response.data);
      } catch (err) {
        console.error('Error fetching laws:', err);
        setError('Failed to fetch laws data.');
      }
    };

    fetchLaws();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Update `isMobile` on screen resize
    };

    const handleScroll = () => {
      setShowButton(window.scrollY > 200); // Show button after scrolling 200px
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get('https://chatbot-for-fir-backend.vercel.app/api/laws/search', {
        params: { keyword: searchQuery },
      });
      setSearchResult(response.data);
    } catch (err) {
      setError('An error occurred while fetching results.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bareacts-container min-h-screen flex flex-col">
      {/* Conditional rendering based on screen size */}
      {isMobile ? <MenuBar /> : <Sidebar />}

      <main className="main-content flex-grow">
        <h2 className="bareacts-title text-4xl font-semibold text-blue-900 text-center mb-8 mt-8">
          Bare Acts Database
        </h2>
        <form
          onSubmit={handleSearch}
          className="bareacts-search-form flex flex-col items-center gap-4 sm:flex-row sm:gap-6 mb-10"
        >
          <input
            type="text"
            placeholder="Search for a Bare Act"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bareacts-search-input w-full sm:w-96 p-3 text-lg rounded-lg border-2 bg-white text-gray-800 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          />
          <button
            type="submit"
            className="bareacts-search-btn p-4 rounded-lg bg-blue-600 text-white font-medium shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
          >
            Search
          </button>
        </form>

        <div className="search-results">
          {loading && <p>Loading results...</p>}
          {error && <p className="error-message">{error}</p>}

          {/* Displaying search results */}
          {searchResult && searchResult.length > 0 ? (
            <div>
              <h3 className="text-2xl font-semibold text-blue-900">Search Results</h3>
              {searchResult.map((law) => (
                <div key={law.section} className="search-item">
                  <h4 className="text-xl font-bold text-blue-600">
                    {law.actType} - {law.section}
                  </h4>
                  <p>
                    <strong>{law.title}</strong>
                  </p>
                  <p>{law.description}</p>
                </div>
              ))}
            </div>
          ) : (
            searchQuery && !loading && !searchResult && <p>No results to display</p>
          )}
        </div>

        {/* Displaying all laws */}
        <div className="all-laws">
          <h3 className="text-2xl font-semibold text-blue-900">Bare Acts</h3>
          {laws.length > 0 ? (
            laws.map((law) => (
              <div key={law.section} className="law-item p-4 mb-4 border rounded-lg shadow-md bg-white">
                <h4 className="law-title text-xl font-bold">
                  {law.actType} - {law.section}
                </h4>
                <p className="law-title">
                  <strong>{law.title}</strong>
                </p>
                <p>{law.description}</p>
              </div>
            ))
          ) : (
            <p>No laws available</p>
          )}
        </div>
      </main>

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

      <Footer />
    </div>
  );
};

export default BareActs;
