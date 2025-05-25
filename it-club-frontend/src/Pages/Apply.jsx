// src/Pages/Apply.jsx
import React, { useState } from 'react';
import applicationService from '../services/applicationService';

export default function Apply() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    studentId: '',
    department: '',
    yearOfStudy: '',
    reasonForJoining: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      await applicationService.submitApplication(formData);
      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        studentId: '',
        department: '',
        yearOfStudy: '',
        reasonForJoining: ''
      });
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred while submitting your application.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="apply-page">
      <div className="apply-container">
        <div className="apply-header">
          <h1>Join the IT Club</h1>
          <p>Fill out the form below to apply for membership</p>
        </div>
        
        {success ? (
          <div className="success-message">
            <div className="success-icon">✓</div>
            <h2>Application Submitted!</h2>
            <p>Thank you for your interest in joining the IT Club. We will review your application and get back to you soon.</p>
            <button 
              onClick={() => setSuccess(false)}
              className="apply-button"
            >
              Submit Another Application
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="apply-form">
            {error && <div className="error-message">{error}</div>}
            
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input 
                type="text" 
                id="name"
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
                placeholder="Enter your full name"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input 
                type="email" 
                id="email"
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
                placeholder="Enter your email address"
              />
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="studentId">Student ID</label>
                <input 
                  type="text" 
                  id="studentId"
                  name="studentId" 
                  value={formData.studentId} 
                  onChange={handleChange} 
                  required 
                  placeholder="Enter your student ID"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="yearOfStudy">Year of Study</label>
                <select
                  id="yearOfStudy"
                  name="yearOfStudy"
                  value={formData.yearOfStudy}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Year</option>
                  <option value="First Year">First Year</option>
                  <option value="Second Year">Second Year</option>
                  <option value="Third Year">Third Year</option>
                  <option value="Fourth Year">Fourth Year</option>
                  <option value="Graduate">Graduate</option>
                </select>
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="department">Department</label>
              <input 
                type="text" 
                id="department"
                name="department" 
                value={formData.department} 
                onChange={handleChange} 
                required 
                placeholder="Enter your department"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="reasonForJoining">Why do you want to join the IT Club?</label>
              <textarea 
                id="reasonForJoining"
                name="reasonForJoining" 
                value={formData.reasonForJoining} 
                onChange={handleChange} 
                rows="4"
                required 
                placeholder="Tell us why you're interested in joining and what you hope to contribute or learn"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="apply-button"
              disabled={loading}
            >
              {loading ? (
                <span className="loading-spinner">
                  <span className="spinner"></span> Submitting...
                </span>
              ) : (
                'Submit Application'
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}