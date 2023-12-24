import React, { useEffect, useState } from "react";
import LoginCard from "./LoginCard";
import './Login.css'
import { useNavigate } from "react-router-dom";


const Login = (props) => {
    // const [loginStatus, setloginStatus] = useState(true);
     const [error, setError] = useState("");



     let navigate = useNavigate();






    const LoginDetails = async (user) => {
        

        try {
            const response = await fetch('http://localhost/api/fetch_user_api.php', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(user),
            });
        
            const textResponse = await response.text();
            console.log('Server Response:', textResponse);

            const data = JSON.parse(textResponse);
            console.log(data)
            navigate('/success', { state: user })
            // Handle success or error, and store the authentication token
          } catch (error) {
            console.error('Error during login:', error);
          }


        

        



    }




    return (
        <>
            <div >
                <LoginCard LoginDetails={LoginDetails} er={error} />

            </div>

        </>
    );
}

export default Login;