import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';

function AdminDashboard() {
  const [stats, setStats] = useState({
    applications: 0,
    users: 0,
    messages: 0
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await api.get('/api/admin/dashboard');
        setStats(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching dashboard data:', err);
        setError('Failed to load dashboard data');
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) {
    return <div className="text-center py-10">Loading dashboard...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Applications</h2>
          <p className="text-3xl font-bold text-blue-600">{stats.applications || 0}</p>
          <Link to="/admin/applications" className="text-blue-500 hover:underline mt-2 inline-block">
            Manage Applications
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Users</h2>
          <p className="text-3xl font-bold text-green-600">{stats.users || 0}</p>
          <Link to="/admin/users" className="text-blue-500 hover:underline mt-2 inline-block">
            Manage Users
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Messages</h2>
          <p className="text-3xl font-bold text-purple-600">{stats.messages || 0}</p>
          <Link to="/admin/messages" className="text-blue-500 hover:underline mt-2 inline-block">
            View Messages
          </Link>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <p className="text-gray-600">No recent activities to display.</p>
      </div>
    </div>
  );
}

export default AdminDashboard;