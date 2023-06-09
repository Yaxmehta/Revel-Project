import axios from "axios";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const CustomDelete = async (url, params) => {
    try {
        const response = await axios.put(url, { data: params });
        toast.success('delete Successfully')
    } catch (error) {
        toast.error("error", error);
    }

}
export default CustomDelete;