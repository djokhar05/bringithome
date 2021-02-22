import axios from 'axios';

export default axios.create({
    baseURL: 'https://710ec5e0dabc.ngrok.io',
    header: {
        'Content-Type': 'application/json'
    }
})