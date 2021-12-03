import { connect } from "react-redux";
import Home from "./pages";
import { SetOrders, SetUser } from "./redux/actions/_appAction";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import "./styles.css";
import Menu from "./pages/menu";
import Items from "./pages/items";
import React from "react";
import axios from "axios";
import Cookies from "js-cookie";
import getUserOrders from "./utils/orders";
import Orders from "./pages/orders";
import Profile from "./pages/profile";
import Logout from "./pages/logout";

function App({ user, setUser,SetOrders }) {

  React.useEffect(()=>{
    const getUser = async ()=>{
      try{
        const r = await axios.get('https://dominos-backend8.herokuapp.com/api/auth/user',{
          headers:{
            'Authorization':`${Cookies.get('AUTH_TOKEN')}`
          }
        })
        return r.data;
      }
      catch(e){
        return null;
      }
    }

    if(Cookies.get('AUTH_TOKEN')){
      getUser().then(user=>{
        if(user){
          
          setUser(user);
        }
      })

      getUserOrders().then((data)=>{
        if(data){
          console.log('Incoming User orders!',data.orders);
          SetOrders(data.orders)
        }
      })
    }
  },[])

  return (
    <Router>
  <div>
  
  
  <Switch>
  <Route exact path="/">
    <Home/>
    </Route>

    <Route exact path="/menu">
    <Menu/>
    </Route>

    <Route exact path="/item">
    <Items/>
    </Route>

    <Route exact path="/orders">
    <Orders/>
    </Route>

    <Route exact path="/profile">
    <Profile/>
    </Route>

    <Route exact path="/logout">
    <Logout/>
    </Route>
    

       
         
          

   
   
  </Switch>
</div>
</Router>
  );
}

const mapStateToProps = (state) => ({
  user: state.appReducer.user
});

const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(SetUser(user)),
  SetOrders:(orders) => dispatch(SetOrders(orders))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
