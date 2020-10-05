import Axios from 'axios';

const APi = Axios.create({
  baseURL: 'http://192.168.0.20:3333'
});

export default APi;