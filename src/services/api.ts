import axios from 'axios';

const api = axios.create({
  baseURL: 'https://us.api.blizzard.com/profile/wow'
});

export { api }


