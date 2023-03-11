import axios from "axios";

const Axios =axios.create({
    baseURL : 'http://froum.test/api/v1'
});
Axios.defaults.withCredentials = true;

export default Axios;