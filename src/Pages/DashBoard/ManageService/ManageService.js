import React, { useState, useEffect } from 'react';
import Loading from '../../Loading/Loading.js';
import './ManageService.css'

const ManageService = () => {
    const [manageOrder, setManageOrder] = useState([])
    const [reload, setReload] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('http://localhost:5000/manage')
            .then(res => res.json())
            .then(data => {
                setManageOrder(data)
                setLoading(false)
            });

    }, [reload])

    //Update Status
    const handleUpdate = id => {
        const url = `http://localhost:5000/status/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ status: 'Shipped' })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Successfully Approved')
                    setReload(true)
                }
            })
    }

    if (loading) {
        return <Loading></Loading>
    }

    //Delete Start 
    const handleManageDelete = id => {
        const process = window.confirm('Are you want to DELETE?')
        if (process) {
            const url = `http://localhost:5000/manage/${id}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount) {
                        alert('Deleted successfully')
                        const remaining = manageOrder.filter(order => order._id !== id);
                        setManageOrder(remaining)
                    }
                })
        }

    }

    if (loading) {
        return <Loading></Loading>
    }
    
    return (
        <div className="container-fluid">
            <h2 className="text-center py-5">Total Order is Running {manageOrder.length}</h2>
            <div className="row row-cols-1 row-cols-md-2 mb-5 g-4">
                {manageOrder.map(order => <div
                    key={order._id}
                    className="col">
                    <div className="card h-100">
                        <img src={order.img} className="card-img-top" alt="..."></img>
                        <div className="card-body text-center">
                            <h3 className="card-title text-start">{order.service}</h3>
                            <h6 className="card-title text-start">Status: {order.status}</h6>
                            <h6 className="card-text text-start">Price: ${order.price}</h6>
                            <p className="card-text text-start">{order.des.slice(0, 150)}</p>
                            <button onClick={() => handleUpdate(order._id)} className="btn btn-primary mx-3">Approve</button>
                            <button onClick={() => handleManageDelete(order._id)} className="btn btn-danger  mx-3">Delete</button>
                        </div>
                    </div>
                </div>)
                }
            </div>

        </div>
    );
};

export default ManageService;