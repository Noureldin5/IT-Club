import axios from "axios";

const BASE_URL = "http://localhost:8080/api";

export const submitApplication = (data) =>
  axios.post(`${BASE_URL}/applications`, data);

export const sendMessage = (data) =>
  axios.post(`${BASE_URL}/contact`, data);

export const login = (credentials) =>
  axios.post(`${BASE_URL}/auth/login`, credentials);

export const getApplications = (token) =>
  axios.get(`${BASE_URL}/applications`, {
    headers: { Authorization: `Bearer ${token}` }
  });