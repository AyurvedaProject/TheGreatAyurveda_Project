import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useNavigate } from 'react-router-dom';
import './style.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function ForgetPassword() {
    const [isSignUp, setIsSignUp] = useState(false);

    function toggleForm() {
        setIsSignUp(!isSignUp);
    };

    const [name, setname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    let [input, setinput] = useState("");
    let [pass, setpass] = useState("");
    let [pass2, setpass2] = useState(" ");
    let [email2, setemail2] = useState(" ");

    const forgetpassword = () => {
        axios.post("http://localhost:3005/user/forgotpassword", { name, email })
            .then(response => {
                if (response.status == 200) {
                    alert(response.data.message)
                    toast.success("Submmit Success....");
                    toggleForm();
                }
            }).catch(err => {
                alert(err.code)
                console.log(err);
                toast.error("Invalid name Password...");
            })
    }

    const setnewpassword = () => {
        axios.put("http://localhost:3005/user/setnewpassword", { name, email, password })
            .then(response => {
                if (response.status == 200) {
                    alert(response.data.message)
                    toast.success("Set Password Success....");
                }
            }).catch(err => {
                alert(err.code)
                console.log(err);
                toast.error("set Password Fail...");
            })
    }

    const handleSubmit = event => {
        console.log('handleSubmit ran');
        event.preventDefault(); // 👈️ prevent page refresh
    }

    return (
        <div>
            <Header />
            <div className='login'>
                <div className={`containe ${isSignUp ? 'active' : ''}`}>
                    <div className="form-container sign-up">
                        <form onSubmit={handleSubmit} className='signincon'>
                            <h1 className='fs-2'>Create Password</h1>
                            <span className='forget-text'>enter new password</span>
                            <input className='signin-password' onChange={(event) => { (event.target.value == "") ? setpass2("password is required") : (!event.target.value.match(/^(?=.*\d)/)) ? setpass("Password must contain at least one digit.") : (!event.target.value.match(/^(?=.*[a-zA-Z])/)) ? setpass("Password must contain at least one letter.") : (!event.target.value.match(/^.{5,}$/)) ? setpass("Password must be at least 5 characters long.") : setpass(""); setPassword(event.target.value); }} type="password" placeholder="Enter New Password" />
                            <small className='signin-input-message'>{pass}</small>
                            <input className='signin-password' onChange={(event) => { (event.target.value == "") ? setpass2("password is required") : (!event.target.value.match(/^(?=.*\d)/)) ? setpass2("Password must contain at least one digit.") : (!event.target.value.match(/^(?=.*[a-zA-Z])/)) ? setpass2("Password must contain at least one letter.") : (!event.target.value.match(/^.{5,}$/)) ? setpass2("Password must be at least 5 characters long.") : setpass2(""); setPassword2(event.target.value); }} type="password" placeholder="Verify Password" />
                            <small className='signin-input-message'>{pass2}</small>
                            {(pass == pass2 && password === password2) ? <Link to="/" onClick={() => { (password === password2) ? setnewpassword() : toast.error("Password must be same...") }}><button>Reset</button></Link> : <button onClick={() => { (password == "") ? setpass("enter new password") : setpass2("enter verify password") }} style={{ background: "var(--green-3)" }}>Reset</button>}
                        </form>
                    </div>
                    <div className="form-container sign-in">
                        <form onSubmit={handleSubmit} className='signincon'>
                            <h1 className='fs-2'>Forget Password</h1>
                            <span className='forget-text'>enter your name email</span>
                            <input className='signin-input' onChange={(event) => { (event.target.value == "") ? setinput("name is required") : (!event.target.value.match("^[a-z A-Z]+$")) ? setinput("name contains only charecters") : (!event.target.value.match("^[a-z A-Z]{2,20}$")) ? setinput("invelid name") : setinput(""); setname(event.target.value); }} type="text" placeholder="User Name" />
                            <small className='signin-input-message'>{input}</small>
                            <input className='signin-password' onChange={(event) => { (event.target.value == "") ? setemail2("email is required") : (!event.target.value.match(/^[^\s@]+@gmail\.com$/)) ? setemail2("Invalid Email.") : setemail2(""); setEmail(event.target.value); }} type="email" placeholder="Email" />
                            <small className='signin-input-message'>{email2}</small>
                            <Link className="ml-3 links" to="/user">→ Back ←</Link>
                            {(input == email2) ? <button onClick={forgetpassword}>Submmit</button> : <button onClick={() => { (name == "") ? setinput("name is required") : (email == "") ? setemail2("email is required") : setemail2(" ") }} style={{ background: "var(--green-3)" }}>Submmit</button>}
                        </form>
                    </div>
                    <div className="toggle-container">
                        <div className="toggle">
                            <div className="toggle-panel toggle-left signincon">
                                <h1 className='fs-2'>Welcome Back!</h1>
                                <p>We received a request to reset your password after set new password</p>
                                <h2 className='fs-2'>→</h2>
                            </div>
                            <div className="toggle-panel toggle-right signincon">
                                <h1 className='fs-2'>Hello, Friend!</h1>
                                <p>Please use the email or name to log in and reset your password</p>
                                <h2 className='fs-2'>←</h2>
                            </div>
                        </div>
                    </div>
                    <ToastContainer className="toast" />
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    );
}