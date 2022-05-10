import React from 'react';
import riders from '../../../Images/riders-png 1.png'
import chef from '../../../Images/Chef-Cartoon.png'
import './Safety.css'

const Safety = () => {
    return (
        <div id="safety">
            <h1 className='sefty-title'>
                100% Safety Standards</h1>
            <div className="guidelines">
            <div className="riders-guideline">
                <img src={riders} alt="" />
                <h2 className='text-primary text-center m-4'>RIDERS DELIVERY GUIDELINES.</h2>
                <div>
                    <h4 className='text-success text-center'>SANITIZATION STANDARDS</h4>
                    <p>All Delivery Riders have been trained to maintained high cleanliness standards and they carry a Kit of Mask, Hand Sanitizer, Gloves and Thermometer.</p>
                </div>
                <div>
                    <h4 className='text-success text-center'>CONTACTLESS DELIVERY</h4>
                    <p>Every Food Package is picked up and delivered without any contact with the Home Chef and Customer. We follow a Contactless delivery policy.</p>
                </div>
                <div>
                    <h4 className='text-success text-center'>RIDER SUPERVISION</h4>
                    <p>All the Delivery Riders are supervised daily for their temperature readings and conformity to Wearing a Mask, Hygiene and social distancing norms.</p>
                </div>
            </div>

            <div className="bg-light rounded">
            <img  style={{height:'350px'}} className={'w-100'} src={chef} alt="" />
                <h2 className='text-primary text-center m-4'>HOME CHEFS COOKING GUIDELINES.</h2>
                <div>
                    <h4 className='text-secondary text-center'>CLEANING & SANITIZATION</h4>
                    <p>Every Home chef ensures that hands are washed regularly every 15 minutes and their Home Kitchen is cleaned and sanitized 2 times daily.</p>
                </div>
                <div>
                    <h4 className='text-secondary text-center'>MASK & SOCIAL DISTANCING</h4>
                    <p>All the Home Chefs usually don’t move of their homes. They wear a Mask and maintain social distancing of 6 Feet if they meet anyone.</p>
                </div>
                <div>
                    <h4 className='text-secondary text-center'>HEATHY & FRESHLY PREPARED</h4>
                    <p>Food is freshly prepared by home chefs when they get an order. All the ingredients used are Fresh and Top quality to ensure food served is Healthy.</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Safety;