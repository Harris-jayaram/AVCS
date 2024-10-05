import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaCompass, FaUser, FaQuestionCircle, FaBars } from 'react-icons/fa';
import './assets/home.css'; // Import the CSS file

const Home = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="page-body">
      {/* Sidebar with dynamic class based on the screen size and toggle state */}
      <div className={`sidebar ${isExpanded ? 'expanded' : 'collapsed'}`}>
        <button className="toggle-btn" onClick={toggleSidebar}>
          <FaBars /> {/* Hamburger menu icon */}
        </button>
        <ul>
          <li>
            <Link to="/home">
              <FaHome /> <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/explore">
              <FaCompass /> <span>Explore</span>
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <FaUser /> <span>Profile</span>
            </Link>
          </li>
          <li>
            <Link to="/help">
              <FaQuestionCircle /> <span>Help</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Main content */}
      <div className="main-content">
        <h1>Welcome to the Home Page</h1>
        {/* Additional content here */}
      </div>
    </div>
  );
};

export default Home;
