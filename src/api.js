import axios from 'axios';

export default axios.create({
    baseURL: 'https://da6b1722d2f8.ngrok.io',
    header: {
        'Content-Type': 'application/json'
    }
})
