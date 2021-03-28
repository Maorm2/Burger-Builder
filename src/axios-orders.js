import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-8e645-default-rtdb.firebaseio.com/'
});

export default instance;