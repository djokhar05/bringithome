import axios from 'axios';

export default axios.create({
    baseURL: 'https://tranquil-cliffs-44660.herokuapp.com/',
    //baseURL: 'https://01c2556c39f8.ngrok.io',
    header: {
        'Content-Type': 'application/json'
    }
})
