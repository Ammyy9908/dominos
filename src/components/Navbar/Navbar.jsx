import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { SetAuthPop, SetUser } from "../../redux/actions/_appAction";
import "./Navbar.css";
const Navbar = ({user,SetAuthPop}) => {

  const [isDrop,setDrop] = React.useState(false);
  
 
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
        {/**onClick={user?handleLogout:handleAuthPop} */}
        <button className={`auth-btn ${user && "auth-btn-authenicated"}`} tabIndex="1" onFocus={()=>{
          user && setDrop(true);
          !user && SetAuthPop(true);
        }} onBlur={()=>{
          user &&setDrop(false);
          !user && SetAuthPop(false);
        }}>
          {user?<><img src={user.avatar} alt="user-avatar"/></>:"Login"}
          {user && <div className={`user-dropdown ${isDrop && "drop_enable"}`}>
            <Link to="/orders">My Orders</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/favourites">My favourites</Link>
          </div>}
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
