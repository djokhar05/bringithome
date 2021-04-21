import axios from 'axios';

export default axios.create({
    baseURL: 'https://d4c3444a2805.ngrok.io',
    header: {
        'Content-Type': 'application/json'
    }
})
