import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddService.css'

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('http://localhost:5000/services', data)
            .then(res => {
                console.log(res)
                if (res.data.insertedId) {
                    alert('Your Service Add Successfully')
                    reset()
                }
            })
    };
    return (
        <div className="addService">
            <h1 className="p-5 text-center">Add Your Product</h1>
            <form className="pb-5" onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} placeholder="Type Your Product tittle" />
                <textarea rows="5" {...register("des")} placeholder="Write Product Description" />
                <input type="number" {...register("price")} placeholder="Product Price" />
                <input {...register("img")} placeholder="Product Image url" />
                <input  className="bg-primary" type="submit" />
            </form>

        </div>
    );
};

export default AddService; 