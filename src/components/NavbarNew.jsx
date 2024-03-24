import React, { useState, useEffect } from 'react';
import { useFirebase } from '../context/Firebase';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { getAuth } from 'firebase/auth'; // Import getAuth
import { onAuthStateChanged } from 'firebase/auth'; // Import onAuthStateChanged

import { Radio } from "@material-tailwind/react";


import CustomIcon from '../components/CustomIcon';


function NavbarNew() {
    const firebase = useFirebase();
    const [categoryName, setCategoryName] = useState('');
    const [iconId, setIconId] = useState('');
    const [colorId, setColorId] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const forCreatingCategory = await firebase.handleNewCategory(categoryName, iconId, colorId, firebase.user.uid);
            alert("Category added");
        } catch (error) {
            console.error("Error adding category:", error.message);
            alert("Failed to add category. Please try again.");
        }
    };




    const handleRadioChange = (e) => {
        console.log("Selected Radio Value:", iconId);
    };


    return (
        <div className='bg-slate-900 container text-white font-[Rubik] flex flex-row justify-center items-center gap-8 md:gap-8 p-3 flex-wrap'>

            <a href='/create/log' className='text-white text-md box-border bg-slate-700 flex rounded-full py-2 px-4 decoration-transparent '>Expense</a>
            <a href='/create/income' className='text-white text-md box-border bg-slate-700 flex rounded-full py-2 px-4 decoration-transparent '>Income</a>

            <a href='/create/category' className='text-white text-md box-border bg-slate-700 flex rounded-full py-2 px-4 decoration-transparent '>Category</a>
            <a href='/create/credit' className='text-white text-md box-border bg-slate-700 flex rounded-full py-2 px-4 decoration-transparent '>Credit</a>
            <a href='/create/debit' className='text-white text-md box-border bg-slate-700 flex rounded-full py-2 px-4 decoration-transparent '>Debit</a>


        </div>
    );
}

export default NavbarNew;
