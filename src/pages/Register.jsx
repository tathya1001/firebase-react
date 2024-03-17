import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useFirebase } from "../context/Firebase.jsx";

function Register() {
    const [count, setCount] = useState(0)

    const firebase = useFirebase();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (firebase.isLoggedIn) {
            // navigate to home
            navigate("/");
        }
    }, [firebase, navigate]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Sigining Up...");
        firebase.signupUserWithEmailAndPassword(email, password);
        console.log("Success");
    }

    return (
        <>
            <div className="container">
                <h1>Register</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={e => setEmail(e.target.value)}
                            value={email}
                            type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={e => setPassword(e.target.value)}
                            value={password}
                            type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Create Account
                    </Button>
                </Form>



            </div>
        </>
    )
}

export default Register;
