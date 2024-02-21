import React from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    const loginInfo = {
        "firstName" : "Sam ",
        "lastName" : "Ramesh ",
        "role" : "Super Admin"
    };
    sessionStorage.setItem('LoginInfo',loginInfo)
    navigate('/home');

  }
  return (
    <div className="page-view login basic-center-div ">
        <div className="login-box basic-center-div flex-col">
            <p className="login-head text">Welcome back <span className="magic-word">Explorer</span></p>
            <div className="input-container flex-col basic-vr-center-div">
                <p className="login-in-txt text">Email</p>
                <input className="login-input text" type="text" />
            </div> 
            <div className="input-container flex-col basic-vr-center-div">
                <p className="login-in-txt text">Password</p>
                <input className="login-input text" type="password" />
            </div> 
            <div className="button-box basic-center-div">
                <button className="button-action basic-center-div" onClick={handleLogin}>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Login