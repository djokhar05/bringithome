import axios from 'axios';

export default axios.create({
    baseURL: 'https://a1d82e4da38d.ngrok.io',
    header: {
        'Content-Type': 'application/json'
    }
})
