import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useFirebase } from "../context/Firebase";

import { useNavigate } from "react-router-dom";

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



    return (
        <div className='bg-slate-900'>

            <div className='container flex flex-col justify-center items-center h-screen font-[Rubik]' onSubmit={handleSubmit}>
                <h2 className='text-white mb-4'>Login</h2>
                <Form className='columns-md flex-col space-y-3 '>



                    <div className="relative">
                        <input type="email" id="floating_outlined2" className="block px-2.5 pb-2.5 pt-2.5 w-full text-md text-white bg-transparent rounded-lg border-2 border-slate-400 appearance-none focus:outline-none focus:ring-0 focus:border-blue-400 peer" placeholder=" " onChange={(e) => setEmail(e.target.value)} />

                        <label htmlFor="floating_outlined" className="absolute text-slate-300 bg-slate-900 text-md duration-300 transhtmlForm -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-2 peer-focus:px-2 peer-focus:text-blue-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Email</label>
                    </div>


                    <div className="relative">
                        <input type="password" id="floating_outlined3" className="block px-2.5 pb-2.5 pt-2.5 w-full text-md text-white bg-transparent rounded-lg border-2 border-slate-400 appearance-none focus:outline-none focus:ring-0 focus:border-blue-400 peer" placeholder=" " onChange={(e) => setPassword(e.target.value)} />

                        <label htmlFor="floating_outlined" className="absolute text-slate-300 bg-slate-900 text-md duration-300 transhtmlForm -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-2 peer-focus:px-2 peer-focus:text-blue-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Password</label>
                    </div>








                    <button
                        type="submit"
                        className="text-white w-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:from-blue-800 hover:via-blue-700 hover:to-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-md px-5 py-2.5 text-center me-2 mb-2 transition-all duration-300 ease-in-out">
                        Submit
                    </button>


                </Form>
            </div>
        </div >
    )

};

export default Login;
