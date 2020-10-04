import Axios from 'axios';

const APi = Axios.create({
    baseURL: "http://localhost:3333"
});

export default APi;