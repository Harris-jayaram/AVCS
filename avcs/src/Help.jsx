import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaUser, FaPhone, FaCommentDots } from 'react-icons/fa';
import { useGeolocated } from 'react-geolocated';
import './assets/Help.css';
const Help = () => {
  const { coords, isGeolocationAvailable, isGeolocationEnabled } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: true,
    },
    userDecisionTimeout: 5000,
  });

  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: '',
    location: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (coords) {
      formData.location = `${coords.latitude}, ${coords.longitude}`;
    }
    
    // Store the data in local storage
    setContactData(formData);
    
    toast.success('Thank you for contacting us! We will get back to you shortly.');
    
    // Clear the form fields
    setFormData({
      name: '',
      contact: '',
      message: '',
      location: '',
    });
  };

  const setContactData = (data) => {
    localStorage.setItem('contactData', JSON.stringify(data));
  };

  const getContactData = () => {
    return JSON.parse(localStorage.getItem('contactData'));
  };

  const deleteContactData = () => {
    localStorage.removeItem('contactData');
    toast.success('Contact data deleted successfully.');
  };

  return (
    <div className="contact-us-wrapper">
      <h2 className="contact-heading">Contact Us</h2>
      <div className="contact-content">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <FaUser className="form-icon" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <FaPhone className="form-icon" />
            <input
              type="text"
              name="contact"
              placeholder="Phone Number or Email"
              value={formData.contact}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <FaCommentDots className="form-icon" />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
        {isGeolocationAvailable ? (
          isGeolocationEnabled ? (
            coords ? (
              <div className="map-container">
                <iframe
                  title="real-time-location"
                  src={`https://maps.google.com/maps?q=${coords.latitude},${coords.longitude}&z=15&output=embed`}
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                ></iframe>
              </div>
            ) : (
              <p>Getting location data...</p>
            )
          ) : (
            <p>Geolocation is not enabled. Please enable it to see your location on the map.</p>
          )
        ) : (
          <p>Your browser does not support Geolocation.</p>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Help ;
