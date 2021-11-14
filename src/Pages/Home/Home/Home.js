import React from 'react';
import Banner from '../Banner/Banner.js';
import FeturedProduct from '../FeturedProduct/FeturedProduct.js';
import Reviews from '../Reviews/Reviews.js';
import Services from '../Services/Services.js';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <FeturedProduct></FeturedProduct>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;