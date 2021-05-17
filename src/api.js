import axios from 'axios';

export default axios.create({
    baseURL: 'https://tranquil-cliffs-44660.herokuapp.com/',
    //baseURL: 'https://aa7181a40695.ngrok.io',
    header: {
        'Content-Type': 'application/json'
    }
})
