import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

const API_KEY = 'k-8f7aa4ea-a0c7-42ac-a821-a342d21887fe';
const ENTITY_AUTHENTICATION_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbnRpdHlJZCI6ImUtYjY2YmNhMjQtZjZjZS00NDg5LWIyZTktZTI0YTkwZTA0ODc3IiwiaWF0IjoxNzE4ODcyODg0fQ.O0DEB_S-dirK4MMa2nm0yqwDhdCtdvTySPGpmCGAqqU';
const ENTITY_ID = 'e-b66bca24-f6ce-4489-b2e9-e24a90e04877';
const CAMPAIGN_ID = 'c-14d4f959-5999-4308-af48-37549b89eec7';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    company: '',
    phone: '',
    jobtitle: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleCloseClick = () => {
    setShowForm(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const response = await axios.post(
        // 'https://staging.questapp.co/api/verifyCampaignAction', 
        `https://staging.questprotocol.xyz/api/v2/entities/${ENTITY_ID}/campaigns/${CAMPAIGN_ID}/verify`, 
        {
          firstname: formData.firstname,
          lastname: formData.lastname,
          email: formData.email,
          company: formData.company,
          phone: formData.phone,
          jobtitle: formData.jobtitle,
          campaignId: CAMPAIGN_ID,
          entityId: ENTITY_ID
        }, 
        {
          headers: {
            'Authorization': `Bearer ${ENTITY_AUTHENTICATION_TOKEN}`,
            'x-api-key': API_KEY,
            'Content-Type': 'application/json'
          }
        }
      );
      alert('Form submitted successfully!');
      setShowForm(false);
      setFormData({
        firstname: '',
        lastname: '',
        email: '',
        company: '',
        phone: '',
        jobtitle: ''
      });
    } catch (error) {
      setError('Failed to submit the form.');
      console.log(error)
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Our Landing Page</h1>
        <button className="open-form-button" onClick={handleButtonClick}>
          Open Form
        </button>
      </header>
      <div className={`form-container ${showForm ? 'show' : 'hidden'}`}>
        <button className="close-button" onClick={handleCloseClick}>×</button>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>First Name:</label>
            <input
              type="text"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Last Name:</label>
            <input
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Company:</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Phone No:</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Job Title:</label>
            <input
              type="text"
              name="jobtitle"
              value={formData.jobtitle}
              onChange={handleChange}
              required
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit" className="submit-button" disabled={loading}>
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
