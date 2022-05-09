import React from 'react';
import {Link, useParams} from 'react-router-dom';

const ServiceDetails = () => {
    const {serviceId} = useParams();
    return (
        <div>
            <h1>Welcome to the details: {serviceId}</h1>
            <div className='text-center mb-5 pb-5'>
            <Link to="/checkout">
                <button className='btn btn-primary'>Proces to CheckOut</button></Link>
            </div>
        </div>
    );
};

export default ServiceDetails;