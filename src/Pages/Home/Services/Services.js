import React, { useEffect, useState } from 'react';
import './Services.css'

import service1 from '../../../Images/services-1.jpg'
import service2 from '../../../Images/services-2.jpg'
import service3 from '../../../Images/services-3.jpg'
import Service from '../Service/Service';

// const services = [
//     {id: 1, name:'Chinese flavor cuisine', price:400, description: 'Too busy to go out? We’ll deliver delicious home-cooked meals straight to your office or home!' img: service1},

//     {id: 1, name:'Fresh & Healthy Seafood ', price:600, description: 'Freshly cooked meals made from scratch daily using only the best & fresh ingredients' img: service2},

//     {id: 1, name:'Variety Of Meal', price:400, description: 'Rich variety of delicious meal that is different every day & generous portions with every dish makes it great for sharing with family, friends and colleagues' img: service3}
// ]

const Services = () => {
    const [services, setServices] = useState([]);
useEffect(()=>{
    fetch('services.json')
    .then(res=>res.json())
    .then(data=> setServices(data));
}, [])

    return (
        <div id="services">
            <h1 className='services-titel'>Our Services </h1>
            <div className="services-container">
            {
                services.map(service=><Service
                key={service.id}
                service={service}


                ></Service>)
            }
            </div>
        </div>
    );
};

export default Services;