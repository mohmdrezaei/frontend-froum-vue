import Axios from "../axios";
import router from "@/router";


export let registerRequest = (formData) => {
    return Axios.post('auth/register', formData)
}



export let checkAuth = () => {
    let isAuth=false;
    return Axios.get('auth/user').then(res => res.data.email.length > 0 )
}