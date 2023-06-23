import axios from "axios";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"; 


const data = {};
const CustomDelete = async (url) => {
    // debugger
    let token = localStorage.getItem('token')
    console.log(token)
const headers = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`,
    "Accept": "*/*",
    "Cache-Control": "no-cache",
    "Accept-Encoding": "gzip, deflate, br"
}
    try {
        let res = await axios.put(url,data,{headers})


        toast.success('delete Successfully')
    } catch (error) {
        toast.error("error", error);
    }

}
export default CustomDelete;