import api from './api';

const applicationService = {
  submitApplication: async (applicationData) => {
    return await api.post('/api/applications/submit', applicationData);
  },
  
  getApplications: async () => {
    return await api.get('/api/applications');
  },
  
  updateApplicationStatus: async (id, status) => {
    return await api.put(`/api/applications/${id}/status?status=${status}`);
  }
};

export default applicationService;