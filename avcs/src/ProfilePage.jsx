import React, { useState } from 'react';
import { getAuth, updatePassword, updateProfile } from 'firebase/auth';
import './assets/ProfilePage.css';
import { FaUserCircle } from 'react-icons/fa';
import { MdLock, MdDarkMode, MdLightMode } from 'react-icons/md';

const ProfilePage = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [theme, setTheme] = useState('light');

  const auth = getAuth();

  const handleSave = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;

    try {
      // Update user display name
      if (name) {
        await updateProfile(user, { displayName: name });
        console.log("Name updated:", name);
      }

      // Update password if provided and matches confirmation
      if (password && password === confirmPassword) {
        await updatePassword(user, password);
        console.log("Password updated");
      } else if (password !== confirmPassword) {
        console.error("Passwords do not match");
      }

      console.log("Theme:", theme);
    } catch (error) {
      console.error("Error updating profile:", error.message);
    }
  };

  const handleThemeChange = (e) => {
    const selectedTheme = e.target.value;
    setTheme(selectedTheme);
  };

  return (
    <div className={`wrapper ${theme}`}>
      <div className="profile-page">
        <h2>Edit Profile</h2>
        <div className="icon-container">
          <FaUserCircle className="profile-icon" />
        </div>
        <form onSubmit={handleSave}>
          <div className="form-group">
            <label>Name: </label>
            <div className="input-group">
              <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Enter your name" 
                required 
              />
            </div>
          </div>
          <div className="form-group">
            <label>Password: </label>
            <div className="input-group">
              <MdLock className="input-icon" />
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Enter new password" 
                required 
              />
            </div>
          </div>
          <div className="form-group">
            <label>Confirm Password: </label>
            <div className="input-group">
              <MdLock className="input-icon" />
              <input 
                type="password" 
                value={confirmPassword} 
                onChange={(e) => setConfirmPassword(e.target.value)} 
                placeholder="Confirm new password" 
                required 
              />
            </div>
          </div>
          <div className="form-group theme-selector">
            <label>Theme: </label>
            <div className="theme-slider">
              <input 
                type="radio" 
                id="light" 
                name="theme" 
                value="light" 
                checked={theme === 'light'} 
                onChange={handleThemeChange} 
              />
              <label htmlFor="light">
                <MdLightMode className="theme-icon" />
              </label>
              <input 
                type="radio" 
                id="dark" 
                name="theme" 
                value="dark" 
                checked={theme === 'dark'} 
                onChange={handleThemeChange} 
              />
              <label htmlFor="dark">
                <MdDarkMode className="theme-icon" />
              </label>
            </div>
          </div>
          <button type="submit" className="save-button">Save Changes</button>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
