import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success,setSuccess] = useState(false)
    
    const handdleOnBlur = e => {
        setEmail(e.target.value)
    }
    
    const handleMakeAdmin = e => {
        const user = {email}
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true)
                    console.log(data);
                    e.target.reset()

                   
           };
        })

        e.preventDefault()
    }
    
    return (
        <div className="py-5">
            <h1 className="p-3">Make an Admin</h1>
            {success && <div className="alert alert-success mb-3 m-auto mt-3 w-50" role="alert">
                    Make Admin Success
                   </div> }
            <form onSubmit={handleMakeAdmin}>
                <input className="w-50"
                    type="email"
                    name="email"
                    onBlur={handdleOnBlur}
                    required
                    placeholder="Specific Email for make an Admin" />
                <br />
                <input className="w-50 mt-3 text-white login" type="submit" value="Make an Admin" />
            </form>
        </div>
    );
};

export default MakeAdmin;