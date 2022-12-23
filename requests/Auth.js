import Axios from "@/axios";

export let registerRequest = (formData) => {
    return  Axios.post('auth/register',formData)
}