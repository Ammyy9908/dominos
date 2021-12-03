import axios from "axios"
import Cookies from "js-cookie"

const getUserOrders = async ()=>{

    try{
        const r = await axios.get('https://dominos-backend8.herokuapp.com/api/order/user/orders',{
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