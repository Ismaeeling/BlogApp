import { Link } from 'react-router-dom'
import './login.css';
import {useRef, useContext } from "react";
import axios from 'axios';
import { Context } from '../../Context/Context';

export default function Login() {
    const userRef = useRef();
    const passRef = useRef();
    const { user, dispatch, isFetching } = useContext(Context);

    const submitLogin = async (e) => {
        e.preventDefault();
        dispatch({type: "LOGIN_START"});
        try{
            const res = await axios.post("/auth/login",
            {username:userRef.current.value,
            password:passRef.current.value});
        dispatch({type:"LOGIN_SUCCESS", payload:res.data})
        }catch(err){
            dispatch({type:"LOGIN_FAILURE"})
        }
    }
    console.log(user);
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
                <form className="loginForm" onSubmit={submitLogin}>
                    <label>Username</label>
                    <input type="text" placeholder="Enter your email..." ref={userRef}/>
                    <label>Password</label>
                    <input type="password" placeholder="Enter your password..." ref={passRef}/>
                    <button className="loginButton" type="submit">Login</button>
                </form>
                <button className="registerButton" >
                    <Link to="/register" className="link">Register</Link>
                </button>
            </div>
    )
}
