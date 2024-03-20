import React, { useState, useEffect } from 'react';
import { useFirebase } from '../context/Firebase';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { getAuth } from 'firebase/auth'; // Import getAuth
import { onAuthStateChanged } from 'firebase/auth'; // Import onAuthStateChanged

function Credit() {
    const firebase = useFirebase();
    const [crediterName, setCrediterName] = useState('');
    const [leftAmount, setLeftAmount] = useState('');
    const [completedAmount, setCompletedAmount] = useState('');
    // console.log(firebase.user)
    // const [currentUser, setCurrentUser] = useState(null); // State to store the current user

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if currentUser state has been set
        const forCreatingCredit = await firebase.handleNewCredit(crediterName, leftAmount, completedAmount, firebase.user.uid);
        console.log("Credit added");
    };

    return (
        <div className='container'>
            <h2>Add Credit</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="crediterName">
                    <Form.Label>Crediter Name:</Form.Label>
                    <Form.Control type="text" value={crediterName} onChange={(e) => setCrediterName(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="leftAmount">
                    <Form.Label>Left Amount:</Form.Label>
                    <Form.Control type="number" value={leftAmount} onChange={(e) => setLeftAmount(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="completedAmount">
                    <Form.Label>Completed Amount:</Form.Label>
                    <Form.Control type="number" value={completedAmount} onChange={(e) => setCompletedAmount(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default Credit;
