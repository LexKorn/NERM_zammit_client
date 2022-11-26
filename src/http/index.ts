import axios from 'axios';

const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL
});

export {
    $host
};

// REACT_APP_API_URL='http://localhost:5000/'
// REACT_APP_API_URL='https://books.kornlex.ru/'