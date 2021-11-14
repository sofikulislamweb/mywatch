import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <Row>
                <Col>
                    <h5 className='text-warning'>Help</h5>
                    <p>Search</p>
                    <p>help</p>
                    <p>Information</p>

                </Col>
                <Col>
                    <h5 className='text-warning'>Support</h5>
                    <p>Conatct Us</p>
                    <p>About Us</p>
                    <p>Carrer</p>

                </Col>
                <Col>
                    <h5 className='text-warning'>Information</h5>
                    <p>Store location</p>
                    <p>Orders & Faq</p>
                    <p>Search Terms</p>

                </Col>
                <Col>
                    <h5 className='text-warning'>Contact us</h5>
                    <p> No: 58 A, East Madison Street, Baltimore, MD, USA 4508</p>
                    <p>support@somemail.com</p>


                </Col>



            </Row>
            <p className='text-warning'>@All rights reserved timely</p>

        </div>
    );
};

export default Footer;