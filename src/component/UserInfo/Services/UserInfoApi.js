
import axios from 'axios';
import { baseUrl } from '../../shared/baseUrl';


const GetUserInfoApi = async (Token, userId) => {
    try {
        let options = {
            headers: {
                "Authorization": `Bearer ${Token}`
            }
        }
        let response = await axios.get(`${baseUrl}/api/application/member_details?id=${userId}`, options)
        if (response && response.data && response.data.data)
            return response.data.data
    } catch (error) {
        return error
    }

}
export default GetUserInfoApi

// http://18.142.153.136:3000/api/application/member_details?id=223
// http://18.142.153.136:3000/api/application/member_details?id=223