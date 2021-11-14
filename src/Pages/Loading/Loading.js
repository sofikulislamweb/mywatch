import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
           <div className="py-5 my-5"><Spinner className="p-5" animation="grow" variant="primary" /> </div>
       
    );
};

export default Loading;