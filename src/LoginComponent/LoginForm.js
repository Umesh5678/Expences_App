import { useState } from 'react';
import './LoginForm.css'
import { Link } from 'react-router-dom';


const LoginForm = (props) => {

    const [inputEmail, setEmail] = useState('');
    const [inputPassword, setPassword] = useState('');


    const emailChangeHandler = (event) => {
        setEmail(event.target.value);

    };
    const passwordChangeHandler = (event) => {
        setPassword(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const object = {
            email: inputEmail,
            password: inputPassword
        }

        props.LoginHandle(object);






    }

    return (
        <form className='form' onSubmit={submitHandler}>
            <h3>Login Here</h3>

            <label for="username">Username</label>
            <input type="text" placeholder="Email or Phone" id="username" onChange={emailChangeHandler} />

            <label for="password">Password</label>
            <input type="password" placeholder="Password" id="password" onChange={passwordChangeHandler} />
            <h6>{props.message}</h6>

            <button type='submit'>Log In</button>
            <div className='registerLink'>
                <span>You don't have account?</span><small><Link to="/register" >Create your account</Link></small>
            </div>
        </form>
    );
}

export default LoginForm;