import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth.js';
import './Header.css'


const Header = () => {
    const { user,logOut } = useAuth();
    return (
        <div>
             <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="header">
                <Container>
                    <Navbar.Brand to="/home"><h1 className='text-warning'>Timely</h1></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <nav className="ms-auto">
                            <NavLink className="link-style" to="/home"> Home </NavLink>
                            
                           {user?.email ? <NavLink className="link-style live" to="/dashboard">DashBoard</NavLink> : <> </>}
                        
                            {user?.email ? <NavLink
                                onClick={logOut} className="link-style login-2" to="/login">Log out</NavLink> :
                                <NavLink className="link-style login-2" to="/login">Login</NavLink>
                            } 
                        </nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;