import React from "react";
import { Link } from "react-router-dom";

const Login= ()=>{

    const [username, setUsername]= React.useState('');
    const [password, setPassword]= React.useState('');

    const handleLogin=async ()=>{
        let result= await fetch('https://localhost:7158/api/Users/login', {
            method: 'post',
            body: JSON.stringify({username, password}),
            headers:{
                'Content-Type': 'application/json'
            }
        });
        result=await result.json();
        console.warn(result);
        if(result.token)
        {
            localStorage.setItem("token", 'Bearer' + result.token);
        }
        else
        {
            alert("username or password invalid");
        }
    }
    return(
        <div className="wrapper">
        <form action="">
            <h1>Login</h1>
            <div className="input-box">
                <input type="text" placeholder="Username" required onChange={(e)=> setUsername(e.target.value)} value={username}></input>
                <i className='bx bxs-user'></i>
            </div>
            <div className="input-box">
                <input type="password" placeholder="Password" required onChange={(e)=> setPassword(e.target.value)} value={password}></input>
                <i className='bx bxs-lock-alt'></i>
            </div>
            
            <button type="submit" className="btn" onClick={handleLogin}>Login</button>
            <div className="register-link">
                <p>Don't have an account <Link to={'/'}>Register</Link></p>
            </div>
        </form>
       </div>
    )
}
export default Login;