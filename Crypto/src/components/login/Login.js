import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

// style
import "./Login.css";

// function
import validation from './LoginErrors';

// React-toastify
const notify = (type, text) => {
    if(type === "success") toast(text);
    else if(type === "invalid") toast(text);
};

const Login = () => {

    const navigator = useNavigate();

    const [data, setData] = useState({
        usernameValue: "",
        passwordValue: ""
    });
    const [error, setError] = useState({});
    const [touch, setTouch] = useState({});

    useEffect(() => {
        setError(validation(data))
    }, [data, touch]);

    const inputValueHandler = event => {
        setData({...data, [event.target.name]: event.target.value});
    }

    const focusHandler = event => {
        setTouch({...touch, [event.target.name]: true});
    }

    const buttonHandler = () => {
        if(Object.keys(error).length === 0){
            notify("success", "Sign Up Successfully");
            setTimeout(() => {
                navigator("/", {replace: true})
            }, 3000);
        } else if (Object.keys(error).length > 0){
            notify("invalid", "Invalid Data");
        }
    }

    return (
        <div className='bg'>
            <div className='login'>
                <h1>Sign Up</h1>
                <div>
                    <input className='inputText1' name='usernameValue' type="text" value={data.usernameValue} required="required" onChange={inputValueHandler} onFocus={focusHandler}/>
                    <label className='label-1'>username</label>
                    {error.usernameError && touch.usernameValue && <span className='userError'>{error.usernameError}</span>}
                </div>
                <br />
                <div>
                    <input className='inputText2' name='passwordValue' type="password" value={data.passwordValue} required="required" onChange={inputValueHandler} onFocus={focusHandler}/>
                    <label className='label-2'>password</label>
                    {error.passwordError && touch.passwordValue && <span className='passError'>{error.passwordError}</span>}
                </div>
                <button onClick={buttonHandler}><strong>Sign Up</strong></button>
            </div>   
            <div className='guide'>
                <h1><em>Guide To Digital Currency</em></h1>
                <ul>
                    <li>Cryptocurrencies have been called everything from the money of the future to an extremely risky asset.</li>
                    <li>Thoughts and strategies about cryptocurrencies spread fast, primarily because cryptocurrencies are a complicated and unique technology that is also accessible.</li>
                    <li>This may leave people wondering if they should be investing in cryptocurrencies, if they are safe, or how they even work.</li>
                </ul>
            </div> 
            <ToastContainer 
                position="top-left"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='dark'
            />
        </div>
    );
};

export default Login;