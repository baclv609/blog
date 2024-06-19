import axios from 'axios';

const http = {
  get: async (url: string) => {
    const response = await axios.get(url);
    return response.data;
  },
  post: async (url: string, body: any) => {
    const response = await axios.post(url, body);
    return response.data;
  },
  put: async (url: string, body: any) => {
    const response = await axios.put(url, body);
    return response.data;
  },
  delete: async (url: string) => {
    const response = await axios.delete(url);
    return response.data;
  },
};
export default http;
