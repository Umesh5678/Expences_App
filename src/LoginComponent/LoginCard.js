import './LoginCard.css'
import LoginForm from './LoginForm';

const LoginCard = (props) => {

    let message = props.er;
    const LoginData = (data) => {
        props.LoginDetails(data);
    }
    return (
        <div >

            <div><LoginForm LoginHandle={LoginData} message = { message }/></div>
            
        </div>
    );
}

export default LoginCard;