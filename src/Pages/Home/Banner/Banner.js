import React from 'react';
import { NavLink } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
         <div className="bannar p-5">
            <div className="row ">
                <div className="headding">
                    <h1 className="headding  m-5 text-warning" >
                       Time and Tide wait for None
                    </h1>
                    <p className="bannarText m-5">
                        Our mission is deliver high quality products,<br />
                        at a lowest price
                       
                    </p>
                    <div>
                        <NavLink to="/explore">
                            <button className="bannarBtn m-5 p-2 px-4">Explore More </button>
                        </NavLink>
                     </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;