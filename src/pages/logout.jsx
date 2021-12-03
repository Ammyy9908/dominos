import Cookies from 'js-cookie'
import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router'
import { SetOrders, SetUser } from '../redux/actions/_appAction'
import "./logout.css"
function Logout({setUser,SetOrders}) {
    const history = useHistory();
    React.useEffect(()=>{
        const logoutUser = async ()=>{
            try{
                Cookies.remove('AUTH_TOKEN');
                setUser(false);
                SetOrders([]);
                return true;
            }
            catch(e){
                return e;
            }
        }
        setTimeout(()=>{
            logoutUser();
            history.push('/');
        },3000);
    },[]);

   
    return (
        <div className="logout">
            <h3>Logging you out......</h3>
        </div>
    )
}

const mapDispatchToProp = (dispatch) => ({
    setUser:(user)=>dispatch(SetUser(user)),
    SetOrders:(orders)=>dispatch(SetOrders(orders))
})

export default connect(null,mapDispatchToProp)(Logout)
