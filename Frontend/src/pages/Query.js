import React, { useState, useEffect, useMemo } from 'react';
import { FaMicrophone, FaInfoCircle, FaArrowUp } from 'react-icons/fa';
import Sidebar from '../components/Sidebar';
import Menubar from '../components/MenuBar'; // Import Menubar
import Footer from '../components/Footer';
import '../styles/Query.css';

const Query = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('Response will appear here...');
  const [isListening, setIsListening] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Web Speech API initialization
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = useMemo(() => {
    const recog = new SpeechRecognition();
    recog.continuous = false;
    recog.interimResults = false;
    recog.lang = 'en-US';
    return recog;
  }, [SpeechRecognition]);

  // Check if the screen is mobile on initial load and on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setQuery(transcript);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
      setIsListening(false);
    };
  }, [recognition]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMicClick = () => {
    if (isListening) {
      recognition.stop();
    } else {
      recognition.start();
    }
    setIsListening(!isListening);
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleQuerySubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const fullQuery = `${query}. You are an AI assistant with in-depth expertise in the Indian Constitution, criminal law, and all relevant acts, sections, and legal provisions. Your role is to support law enforcement officers in the process of filing a First Information Report (FIR) by identifying and listing all applicable laws, including relevant acts, sections, and provisions. For each act or section, provide a concise yet comprehensive explanation of its significance, its direct relevance to the case, and how it should be applied in the context of the incident. Ensure that no pertinent legal provision is overlooked, and that the officer is equipped with a thorough understanding of the laws involved, enabling them to file a complete and legally sound FIR.
After listing alll the acts, dont give any disclaimers. Just provide the below given text. 


"The FIR should meticulously detail:

1. Personal Details:
Include the complainant’s (informant’s) full name, address, and contact details.

2. Date, Time, and Location:
Mention the exact date, time, and location where the crime or incident occurred.

3. Nature of the Offense:
Clearly state the nature of the crime or offense (e.g., theft, assault, fraud) and the specific details of the incident.

4. Details of the Incident:
Provide a detailed account of what happened. Include facts such as how the crime was committed, by whom, and any supporting circumstances.

5. Witness Information:
Mention the names and contact information of any witnesses, if available, and what they saw or heard.

6. Complaint or Allegation:
The complainant should clearly describe the incident as an allegation, and not make defamatory or baseless claims.

7. Signature:
Ensure the FIR is signed by the complainant at the end.


This comprehensive approach ensures a legally sound and complete FIR, maximizing the chances of successful prosecution. The investigating officer should carefully consider the evidence and apply the relevant sections accordingly. Remember, this is a guide, and the specific charges will depend on the specific facts of the case as they are investigated and revealed."`;

    try {
      const response = await fetch('https://chatbot-for-fir-backend.vercel.app/api/gemini/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: fullQuery }),
      });

      const data = await response.json();
      setResponse(parseMarkdownToHTML(data.response || 'No response received'));
    } catch (error) {
      console.error('Error fetching the response:', error);
      setError('Error occurred while fetching the response');
      setResponse('');
    }

    setIsLoading(false);
    setQuery('');
  };

  const parseMarkdownToHTML = (text) => {
    return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="query-page-container">
      {isMobile ? <Menubar /> : <Sidebar />}

      <div className="query-page-main-content bg-gradient-to-r from-gray-100 to-white p-8 rounded-xl shadow-lg min-h-[70vh]">
        <h2 className="query-page-title text-4xl font-semibold text-blue-900 text-center mb-8 mt-8">
          Ask a Query
        </h2>

        <div className="text-center mb-4">
          <button
            onClick={toggleModal}
            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
          >
            <FaInfoCircle className="inline mr-2" />
            How It Works
          </button>
        </div>

        <div className="query-response-box bg-light-gray p-8 rounded-lg shadow-md mb-10 w-full max-w-5xl mx-auto border border-gray-300">
          {isLoading ? (
            <div className="flex flex-col justify-center items-center">
              <div className="spinner mb-4"></div>
              <p className="loading-message text-lg text-gray-700">Processing your query, please wait...</p>
            </div>
          ) : error ? (
            <p className="error-message text-lg text-red-600">{error}</p>
          ) : (
            <pre
              dangerouslySetInnerHTML={{ __html: response }}
              className="text-gray-800 font-medium leading-relaxed break-words whitespace-pre-wrap"
              style={{
                fontFamily: '"Arial", sans-serif',
                fontSize: '1.1rem',
                lineHeight: '1.6',
              }}
            ></pre>
          )}
        </div>

        <form onSubmit={handleQuerySubmit} className="query-input-container max-w-5xl mx-auto bg-gray-50 p-8 rounded-lg shadow-lg border border-gray-300">
          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0">
            <div className="query-input-box flex-grow md:mr-4">
              <input
                type="text"
                placeholder="Type your query here..."
                value={query}
                onChange={handleInputChange}
                className="query-text-input w-full p-4 border border-gray-300 rounded-lg shadow-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div className="query-mic-icon-container flex items-center justify-center md:mr-4">
              <FaMicrophone
                className={`query-mic-icon text-4xl cursor-pointer ${isListening ? 'text-green-500' : 'text-gray-500'}`}
                onClick={handleMicClick}
                aria-label={isListening ? 'Stop listening' : 'Start listening'}
              />
            </div>

            <div className="query-submit-btn-container flex items-center justify-center md:ml-4">
              <button
                type="submit"
                className="submit-btn bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="scroll-top-btn bg-blue-600 text-white p-3 rounded-full fixed bottom-10 right-10 hover:bg-blue-700 transition duration-200"
        >
          <FaArrowUp />
        </button>
      )}

      {isModalOpen && (
        <div className="modal-overlay fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="modal-content bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
            <h3 className="modal-title text-2xl font-semibold mb-4">How It Works</h3>
            <p className="modal-description text-gray-700 mb-4">
              Enter a query, and the AI assistant will provide a list of relevant laws and sections related to FIR filing.
            </p>
            <div className="flex justify-end">
              <button
                onClick={toggleModal}
                className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Query;
