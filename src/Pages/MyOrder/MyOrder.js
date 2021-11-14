import React, { useState } from 'react';
import useAuth from '../hooks/useAuth.js';
import Loading from '../Loading/Loading.js';

const MyOrder = () => {
    const { user } = useAuth()
    const [myOder, setMyOrder] = useState([]);
    const [loading, setLoading] = useState(true)

    useState(() => {
        fetch(`http://localhost:5000/myOrder/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyOrder(data)
                setLoading(false)
            })
    }, [])

    const hanldeOrderDelete = id => {
        const process = window.confirm('Are you want to cancel Your Order?')
        if (process) {
            const url = `http://localhost:5000/myOrder/${id}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount) {
                        alert('Your Order is cancel successfully')
                        const remaining = myOder.filter(order => order._id !== id);
                        setMyOrder(remaining)
                    }
                })

        }
    }
    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className="container-fluid">
            <h2 className="text-center py-3"> My Order Bag  </h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    myOder.map(order => <div
                        key={order._id}
                        className="col col-md-6 my-3 ">
                        <div className="card h-100">
                            <img src={order.img} className="card-img-top" alt="..."></img>
                            <div className="card-body text-center">
                                <h3 className="card-title text-start">{order.service}</h3>
                                <h6 className="card-title text-start">Status: {order.status}</h6>
                                <p className="card-text text-start">Price: ${order.price}</p>
                                <p className="card-text text-start">{order.des.slice(0, 150)}</p>
                                <button onClick={() => hanldeOrderDelete(order._id)} className="btn btn-danger my-3">Cancel Order</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyOrder;