import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.iugu.com/v1'
})

export default api;
