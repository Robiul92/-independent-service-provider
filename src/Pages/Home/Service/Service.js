import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const Service = ({service}) => {
    const {id, name, img, description, price} = service;
    const navigate = useNavigate();
    const navegateToDetails = id =>{
        navigate(`/service/${id}`);

    }
    return (
        <div>
            {/* <img src={img} alt="" />
            <h2>{name} </h2>
            <p>Price{price}</p>
            <p><small>{description}</small> </p>
            <button onClick={() => navegateToDetails(id)} className='btn btn-primary'>Order Now:{name} </button> */}

            <Card style={{ width: '20rem'}} >
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <p>Price: {price}</p>
    <Card.Text>
    {description}
    </Card.Text>
    <Button onClick={() => navegateToDetails(id)} variant="primary">Order Now: {name}</Button>
  </Card.Body>
</Card>
        </div>
    );
};

export default Service;