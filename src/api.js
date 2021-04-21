import axios from 'axios';

export default axios.create({
    //baseURL: 'https://tranquil-cliffs-44660.herokuapp.com/',
    baseURL: 'https://93b99d5f2619.ngrok.io',
    header: {
        'Content-Type': 'application/json'
    }
})
