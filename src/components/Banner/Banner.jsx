import React from "react";
import "./Banner.css";
import axios from "axios"
import { connect } from "react-redux";
import { SetUser } from "../../redux/actions/_appAction";
const Banner = ({SetUser}) => {
  const [location,setLocation] = React.useState(null);
  const [address,setAddress] = React.useState(null);

  function getCoords(){
    navigator.geolocation.getCurrentPosition(success=>{
      console.log(success)
      const {latitude,longitude} = success.coords;
      setLocation({latitude,longitude})
      return location;
    },fail=>console.log(fail))

  }
  React.useEffect(()=>{
getCoords();

  },[])
  

  const locateMe = async ()=>{
    getCoords()
   
    axios.get(`https://api.dominos.co.in/locator-service/ve2/geocode?latitude=${location && location.latitude}&longitude=${location && location.longitude}`).then((response)=>{
    console.log(response);
    const {data} = response;
    console.log(data);
    const {results} = data;
    console.log(results);
    const street_address = results.filter((loc)=>loc.types.includes("STREET_ADDRESS") || loc.types.includes('PREMISE'))[0];
    console.log(street_address)
    const {addressComponents} = street_address;
    const {longName} = addressComponents[2];
    setAddress(longName);
    }).catch((e)=>{
      console.log(e)
    })

    
  }

  

  
  return (
    <div className="online-order-hero">
      <img src="https://www.dominos.co.in/assets/header_bg.png" alt="banner-image" className="banner-image"/>
      <div className="banner-wrapper">
        <div className="banner-content">
          <h2>Domino's online ordering</h2>
          <p>Yummy pizza delivered fast & fresh </p>
          <button onClick={locateMe}>{!address?"Locate me":`${address}`}</button>
          {address && <button className="address-remove-btn" onClick={()=>setAddress(null)}>Remove Address</button>}
        </div>
        
      </div>
    </div>
  );
};



const mapDispatchToProp =(dispatch)=>({
  SetUser:(user)=>dispatch(SetUser(user))
})


export default connect(null,mapDispatchToProp)(Banner);
