import React, { useState } from "react";
import LoginCard from "./LoginCard";
import './Login.css'
import { useNavigate } from "react-router-dom";


const Login = (props) => {
    const [loginStatus, setloginStatus] = useState(true);
    const [error,setError]=useState("");


    let navigate = useNavigate();



    const user = {
        email : 'umeshmahajan88050@gmail.com',
        password : 'Umesh@123'
      }

    const LoginDetails = (data) => {
        
        let inputemail = data.email;
        let inputpass = data.password;
        
    
        if(user.email === inputemail && user.password === inputpass){
            console.log("login loginStatus " + loginStatus);
          setloginStatus(true)
          navigate('/success', { state: user });

        }else{
            setError("Login failed")
            window.location.href = '/'
        }
    }

    

    
    return (
        <>
            <div >
                <LoginCard LoginDetails = { LoginDetails } er = {error} />

            </div>

        </>
    );
}

export default Login;