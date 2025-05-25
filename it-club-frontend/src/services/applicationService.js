import api from './api';

const applicationService = {
  submitApplication: async (applicationData) => {
    const response = await api.post('/api/applications/submit', applicationData);
    return response.data;
  },
  
  getApplications: async () => {
    try {
      const response = await api.get('/api/applications/manage');
      return response;
    } catch (error) {
      console.error('Error fetching applications:', error);
      throw error;
    }
  },
  
  updateApplicationStatus: async (id, status) => {
    try {
      const response = await api.put(`/api/applications/manage/${id}/status`, { status });
      return response.data;
    } catch (error) {
      console.error('Error updating application status:', error);
      throw error;
    }
  }
};

export default applicationService;