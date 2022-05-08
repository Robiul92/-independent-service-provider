import React from 'react';
import { useNavigate } from "react-router-dom";

const Service = ({service}) => {
    const {id, name, img, description, price} = service;
    const navigate = useNavigate();
    const navegateToDetails = id =>{
        navigate(`/service/${id}`);

    }
    return (
        <div>
            <img src={img} alt="" />
            <h2>{name} </h2>
            <p>Price{price}</p>
            <p><small>{description}</small> </p>
            <button onClick={() => navegateToDetails(id)} className='btn btn-primary'>Order Now:{name} </button>
        </div>
    );
};

export default Service;