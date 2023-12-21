import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './LoginComponent/Login';
import { BrowserRouter as Router , Routes , Route, useNavigate } from 'react-router-dom'
import Register from './RegisterComponent/Register';



const root = ReactDOM.createRoot(document.getElementById('root'));








root.render(
  <React.StrictMode>
    <Router>
            <Routes>
                <Route path="/" exact element={<Login />}/>
                <Route path="/success"  exact element={<App />}/> 
                <Route path="/register"  exact element={<Register  />}/> 
            </Routes>
        </Router>
  </React.StrictMode>
);


