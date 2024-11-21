import React from 'react';
import Footer from '../components/Footer';
const teamMembers = [
  {
    name: 'Ayush Agarwal',
    role: 'ML Engineer',
    description: 'Ayush is responsible for developing machine learning models, optimizing algorithms, and ensuring the intelligent behavior of the system.',
    image: 'https://via.placeholder.com/300',
  },
  {
    name: 'Debojit Roy',
    role: 'Backend Developer',
    description: 'Debojit handles the backend, focusing on server-side logic, database management, and API integrations to ensure smooth operations.',
    image: 'https://via.placeholder.com/300',
  },
  {
    name: 'Anubhab Das',
    role: 'UI/UX Designer',
    description: 'Anubhab is responsible for creating intuitive and visually appealing user interfaces, ensuring a seamless and engaging experience for users.',
    image: 'https://via.placeholder.com/300',
  },
  {
    name: 'Anish Seth',
    role: 'Frontend Developer',
    description: 'Anish brings the UI designs to life with frontend development skills, ensuring responsive layouts, smooth interactions, and an optimized user experience.',
    image: 'https://via.placeholder.com/300',
  },
  {
    name: 'Anushka Adak',
    role: 'Research Analyst',
    description: 'Anushka conducts research, providing insights into market trends, user needs, and helping shape the strategic direction of the product.',
    image: 'https://via.placeholder.com/300',
  },
  {
    name: 'Tanisha Gupta',
    role: 'Product Manager',
    description: 'Tanisha provides guidance and support, ensuring the team\'s direction aligns with best practices and the project\'s goals.',
    image: 'https://via.placeholder.com/300',
  },
];

const Team = () => {
  return (
    <div className="bg-gray-50 font-sans">
      {/* Team Header Section */}
      <header className="text-center py-28 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
  <h1 className="text-6xl font-extrabold tracking-tight mb-6 text-shadow-lg transform hover:scale-105 transition-all duration-300">
    CODE-A-COLA
  </h1>
  <p className="text-2xl sm:text-3xl md:text-4xl font-medium max-w-3xl mx-auto leading-relaxed opacity-90 hover:opacity-100 transition-opacity duration-300">
    Brewing solutions for a smarter tomorrow!
  </p>
</header>



      {/* Team Members Section */}
      <section className="py-16 px-6 bg-gray-50">
  <div className="container mx-auto">
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
      {teamMembers.map((member, index) => (
        <div
          key={index}
          className="bg-white rounded-3xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl hover:translate-y-2 duration-300"
        >
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-64 object-cover rounded-t-3xl transition-all hover:opacity-90"
          />
          <div className="p-8">
            <h3 className="text-3xl font-bold text-blue-600 mb-2">{member.name}</h3>
            <p className="text-lg text-gray-700 mb-4">{member.role}</p>
            <p className="text-gray-600 text-base leading-relaxed">{member.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      <Footer />
    </div>
  );
};

export default Team;
