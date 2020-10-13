import axios from 'axios';

const authString = 'edf799058840f8ae94b0a1d5eb449cd4' + ':';
const encodedToken =  Buffer.from(authString).toString('base64');

const api = axios.create({
  baseURL: 'https://api.iugu.com/v1',
  headers: {
    Authorization: `Basic ${encodedToken}`
  }
})

export default api;
