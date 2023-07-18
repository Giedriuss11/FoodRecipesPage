import React, {useRef, useState} from 'react';
import UserLog from "./UserLog.css"
import {Link} from "react-router-dom";


const Login = () => {

    const usernameRef = useRef()
    const passwordRef = useRef()
    const [error, setError] = useState("")

    const login = async () => {

        const userInfo = {
            username: usernameRef.current.value,
            password: passwordRef.current.value,
        }

        if (userInfo.username.length > 20 || userInfo.username.length < 4) return setError("Username must be between 4 and 20 characters")
        if (userInfo.password.length > 20 || userInfo.password.length < 4) return setError("Password must be between 4 and 20 characters")
        setError("")

        const options = {
            method: "POST",
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify(userInfo)
        }

        const res = await fetch("http://localhost:4002/login", options)
        const data = await res.json()
        console.log(data)

    }


    return (
        <div className="registerPage">
            <div className="register">
                <div>{error}</div>
                <input ref={usernameRef} type="text" placeholder="username"/>
                <input ref={passwordRef} type="text" placeholder="username"/>
                <div className="registerButton d-flex j-center">
                    <a onClick={login} href="#">
                        <span>Login</span>
                    </a>
                </div>
                <p>You can login or if you do not have an account you can <Link className="link" to="/registration">Register</Link></p>
            </div>

        </div>
    );
};

export default Login;