import React from "react";
import RegisterForm from "./RegisterForm";

const Register = (props) => {
    const newUser = (user) => {
        console.log(user)
    }
    return (
        <div>
            <RegisterForm NewUser = { newUser } />
        </div>
    );
}

export default Register;