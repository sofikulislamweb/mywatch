import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { _id, name, img, des, price } = props.service;
    return (
        <div className="col-md-4 col-12 col-sm-12 py-2 text-center">
            <div className="card">
                <img className="img-fluid" src={img} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <h6>Price: ${price}</h6>
                    <p className="card-text">{des.slice(0, 60)}</p>

                    {/* =========Dinamic Route setup=========== */}

                    <Link to={`/purchase/${_id}`} ><button className="btn-sm live login"><i className="fas fa-cart-plus"></i> Buy Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Service;