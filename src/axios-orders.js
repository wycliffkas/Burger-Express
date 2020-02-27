import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerexpress-4e7e1.firebaseio.com/'
});

export default instance;