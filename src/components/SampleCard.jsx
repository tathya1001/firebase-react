import React, { useEffect, useState } from "react";
import { useFirebase } from "../context/Firebase";


import ProgressBar from "./ProgressBar";

const SampleCard = (props) => {
    const firebase = useFirebase();

    const [books, setBooks] = useState([]);

    const handleAddClick = () => {
        console.log(firebase.user.uid);
        const creditAdded = prompt("Enter addition")
        // Call the handleCreditResponse Firebase function here
        firebase.handleCreditAdd(props.id, props.left, parseInt(creditAdded), firebase.user.uid);
    };

    const handlePayClick = () => {
        console.log(firebase.user.uid);
        const completedAdded = prompt("Enter payment")
        // Call the handleCreditResponse Firebase function here
        firebase.handleCreditPay(props.id, props.completed, parseInt(completedAdded), firebase.user.uid);
    };


    return (
        <div className="h-24 bg-[#4F060E] flex px-3 py-2 rounded-[1rem] gap-2 font-[Rubik] box-border">

            <div className="right-side w-32 text-white text-[1.35rem] flex flex-col justify-between">
                <span className="truncate">{props.name}</span>
                <ProgressBar maxValue={props.left} completedValue={props.completed}></ProgressBar>
                <span className="font-medium">${props.left - props.completed}</span>
            </div>



            <div className="left-side flex flex-col justify-around">
                <button className="w-20 h-8 bg-white rounded-md text-[1.15rem]" onClick={handleAddClick}>Add</button>
                <button className="w-20 h-8 bg-white rounded-md text-[1.15rem]" onClick={handlePayClick}>Pay</button>
            </div>

        </div>
    );
};

export default SampleCard;