import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
    const handleSubmit = event =>{
        event.preventDefault();
    }

    const notify = () => toast("Your Order Has Been Confrimed");
    return (
        <div>
            
            <h1 className='text-center text-primary' >Booking Information</h1>

            <div className='mb-5 container w-50 mx-auto p-5'>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" />
                        <Form.Text className="text-muted">
                            Prease put your full name.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="Address" />
                    </Form.Group>

                    <Button onClick={notify} variant="primary" type="submit">
                    Confirm Order
                    </Button>
                    
                </Form>
                <div className='text-center'>
            <ToastContainer></ToastContainer>
            </div>
            </div>
        </div>
    );
};

export default Checkout;