import axios from 'axios';

//We link our data base/API
const clientAxios = axios.create({
    baseURL: 'http://localhost:4000/'
});

export default clientAxios;