import React, {useState} from "react";
import {array} from './common_passwords_list.js'

export default function Login() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [password, setPassword] = useState("");
    
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        console.log(password)
    }

    const handleSubmit = (event) => {
        console.log("Submitting: " + password);
        console.log(array)
        if (password.length >= 10 && !array.includes(password)) {
            console.log("password pass!")
            setIsLoggedIn(true)
        } else {
            console.log("password fails!")
        }
    }

    const handleLogout = (event) => {
        setIsLoggedIn(false)
        setPassword("")
    }

    return (
    <>
    {
      !isLoggedIn && 
      <form>
        <label for="password">Password</label>
        <input type="password" id="password" name="password" onChange={handlePasswordChange}/>
        <button type="button" onClick={handleSubmit}>Submit</button>
      </form>
    }
    {
        isLoggedIn && 
        <>
        <h1>{password}</h1>
        <button type="button" onClick={handleLogout}>Logout</button>
        </>
    }
    </>
    )
}