import React, { useState, useEffect } from 'react';
import ImageBox from './components/ImageBox';
import './HomePage.css';

const HomePage = () => {
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    // Fetch images from the server
    fetch('YOUR_API_ENDPOINT')
      .then((response) => response.json())
      .then((data) => setImageData(data))
      .catch((error) => console.error('Error fetching images:', error));
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div className="home-page">
      {/* Header Section */}
      <div className="header">
        <div className="logo">
          {/* Pinterest Logo */}
          <img src="../Pinterest.png" alt="Pinterest Logo" width="50" height="50" />
        </div>
        <div className="nav-buttons">
          <button className="nav-button">Home</button>
          <button className="nav-button">Explore</button>
          <button className="nav-button">Create</button>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search" />
        </div>
        <div className="icons">
          <span className="notification-icon">🔔</span>
          <span className="chat-icon">💬</span>
          <span className="profile-icon">👤</span>
        </div>
      </div>

      {/* Image Grid Section */}
      <div className="image-container">
        {imageData.map((image) => (
          <ImageBox key={image.id} imageUrl={image.filePath} title={image.title} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
