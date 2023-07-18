import React, {useRef, useState} from 'react';
import UserLog from "./UserLog.css"
import {Link} from "react-router-dom";


const Registration = () => {

    const usernameRef = useRef()
    const passwordRef = useRef()
    const passwordTwoRef = useRef()
    const [error, setError] = useState("")

    const registration = async () => {

        const userInfo = {
            username: usernameRef.current.value,
            password: passwordRef.current.value,
            passwordTwo: passwordTwoRef.current.value
        }
        console.log(userInfo)

        if (userInfo.username.length > 20 || userInfo.username.length < 4) return setError("Username must be between 4 and 20 characters")
        if (userInfo.password.length > 20 || userInfo.password.length < 4) return setError("Password must be between 4 and 20 characters")
        if (userInfo.password > 20 === userInfo.passwordTwo) return setError("Password should mach")
        setError("")

        const options = {
            method: "POST",
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify(userInfo)
        }

        const res = await fetch("http://localhost:4002/registration", options)
        const data = await res.json()
        console.log(data)
        usernameRef.current.value = ""
    }


    return (
        <div className="registerPage">
            <div className="register">
                <div>{error}</div>
                <input ref={usernameRef} type="text" placeholder="username"/>
                <input ref={passwordRef} type="text" placeholder="username"/>
                <input ref={passwordTwoRef} type="text" placeholder="username"/>
                <div className="registerButton d-flex j-center">
                    <a onClick={registration} href="#">
                        <span>Register</span>
                    </a>
                </div>
                <p>You can register or if you already have an account you can <Link className="link" to="/login">Login</Link></p>
            </div>

        </div>
    );
};

export default Registration;