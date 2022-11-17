import React, {useState} from "react";

export default function Login() {
    const [password, setPassword] = useState("");
    
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        console.log(password)
    }

    const handleSubmit = (event) => {
        console.log("Submitting: " + password)
        // do something.
    }

    return (
      <form>
        <label for="password">Password</label>
        <input type="password" id="password" name="password" onChange={handlePasswordChange}/>
        <button type="button" onClick={handleSubmit}>Submit</button>
      </form>
    )
}