import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth.js';
import './Login.css'

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, loading, authError } = useAuth();
    
    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData)      
    }
    const handleLogin = e => {
        loginUser(loginData.email,loginData.password,location,history)

    e.preventDefault()
    }
    return (
        <div>
            <div className="p-5">
                <h2>Please Login here</h2>
                 {user.email && <div className="alert alert-success mb-3 m-auto mt-3 w-50" role="alert">
                    Login Success
                   </div> }
                   
                    {authError && <div class="alert alert-danger m-auto mt-3 mb-3 w-50 " role="alert">
                       {authError}
                      </div> }
                {!loading && <form onSubmit={handleLogin}>
                        
                    <input className=" w-50"
                        required
                        onBlur={handleOnBlur}
                        type="text"
                        name="email"
                        placeholder="Your email here" />
                  <br />
                    <input className="my-3  w-50"
                        required
                         onBlur={handleOnBlur}
                        type="password"
                        name="password"
                        placeholder="Password Please" />
                    <br />
                    <input className="bg-primary w-50 mb-2" type="submit" value="Login" />
                    <br />
                    <Link style={{ textDecoration: 'none',color: 'info', fontWeight:'bold' }} to="/register">New User? Please Register</Link>
                </form>}
                {loading && <div className="py-5 my-5"><Spinner className="p-5" animation="grow" variant="info" /> </div>}
               
            </div>
        </div>
    );
};

export default Login;