import axios from 'axios';

export default axios.create({
    baseURL: 'https://a1489110165b.ngrok.io',
    header: {
        'Content-Type': 'application/json'
    }
})
