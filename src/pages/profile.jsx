import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import "./profile.css"
import {MdEdit} from "react-icons/md"
import saveProfile from "../utils/save_profile"
function ProfileForm({user,setForm,setUser}){

    const [name,setName] = React.useState(user && user.name);
    const [email,setEmail] = React.useState(user && user.email);
    const [avatar,setAvatar] = React.useState(user && user.avatar);


    const setPicture = (e)=>{
        console.log('working...')
        const file = e.target.files[0];
        console.log(file);
        const allowed_extensions = ["jpg","jpeg","png"];
        const extension = file.name.split(".").pop();
        if(!allowed_extensions.includes(extension)){
            return alert("Only jpg,jpeg and png files are allowed");
        }

        const reader = new FileReader();

        reader.addEventListener("load", function () {
            // convert image file to base64 string
            console.log(reader.result)
            setAvatar(reader.result);
          }, false);
        
          if (file) {
            reader.readAsDataURL(file);
          }
    }




    const handleClose = (e)=>{
        const target = e.target;
        if(target.classList.contains('profile-form')){
            setForm(false)
        }
    }

    const handleSave = ()=>{
        saveProfile({name,email,avatar}).then((feedback)=>{
            const {user} = feedback;
            setUser(user);
            setForm(false);

        
        }).catch((err)=>{console.log(err)});
    }

    console.log(avatar)
    return(
        <div className="profile-form" onClick={handleClose}>
            <div className="profile-form-wrapper" tabIndex="1">
                <label className="profile-form-avatar" for="avatar">
                    <img src={avatar} alt="user-form-avatar" />
                    <input type="file" name="avatar" id="avatar" onChange={setPicture}/>
                </label>
                <div className="form-input">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" value={name} onChange={(e)=>setName(e.target.value)} />
                </div>
                <div className="form-input">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="form-input">
                    
                    <input type="button" value="Save Profile" onClick={handleSave}/>
                </div>
            </div>
        </div>
    )
}
function Profile({user,setUser}) {
    const [isForm,setForm] = React.useState(false);
    return (
        <div>
            <Navbar/>
            {isForm && <ProfileForm user={user} setForm={setForm} setUser={setUser}/>}
            <section className="main-section">
                <div className="section-wrapper">
                    <div className="profile">
                      
                       <div className="user-avatar">
                            <img src={user && user.avatar} alt="user-avatar" />
                            <button className="profile-edit-btn" tabIndex="1" onFocus={()=>{
                                    setForm(true);
                            }}>
                                <MdEdit/>
                            </button>
                       </div>
                       <strong>{user && user.name}</strong>
                       <a href={`mailto:${user && user.email}`}>{user.email}</a>
                       <span className="user-address">{user && user.addresses[0]}</span>
                       <Link to="/logout" className="logout_btn">Logout</Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

const mapStateToProps = (state) => ({
    user: state.appReducer.user
})

const mapDispatchToProps = (dispatch) => ({
    setUser:(user)=>dispatch({type:"SET_USER",user})
})

export default connect(mapStateToProps,mapDispatchToProps)(Profile)
