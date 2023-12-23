import React, { useState } from "react";
import { Link } from "react-router-dom";
import './RegisterForm.css';

const RegisterForm = (props) => {


    const [inputName, setName] = useState('');
    const [inputPassword, setPassword] = useState('');
    const [inputEmail, setEmail] = useState('');
    const [inputPhone, setPhone] = useState('');


    const nameChangeHandler = (event) => {
        setName(event.target.value);

    };
    const passwordChangeHandler = (event) => {
        setPassword(event.target.value);

    };
    const emailChangeHandler = (event) => {
        setEmail(event.target.value);

    };
    const phoneChangeHandler = (event) => {
        setPhone(event.target.value);
    };


    const submitHandler = (event) => {
        event.preventDefault();
        const object = {
            user_id : Number(Math.random().toString()),
            name : inputName,
            password : inputPassword,
            email : inputEmail,
            phone : inputPhone
        }
        console.log(object)
        props.NewUser(object);
    }

    return (
        <section class="section-container">
            <header>Registration Form</header>
            <form  class="reg-form" onSubmit={submitHandler}>
                <div class="input-box">
                    <label>Name</label>
                    <input type="text" placeholder="First Name & Last name" name="name" required onChange={nameChangeHandler}  />
                </div>

                <div class="input-box">
                    <label>Email Address</label>
                    <input type="text" placeholder="Enter email address" name="email" required onChange={emailChangeHandler} />
                </div>

                <div class="column">
                    <div class="input-box">
                        <label>Phone Number</label>
                        <input type="text" placeholder="Enter phone number" name="phone" required onChange={phoneChangeHandler} />
                    </div>
                </div>

                <div class="input-box">
                    <label>Password</label>
                    <input type="password" placeholder="Enter password" name="password" required onChange={passwordChangeHandler} />
                </div>

                
                <div class="gender-box">
                    <h3>Gender</h3>
                    <div class="gender-option">
                        <div class="gender">
                            <input type="radio" id="check-male" name="gender" checked />
                            <label for="check-male">male</label>
                        </div>
                        <div class="gender">
                            <input type="radio" id="check-female" name="gender" />
                            <label for="check-female">Female</label>
                        </div>
                        <div class="gender">
                            <input type="radio" id="check-other" name="gender" />
                            <label for="check-other">prefer not to say</label>
                        </div>
                    </div>
                </div>

                <button>Submit</button>
            </form>
        </section>

    );
}

export default RegisterForm;