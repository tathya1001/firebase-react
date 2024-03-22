import React, { useState, useEffect } from 'react';
import { useFirebase } from '../context/Firebase';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { getAuth } from 'firebase/auth'; // Import getAuth
import { onAuthStateChanged } from 'firebase/auth'; // Import onAuthStateChanged

function Welcome(props) {
    const firebase = useFirebase();
    const [crediterName, setWelcomeerName] = useState('');
    const [leftAmount, setLeftAmount] = useState('');
    const [completedAmount, setCompletedAmount] = useState('');

    return (
        <div className='flex flex-col gap-0 font-[Rubik] mt-1 mb-2'>
            <span className='text-3xl'>Good Morning,</span>
            <span className='text-5xl font-semibold'>{props.name}</span>
        </div>
    );
}

export default Welcome;
