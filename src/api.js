import axios from 'axios';

export default axios.create({
    baseURL: 'https://546f5bd9d957.ngrok.io',
    header: {
        'Content-Type': 'application/json'
    }
})