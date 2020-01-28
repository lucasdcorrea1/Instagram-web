import axios from 'axios';

const api = axios.create({
    baseURL: 'https://isntagram-api-lucas.herokuapp.com'
});

export default api;
