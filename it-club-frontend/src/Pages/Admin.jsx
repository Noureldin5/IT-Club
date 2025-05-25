import React, { useState, useEffect } from 'react';
import applicationService from '../services/applicationService';
import authService from '../services/authService';

export default function Admin() {
  // Authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState('');

  // Applications state
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');

  // Check if already authenticated on load
  useEffect(() => {
    const checkAuth = () => {
      if (authService.isAuthenticated() && authService.isAdmin()) {
        setIsAuthenticated(true);
        fetchApplications();
      }
    };
    
    checkAuth();
  }, []);

  // Handle login form changes
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle login submission
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoginLoading(true);
    setLoginError('');
    
    try {
      console.log('Attempting login with:', credentials.username);
      const response = await authService.login(credentials);
      console.log('Login response:', response);
      
      if (response && response.isAdmin) {
        setIsAuthenticated(true);
        fetchApplications();
      } else {
        authService.logout();
        setLoginError('You do not have admin privileges');
      }
    } catch (err) {
      console.error("Login error:", err);
      
      // More detailed error handling
      if (err.response) {
        console.error("Error response data:", err.response.data);
        console.error("Error response status:", err.response.status);
        
        if (err.response.status === 401) {
          setLoginError('Invalid username or password');
        } else if (err.response.status === 403) {
          setLoginError('You do not have permission to access the admin area');
        } else {
          setLoginError(err.response.data?.message || 'Error: ' + (err.response.data || 'Unknown error'));
        }
      } else if (err.request) {
        console.error("Error request:", err.request);
        setLoginError('No response from server. Please check your internet connection.');
      } else {
        console.error("Error message:", err.message);
        setLoginError('Error: ' + (err.message || 'Unknown error'));
      }
    } finally {
      setLoginLoading(false);
    }
  };

  // Fetch applications data
  const fetchApplications = async () => {
    try {
      setLoading(true);
      const response = await applicationService.getApplications();
      setApplications(response.data);
      setError('');
    } catch (err) {
      console.error('Error fetching applications:', err);
      
      if (err.response && err.response.status === 401) {
        // Token expired or invalid
        authService.logout();
        setIsAuthenticated(false);
        setError('Session expired. Please login again.');
      } else {
        setError('Failed to load applications. Please try again later.');
      }
    } finally {
      setLoading(false);
    }
  };

  // Handle application status change
  const handleStatusChange = async (id, newStatus) => {
    try {
      await applicationService.updateApplicationStatus(id, newStatus);
      
      // Update local state to reflect the change
      setApplications(applications.map(app => 
        app.id === id ? { ...app, status: newStatus } : app
      ));
    } catch (err) {
      console.error('Error updating application status:', err);
      alert('Failed to update application status. Please try again.');
      
      if (err.response && err.response.status === 401) {
        authService.logout();
        setIsAuthenticated(false);
      }
    }
  };

  // Handle logout
  const handleLogout = () => {
    authService.logout();
    setIsAuthenticated(false);
    setCredentials({ username: '', password: '' });
  };

  // Filter applications based on selected status
  const filteredApplications = statusFilter === 'ALL' 
    ? applications 
    : applications.filter(app => app.status === statusFilter);

  // Render login form if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="admin-login-container">
        <div className="admin-login-card">
          <h2>Admin Login</h2>
          
          {loginError && <div className="error-message">{loginError}</div>}
          
          <form onSubmit={handleLoginSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input 
                id="username"
                type="text" 
                name="username" 
                value={credentials.username} 
                onChange={handleLoginChange} 
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input 
                id="password"
                type="password" 
                name="password" 
                value={credentials.password} 
                onChange={handleLoginChange} 
                required 
              />
            </div>
            
            <button 
              type="submit" 
              disabled={loginLoading}
              className="login-button"
            >
              {loginLoading ? 'Logging in...' : 'Login'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Render dashboard if authenticated
  return (
    <div className="admin-dashboard">
      <div className="admin-header">
        <div className="admin-title">
          <h1>IT Club Admin Dashboard</h1>
          <p>Manage applications and club activities</p>
        </div>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>

      <div className="admin-content">
        <div className="admin-sidebar">
          <div className="sidebar-section">
            <h3>Applications</h3>
            <ul>
              <li 
                className={statusFilter === 'ALL' ? 'active' : ''} 
                onClick={() => setStatusFilter('ALL')}
              >
                All Applications
              </li>
              <li 
                className={statusFilter === 'PENDING' ? 'active' : ''} 
                onClick={() => setStatusFilter('PENDING')}
              >
                Pending
              </li>
              <li 
                className={statusFilter === 'APPROVED' ? 'active' : ''} 
                onClick={() => setStatusFilter('APPROVED')}
              >
                Approved
              </li>
              <li 
                className={statusFilter === 'REJECTED' ? 'active' : ''} 
                onClick={() => setStatusFilter('REJECTED')}
              >
                Rejected
              </li>
            </ul>
          </div>
          <div className="sidebar-section">
            <h3>Stats</h3>
            <div className="stat-box">
              <div className="stat">
                <span className="stat-value">{applications.length}</span>
                <span className="stat-label">Total</span>
              </div>
              <div className="stat">
                <span className="stat-value">
                  {applications.filter(app => app.status === 'PENDING').length}
                </span>
                <span className="stat-label">Pending</span>
              </div>
              <div className="stat">
                <span className="stat-value">
                  {applications.filter(app => app.status === 'APPROVED').length}
                </span>
                <span className="stat-label">Approved</span>
              </div>
            </div>
          </div>
        </div>

        <div className="admin-main">
          <div className="admin-section">
            <div className="section-header">
              <h2>
                {statusFilter === 'ALL' ? 'All Applications' : `${statusFilter.charAt(0) + statusFilter.slice(1).toLowerCase()} Applications`}
              </h2>
              <button onClick={fetchApplications} className="refresh-button">
                Refresh
              </button>
            </div>

            {error && <div className="error-message">{error}</div>}
            
            {loading ? (
              <div className="loading-spinner-container">
                <div className="loading-spinner admin-spinner"></div>
                <p>Loading applications...</p>
              </div>
            ) : filteredApplications.length === 0 ? (
              <div className="empty-state">
                <p>No applications found.</p>
              </div>
            ) : (
              <div className="applications-table-container">
                <table className="applications-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Student ID</th>
                      <th>Department</th>
                      <th>Year</th>
                      <th>Submission Date</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredApplications.map(application => (
                      <tr key={application.id} className={`status-${application.status.toLowerCase()}`}>
                        <td>{application.name}</td>
                        <td>{application.studentId}</td>
                        <td>{application.department}</td>
                        <td>{application.yearOfStudy}</td>
                        <td>{new Date(application.submissionDate).toLocaleDateString()}</td>
                        <td>
                          <span className={`status-badge ${application.status.toLowerCase()}`}>
                            {application.status}
                          </span>
                        </td>
                        <td>
                          <div className="action-buttons">
                            <button 
                              onClick={() => handleStatusChange(application.id, 'APPROVED')}
                              className="approve-button"
                              disabled={application.status === 'APPROVED'}
                            >
                              Approve
                            </button>
                            <button 
                              onClick={() => handleStatusChange(application.id, 'REJECTED')}
                              className="reject-button"
                              disabled={application.status === 'REJECTED'}
                            >
                              Reject
                            </button>
                            <button 
                              className="view-button"
                              onClick={() => {
                                alert(`Reason for joining: ${application.reasonForJoining}\nEmail: ${application.email}`);
                              }}
                            >
                              Details
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}