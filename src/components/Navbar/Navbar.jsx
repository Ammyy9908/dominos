import Cookies from "js-cookie";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { SetAuthPop, SetUser } from "../../redux/actions/_appAction";
import "./Navbar.css";
const Navbar = ({user,SetUser,cart,SetAuthPop}) => {
 

 

  const handleAuthPop = ()=>{
    SetAuthPop(true);

  }

  const handleLogout = ()=>{
    Cookies.remove('AUTH_TOKEN');
    SetUser(null);
    
  }
  return (
    <div className="navbar-wrapper">
      <div className="navbar">
        <Link to="/">
          <img
            src="https://www.dominos.co.in/assets/Logo.png"
            alt="brand-logo"
          />
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="/menu">Our Menu</Link>
              <Link to="/store">Store Finder</Link>
              <Link to="/gift">Gift Card</Link>
              <Link to="/enquiry">Corporate Enquiry</Link>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <button className={`auth-btn ${user && "auth-btn-authenicated"}`} onClick={user?handleLogout:handleAuthPop}>
          {user?<><img src={user.avatar}/></>:"Login"}
        </button>
      </div>
    </div>
  );
};

const mapStateToProp = (state)=>({
  user:state.appReducer.user,
  cart:state.appReducer.cart
})

const mapDispatchToProp = (dispatch)=>({
  SetUser:(user)=>dispatch(SetUser()),
  SetAuthPop:(auth)=>dispatch(SetAuthPop(auth))
})
export default connect(mapStateToProp,mapDispatchToProp)(Navbar);
