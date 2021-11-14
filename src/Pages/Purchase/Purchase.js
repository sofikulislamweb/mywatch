import React, { useEffect, useRef, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth.js';
import Loading from '../Loading/Loading.js';

const Purchase = () => {
    const { user } = useAuth();

    const history = useHistory();
    const location = useLocation();
    const redirect_Uri = location.state?.from || '/home';

    const serviceRef = useRef();
    const desRef = useRef();
    const priceRef = useRef();
    const imgRef = useRef();
    const nameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const addressRef = useRef();

    const handleOrder = e => {
        const service = serviceRef.current.value;
        const des = desRef.current.value;
        const price = priceRef.current.value;
        const img = imgRef.current.value;
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const phone = phoneRef.current.value;
        const address = addressRef.current.value;

        const newOder = { service, des, price, img, name, email, phone, address }
        console.log(newOder)
        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ ...newOder, status: 'Pending' })

        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Thank for Purchases')
                    e.target.reset();
                    history.push(redirect_Uri)
                    //window.history.go('-2')
                }
            })

        e.preventDefault();
    }

    const { Id } = useParams()
    const [service, setService] = useState({});
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        fetch(`http://localhost:5000/services/${Id}`)
            .then(res => res.json())
            .then(data => {
                setService(data)
                setLoading(false)
            })

    }, [Id]);

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div >
            <h1 className="pt-5 text-center"> Review Your Service Details</h1>
            <div className="d-md-flex container">
                <div className="card col-md-6 col-12 col-sm-12 py-2 text-center m-auto my-5" >
                    <img className="img-fluid " src={service?.img} className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h4 className="card-title">{service?.name}</h4>
                        <h6>Price: $ {service?.price}</h6>
                        <p className="card-text mx-3">{service?.des}</p>
                        <Link to="/home" ><button className="btn btn-primary "> Back to Punches </button></Link>
                    </div>
                </div>
                <div className="col-md-6 col-12 col-sm-12 py-2  m-auto my-5 addService">
                    <form onSubmit={handleOrder}>
                        <input type="text" defaultValue={service?.name} ref={serviceRef} />
                        <textarea rows="3" defaultValue={service?.des} type="email" ref={desRef} />
                        <input type="number" defaultValue={service?.price} ref={priceRef} />
                        <input type="text" defaultValue={service?.img} ref={imgRef} />
                        <input type="text" defaultValue={user?.displayName} ref={nameRef} />
                        <input type="text" defaultValue={user?.email} ref={emailRef} />
                        <input type="number" ref={phoneRef} placeholder="phone Number" required />
                        <textarea type="text" required ref={addressRef} placeholder="Type your valid address" />
                        <input type="submit" className="bg-primary text-white" value="Purchases Confirem" />
                    </form>

                </div>
            </div>
        </div>
    );
};


export default Purchase;