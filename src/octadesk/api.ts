import axios from 'axios';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJkb21haW4iOiJzb21vc21lc2hhIiwiaXNzdWVkYXRlIjoiMjAyMC0xMC0yNlQxNjoxNDowMi44NzBaIiwiaXNzIjoiYXBpLm9jdGFkZXNrLnNlcnZpY2VzIiwicm9sZSI6MSwiZW1haWwiOiJyaWx0b25Ac29tb3NtZXNoYS5jb20iLCJuYW1lIjoiUmlsdG9uIiwidHlwZSI6MSwiaWQiOiIwOGRlYWNiYS1lMDVlLTRmNTMtYjA0Yi0wNDY0NDFlZDUzN2YiLCJyb2xlVHlwZSI6MSwicGVybWlzc2lvblR5cGUiOjEsInBlcm1pc3Npb25WaWV3IjowLCJwcm9kdWN0SWQiOiIiLCJpYXQiOjE2MDM3Mjg4NDJ9.EzYgofxuznXeuGdK-kglFoETmYvfBzRYN72eXKdX6kk';

const api = axios.create({
  baseURL: 'https://api.octadesk.services',
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default api;
