import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {

    const navigate = useNavigate();

    const handleRegister = event =>{
        event.preventDefault();
        // const name = event.target.name.value;
        // const email = event.target.email.value;
        // const password = event.target.password.value;

        console.log(event);
    }

    const navigaretoLogin = () =>{
        navigate('/login')
    }

    return (
        <div className='mb-5 container w-50 mx-auto p-5'>
            <h2 className='text-center text-primary'>Please Register here </h2>

            <Form onSubmit={handleRegister}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
      
      <Form.Label>Your Name</Form.Label>
      <Form.Control type="text" placeholder="Enter Your Name" />
      <Form.Text className="text-muted">
        Please put your Full Name.
      </Form.Text>
    </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
      
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" required/>
    <Form.Text className="text-muted">
      Please put your valid email address.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" required />
  </Form.Group>

  <p>Already Have an Account? <Link to="/login" className='text-danger text-decoration-none' onClick={navigaretoLogin}>Please Login</Link> </p>
  
  <Button variant="primary" type="submit">
    Register
  </Button>
</Form>
        </div>
    );
};

export default Register;