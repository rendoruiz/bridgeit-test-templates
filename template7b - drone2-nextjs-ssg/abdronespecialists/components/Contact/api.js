import axios from 'axios';

export default axios.create({
  baseURL: 'https://abdronespecialists.ca/abdrone_api/public/api/'
});