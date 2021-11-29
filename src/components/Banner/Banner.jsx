import React from "react";
import "./Banner.css";
import axios from "axios"
import { connect } from "react-redux";
import { SetUser } from "../../redux/actions/_appAction";
const Banner = ({SetUser}) => {
  const [location,setLocation] = React.useState(null);

  const locateMe = ()=>{
    // axios.get('https://api.dominos.co.in/locator-service/ve2/geocode?latitude=13.115396&longitude=77.6212476').then((response)=>{
    // console.log(response);
    // const {data} = response;
    // console.log(data);
    // const {results} = data;
    // console.log(results);
    // setLocation(results[0]);
    // }).catch((e)=>{
    //   console.log(e)
    // })

    SetUser({username:"Sumit",mobile:"7406644532"});
  }

  console.log(location);

  
  return (
    <div className="online-order-hero">
      <img src="https://www.dominos.co.in/assets/header_bg.png" alt="banner-image" className="banner-image"/>
      <div className="banner-wrapper">
        <div className="banner-content">
          <h2>Domino's online ordering</h2>
          <p>Yummy pizza delivered fast & fresh</p>
          <a href="#" onClick={locateMe}>Locate me</a>
        </div>
        
      </div>
    </div>
  );
};



const mapDispatchToProp =(dispatch)=>({
  SetUser:(user)=>dispatch(SetUser(user))
})


export default connect(null,mapDispatchToProp)(Banner);
