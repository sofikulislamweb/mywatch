import React, { useState } from 'react';
import Loading from '../../Loading/Loading.js';

const ManageProduct = () => {
    const [Products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)

    useState(() => {
        fetch(`http://localhost:5000/services`)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setLoading(false)
            })
    }, [])

    const hanldeproductDelete = id => {
        const process = window.confirm('Are you want to cancel Your product?')
        if (process) {
            const url = `http://localhost:5000/services/${id}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount) {
                        alert('Your product is cancel successfully')
                        const remaining = Products.filter(product => product._id !== id);
                        setProducts(remaining)
                    }
                })

        }
    }
    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className="container-fluid">
            <h2 className="text-center py-3">All Product</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    Products.map(product => <div
                        key={product._id}
                        className="col col-md-4 my-3 ">
                        <div className="card h-100">
                            <img src={product.img} className="card-img-top" alt="..."></img>
                            <div className="card-body text-center">
                                <h5 className="card-title text-start">{product.name}</h5>
                                <p className="card-text text-start">Price: ${product.price}</p>
                                <p className="card-text text-start">{product.des.slice(0, 150)}</p>
                                <button onClick={() => hanldeproductDelete(product._id)} className="btn btn-danger my-3">Cancel product</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageProduct;