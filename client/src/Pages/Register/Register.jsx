import { Link } from 'react-router-dom';
import { useState } from 'react';
import './register.css'
import axios from 'axios';

export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const submitRegister = async(e)=>{
        e.preventDefault();
        setError(false);
        try{
        const res = await axios.post("/auth/register", {username, email, password});
        res.data && window.location.replace("/login");
        }catch(err){
            setError(true);
            console.log(err);
        }
    }
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
                <form className="registerForm" onSubmit={submitRegister}>
                    <label>Username</label>
                    <input type="text" placeholder="Enter your username..." onChange={e=>setUsername( e.target.value)} />
                    <label>Email</label>
                    <input type="email" placeholder="Enter your email..." onChange={e=>setEmail(e.target.value)}/>
                    <label>Password</label>
                    <input type="password" placeholder="Enter your password..." onChange={e=>setPassword(e.target.value)}/>
                    <button className="registerLoginButton">Register</button>
                </form>
                <button className="loginRegisterButton" type="submit">
                    <Link to="/login" className="link">Login</Link>
                </button>
                {error && <span className="error-msg">Something went wrong!</span>}
            </div>
    )
}
