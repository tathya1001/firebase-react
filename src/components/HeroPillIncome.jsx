import React, { useEffect, useState } from "react";
import { useFirebase } from "../context/Firebase.jsx";

import CustomIcon from "./CustomIcon.jsx"

const HeroPillIncome = (props) => {
    const firebase = useFirebase();

    const [books, setBooks] = useState([]);

    return (



        props.categoryid == 1 &&
        <div className="min-h-48 min-w-48 flex flex-col justify-between px-3 py-3 rounded-[1rem] gap-2 font-[Rubik] box-border" style={{ backgroundColor: "#382F70" }}>

            {/* <div className="w-12">

                <CustomIcon icon={props.iconid}></CustomIcon>
            </div> */}


            <div className="bottom-side flex flex-col justify-between text-white">

                <span className="font-medium text-xl">{props.transaction}</span>
                {/* <span className="font-medium text-xl">{props.categoryid}</span>
                <span className="font-medium text-xl">{props.date}/{props.month}/{props.year}</span> */}
                {/* <span className="font-semibold text-4xl">${props.categoryid}</span> */}
            </div>




        </div >
    );
};

export default HeroPillIncome;