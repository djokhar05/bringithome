import axios from 'axios';

export default axios.create({
    baseURL: 'https://a8c495f29c39.ngrok.io',
    header: {
        'Content-Type': 'application/json'
    }
})
