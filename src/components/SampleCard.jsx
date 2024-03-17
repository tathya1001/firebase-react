import React, { useEffect, useState } from "react";
import { useFirebase } from "../context/Firebase";


import ProgressBar from "./ProgressBar";

const SampleCard = () => {
    const firebase = useFirebase();

    const [books, setBooks] = useState([]);



    return (
        <div className="h-24 bg-[#4F060E] flex px-3 py-2 rounded-[1rem] gap-2 font-[Rubik] box-border">

            <div className="right-side w-32 text-white text-[1.35rem] flex flex-col justify-between">
                <span className="truncate">Salman Khan</span>
                <ProgressBar maxValue={100} completedValue={45}></ProgressBar>
                <span className="font-medium">$35</span>
            </div>



            <div className="left-side flex flex-col justify-around">
                <button className="w-20 h-8 bg-white rounded-md text-[1.15rem]">Add</button>
                <button className="w-20 h-8 bg-white rounded-md text-[1.15rem]">Pay</button>
            </div>

        </div>
    );
};

export default SampleCard;