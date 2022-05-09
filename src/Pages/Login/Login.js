import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef= useRef('');
    const navigate = useNavigate();

    const handleSubmit = event =>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        console.log(email, password);
    }

    const navigaretoRegister =event =>{
        navigate('/register');
    }

    return (
        <div className='mb-5 container w-50 mx-auto p-5'>
            <h1 className='text-center text-primary'>Please login</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
                </Form.Group>
                <p>New to homefoodi? <Link to="/register" className='text-danger text-decoration-none' onClick={navigaretoRegister}>Please Register</Link> </p>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            
        </div>
    );
};

export default Login;