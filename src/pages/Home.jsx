
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import FeaturedService from './FeaturedService';


const Home = () => {
  // State to manage the theme (dark or light)
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Toggle function for the theme
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={isDarkTheme ? 'bg-gray-900 text-gray-600' : 'bg-white text-black'}>
      <Navbar />
      {/* Theme Toggle Button */}
      <div className="flex justify-end p-4">
        <button
          onClick={toggleTheme}
          className="p-2 border rounded-lg bg-purple-700 text-white hover:bg-purple-900"
        >
          {isDarkTheme ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
        </button>
      </div>
      <Banner />
      <FeaturedService></FeaturedService>
    
      <Footer />
    </div>
  );
};

export default Home;
