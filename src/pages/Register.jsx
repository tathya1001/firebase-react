import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";



import { CFormInput } from '@coreui/react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from 'react-bootstrap/FloatingLabel';


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

                <FloatingLabel
                    controlId="forName"
                    label="Name"
                    className="mb-3"
                >
                    <Form.Control
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        placeholder="Enter Name"
                    />
                </FloatingLabel>

                {/* 
                <FloatingLabel
                    controlId="forEmail"
                    label="Email"
                    className="mb-3"
                >
                    <Form.Control type="email" onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        placeholder="Enter Email" />
                </FloatingLabel> */}


                <FloatingLabel
                    controlId="forPassword"
                    label="Password"
                    className="mb-3"
                >
                    <Form.Control type="password" onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        placeholder="Enter Password" />
                </FloatingLabel>

                {/* <CFormInput type="email" id="floatingInput" floatingClassName="mb-3" floatingLabel="Email address" placeholder="name@example.com" />
                <CFormInput type="password" id="floatingPassword" floatingLabel="Password" placeholder="Password" /> */}


                <input type="text"  placeholder="Type here" className="input input-bordered w-full max-w-xs text-white" />


                <div className="relative">
                    <input onChange={(e) => setEmail(e.target.value)} type="text" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-black bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                    <label for="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Floating outlined</label>
                </div>



                <Button variant="primary" type="submit">
                    Create Account
                </Button>
            </Form>
        </div>
    );
};

export default Register;