// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Home from './Home';  // Import the Home component
import ProfilePage from './ProfilePage'; 
import Help from './Help'; 
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />  {/* Login Page */}
        <Route path="/home" element={<Home />} />  {/* Home Page */}
        <Route path="/profile" element={<ProfilePage />} />  {/* Profile Page */}
        <Route path="/help" element={<Help />} />
      </Routes>
    </Router>
  );
};

export default App;
