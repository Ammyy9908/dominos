import React from 'react'
import { connect } from 'react-redux'
import "./Auth.css"
import { GoogleLogin } from 'react-google-login';
import axios from 'axios';
import Cookies from 'js-cookie';
import { SetAuthPop } from '../../redux/actions/_appAction';
function Auth({auth_popup,SetAuthPop}) {
    

  
    const sendDataToServer = async (email,name,googleId,imageUrl)=>{
        try{
            const r= await axios.post('https://dominos-backend8.herokuapp.com/api/auth/new',{email,name,googleId,imageUrl});
            return r.data;
        }
        catch(e){
            return e;
        }
    }

    const responseGoogle = (response) => {
        console.log(response);
        const {error} = response;
        if(error){
            console.log(error);
        }
        else{
            const {profileObj} = response;
            console.log(profileObj);
            const {email,name,googleId,imageUrl} = profileObj;
            console.log(email,name,googleId,imageUrl);
            sendDataToServer(email,name,googleId,imageUrl).then((data)=>{
                
                const {token,error} = data;
                if(error){
                    console.log(error);
                }
                else{
                    Cookies.set('AUTH_TOKEN',token);
                    SetAuthPop(false);
                    window.location.reload();

                }
            });
        }
      }
    return (
        <div className={`auth ${auth_popup && "auth-enabled"}`}>
            


                <GoogleLogin
    clientId="58816742729-85m7dv98jb95n3p39c1a05l667krckl0.apps.googleusercontent.com"
    render={renderProps => (

        <button className="google-auth-btn" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                <div className="google-icon-wrapper">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="" />
                </div>
                <p>Sign in with Google</p>

                </button>
      
    )}
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
   
  />
        </div>
    )
}


const mapStateToProps = (state) => ({
    auth_popup:state.appReducer.auth_popup
})

const mapDispatchToProps = (dispatch) => ({
    SetAuthPop:(auth)=>dispatch(SetAuthPop(auth))
})

export default connect(mapStateToProps,mapDispatchToProps)(Auth)
