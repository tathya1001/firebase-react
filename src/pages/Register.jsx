import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { useFirebase } from "../context/Firebase";

const Register = () => {
    const firebase = useFirebase();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        if (firebase.isLoggedIn) {
            // navigate to home
            navigate("/");
        }
    }, [firebase, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Signin up a user...");
        const result = await firebase.signupUserWithEmailAndPassword(
            email,
            password
        );

        console.log("Successfull", result);
        console.log("User Id", result.user.uid);

        const forCreatingNewUser = await firebase.handleNewUser(name, result.user.uid);


        // const forCreatingCredit = await firebase.handleNewCredit(name, result.user.uid);

    };

    return (
        <div className="container mt-5">
            <Form onSubmit={handleSubmit}>

                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        type="text"
                        placeholder="Enter Name"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        type="email"
                        placeholder="Enter email"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Create Account
                </Button>
            </Form>
        </div>
    );
};

export default Register;