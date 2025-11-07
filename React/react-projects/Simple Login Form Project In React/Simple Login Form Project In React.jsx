// App.jsx file code:
/*

import './App.css'
import AuthForm from './AuthForm'

function App() {

    return (
        <>
        <div>
            <AuthForm />
        </div>
        </>
    )
}

export default App

*/

//AuthForm.jsx file code:
/*
import { useState } from "react"

function AuthForm(){
    const [isLogin, setIsLogin] = useState(true)
    return(
        <>
            <div className="container">
                <div className="form-container">
                    <div className="form-toggle">
                        <button className={isLogin ? 'active' : ""} onClick={()=>setIsLogin(true)}>Login</button>
                        <button className={!isLogin ? 'active' : ""} onClick={()=>setIsLogin(false)}>Sign up</button>
                    </div>

                    {
                        isLogin ? <>
                            <div className="form">
                                <h2>Login Form</h2>
                                <input type="email" placeholder="Enter your email"/>
                                <input type="password" placeholder="Enter your password"/>
                                <a href="#">Forget Password?</a>
                                <button>Login</button>
                                <p>Not a member? <a href="#" onClick={()=>setIsLogin(false)}>Sign up Now</a></p>
                            </div>
                        </> : <>
                            <div className="form">
                                <h2>Signup Form</h2>
                                <input type="email" placeholder="Enter your email"/>
                                <input type="password" placeholder="Enter your password"/>
                                <input type="password" placeholder="Enter your confirm password"/>
                                <button>Sign Up</button>
                                <p>Already a member? <a href="#" onClick={()=>setIsLogin(true)}>Sign up Now</a></p>
                            </div>
                        </>
                    }

                </div>
            </div>
        </>
    )
}
export default AuthForm
*/

//App.css file code:
/*
    body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: #0C67A0;
    }

    .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    }

    .form-container {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 300px;
    }

    .form-toggle {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    }

    .form-toggle button {
    width: 50%;
    padding: 10px;
    background-color: #f3f3f3;
    border: none;
    cursor: pointer;
    font-size: 16px;
    border-radius: 10px 10px 0 0;
    }

    .form-toggle .active {
    background-color: #033452;
    color: white;
    }

    .form {
    display: flex;
    flex-direction: column;
    }

    .form h2 {
    margin-bottom: 20px;
    }

    .form input {
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    }

    .form button {
    padding: 10px;
    background-color:#033452;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    }

    .form a {
    color: #007bff;
    text-decoration: none;
    margin-bottom: 10px;
    text-align: right;
    }

    .form p {
    text-align: center;
    }
*/