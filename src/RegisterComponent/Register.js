import React from "react";
import RegisterForm from "./RegisterForm";
import { Navigate, useNavigate } from "react-router-dom";

const Register = () => {
    let navigate = useNavigate();

    const newUser = (user) => {



        console.log(user)
        fetch('http://localhost/api/insert_user.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        }).then(response => console.log("data stored")
            
            )?navigate('/'):alert("something error happened please try again");

    }
    return (
        <div>
            <RegisterForm NewUser={newUser} />
        </div>
    );
}

export default Register;