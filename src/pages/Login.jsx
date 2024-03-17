import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useFirebase } from "../context/Firebase.jsx";

function Login() {

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
        console.log("Loging in");
        const result = await firebase.signinUserWithEmailAndPassword(email, password);
        console.log("Successfull", result);
    }

    // console.log(firebase);

    return (
        <>

            <div className="container">
                <h1>Login</h1>
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

                <h5 className="my-3">or</h5>
                <Button variant="primary" onClick={firebase.signinWithGoogle}>Sign In with Google</Button>

            </div>
        </>
    )
}

export default Login;
