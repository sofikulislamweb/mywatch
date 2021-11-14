import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link ,useHistory} from 'react-router-dom';
import useAuth from '../../hooks/useAuth.js';

const Register = () => {
    const [loginData, setLoginData] = useState({})
    const { registerUser, loading, authError, user } = useAuth();

    const history = useHistory();
    
    
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData)
        
        
    }
    const handleRegister = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password is not mathched');
            return
        }
       registerUser(loginData.email ,loginData.password,loginData.name,history)
        e.preventDefault()
    }

return (
    <div>
        <div>
            <div className="p-5">
                    <h2>Please Register here</h2>
                    
                    {user.email && <div className="alert alert-success  m-auto mt-3 w-50" role="alert">
                    Successfully Register
                   </div> }
                   
                    {authError && <div class="alert alert-danger m-auto mt-3 w-50 " role="alert">
                       {authError}
                      </div> }
                {!loading && <form onSubmit={handleRegister}> 
                        <input className="m-2 w-50"
                            required
                            type="text"
                            onBlur={handleOnBlur}
                            name="name"
                            placeholder="Your name here" />
                        <br />
                        <input className="my-3 w-50"
                            required
                            type="email"
                             onBlur={handleOnBlur}
                            name="email"
                            placeholder="Your email here" />
                  <br />
                        <input className="mb-3 w-50"
                            required
                            type="password"
                             onBlur={handleOnBlur}
                            name="password"
                            placeholder="Password" />
                        <br />
                        <input className="mb-3 w-50"
                            required
                            type="password"
                             onBlur={handleOnBlur}
                            name="password2"
                            placeholder="Re-type Password" />
                    <br />
                    <input className="bg-primary w-50 mb-2" type="submit" value="Register" />
                    <br />
                        <Link style={{ textDecoration: 'none', color: 'info', fontWeight:'bold' }} to="/login">Already Register? Please Login</Link>
                    
                    </form>}
                    {loading && <div className="py-5 my-5"><Spinner className="p-5" animation="grow" variant="info" /> </div>}
                    
            </div>
        </div>       
    </div>
    );
};

export default Register;