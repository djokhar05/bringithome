import axios from 'axios';

export default axios.create({
    baseURL: 'https://9116f394d8e1.ngrok.io',
    header: {
        'Content-Type': 'application/json'
    }
})