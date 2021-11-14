import React, { useEffect, useState } from 'react';
import Loading from '../../../Loading/Loading.js';
import Service from '../../Service/Service.js';

const Explore = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className="p-5 text-center">Choise Your Bag from Here</h2>
            <div className="row container-fluid m-auto mb-5">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Explore;