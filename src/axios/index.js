import axios from 'axios';

export default axios.create({
     // Back-end server URL   
    baseURL: 'http://localhost:3500',
    timeout: 30000,
  })