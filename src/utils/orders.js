import axios from "axios"
import Cookies from "js-cookie"

const getUserOrders = async ()=>{

    try{
        const r = await axios.get('http://localhost:5000/api/order/user/orders',{
            headers:{
                'Authorization':Cookies.get('AUTH_TOKEN')
            }
        });

        return r.data;
    }
    catch(err){
        return err;
    }
}

export default getUserOrders;