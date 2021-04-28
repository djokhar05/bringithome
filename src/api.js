import axios from 'axios';

export default axios.create({
    baseURL: 'https://tranquil-cliffs-44660.herokuapp.com/',
    //baseURL: 'https://e42fe524af46.ngrok.io',
    header: {
        'Content-Type': 'application/json'
    }
})
