import React from 'react';
import product from '../../../images/products.jpg'

const FeturedProduct = () => {
    return (
      <div className="p-5 bg-dark ">
        <h1 className="mb-5 text-white">Fetured Product </h1>
        <div className="card mb-3">
          
          <div className="row g-0 d-flex align-items-center">
            
          <div className="col-md-6">
            <img style={{width:'400px',height:'400px'}} src={product} className="img-fluid rounded-start" alt="..."/>
          </div>
          <div className="col-md-6 p-3 ">
            <div className="card-body">
                <h5 className="card-title text-start">
                      </h5>
                <h6 className="card-title text-start">Price : $125.00</h6>
                <p className="card-text text-start">Smart watch heart rate and sleep monitoring, it will measure your heart rate on every 1 or 2 or 6 or 12 hour automatically, clearly acknowledge your physical fitness status at whole day or week or month</p>
            </div>
          </div>
        </div>
      </div>
  </div>
    );
};

export default FeturedProduct;