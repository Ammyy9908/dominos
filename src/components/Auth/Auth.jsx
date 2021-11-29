import React from 'react'
import { connect } from 'react-redux'
import "./Auth.css"
import { GoogleLogin } from 'react-google-login';
function Auth({auth_popup}) {
    

  

    const responseGoogle = (response) => {
        console.log(response);
      }
    return (
        <div className={`auth ${auth_popup && "auth-enabled"}`} tabIndex="1">
            


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

export default connect(mapStateToProps,null)(Auth)
