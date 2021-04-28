import axios from 'axios';

export default axios.create({
    //baseURL: 'https://tranquil-cliffs-44660.herokuapp.com/',
    baseURL: 'https://1999a6243142.ngrok.io',
    header: {
        'Content-Type': 'application/json'
    }
})
