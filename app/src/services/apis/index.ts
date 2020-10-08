import Axios from 'axios';

const APi = Axios.create({
  baseURL: 'http://192.168.0.15:3333'
});

export default APi;