import React from "react";
import './Login.css';
import {FaEnvelope, FaKey} from 'react-icons/fa'
//import { GoogleLogin } from '@react-oauth/google';
//import {jwtDecode} from "jwt-decode";
import { useGoogleLogin } from '@react-oauth/google';



const Login = () => {
    const login = useGoogleLogin({
        onSuccess: tokenResponse => console.log(tokenResponse),
      });
      
      
    return(
        <div className="mainContainer">
            <div className="container">
            <div className="loginheader">
                <div className="text">Login</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                
                <div className="input">
                    <FaEnvelope color="#1f19ba" fontSize="1.5em"/>
                    <input type="email"  placeholder="Email Id" name="" id="" />
                </div>
                <div className="input">
                    <FaKey color="#1f19ba" fontSize="1.5em"/>
                    <input type="password"  placeholder="Password" name="" id=""/>
                </div>
            </div>
            <div className="submit-container">
                <div className="submit">
                    Login
                </div>
                <div className="LoginWtihGoogle">  
                <button onClick={() => login()} >Sign in with Google 🚀</button>
                </div>
            </div>
        </div>
     </div>
    )
}
export default Login