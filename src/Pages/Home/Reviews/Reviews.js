import React, { useEffect, useState } from 'react';
import Loading from '../../Loading/Loading.js';
import Review from '../Review/Review.js';

const Reviews = () => {
    const [reviews, setreviews] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => {
                setreviews(data.slice(0,6))
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className="p-5 text-center">Customer Reviews</h2>
            <div className="row container-fluid m-auto mb-2">
                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;