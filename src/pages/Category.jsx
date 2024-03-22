import React, { useState, useEffect } from 'react';
import { useFirebase } from '../context/Firebase';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { getAuth } from 'firebase/auth'; // Import getAuth
import { onAuthStateChanged } from 'firebase/auth'; // Import onAuthStateChanged

function Category() {
    const firebase = useFirebase();
    const [categoryName, setCategoryName] = useState('');
    const [iconId, setIconId] = useState('');
    const [colorId, setColorId] = useState('');
    // console.log(firebase.user)
    // const [currentUser, setCurrentUser] = useState(null); // State to store the current user

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if currentUser state has been set
        const forCreatingCategory = await firebase.handleNewCategory(categoryName, iconId, colorId, firebase.user.uid);
        console.log("Category added");
    };

    return (
        <div className='container'>
            <h2>Add Category</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="crediterName">
                    <Form.Label>Category Name:</Form.Label>
                    <Form.Control type="text" value={categoryName} onChange={(e) => setCategoryName(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="leftAmount">
                    <Form.Label>Icon:</Form.Label>
                    <Form.Control type="number" value={iconId} onChange={(e) => setIconId(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="completedAmount">
                    <Form.Label>Color:</Form.Label>
                    <Form.Control type="number" value={colorId} onChange={(e) => setColorId(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default Category;
