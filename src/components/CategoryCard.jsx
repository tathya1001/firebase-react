import React, { useEffect, useState } from "react";
import { useFirebase } from "../context/Firebase";

import CustomIcon from "./CustomIcon.jsx"

const CategoryCard = (props) => {
    const firebase = useFirebase();

    const [books, setBooks] = useState([]);


    let colorCode;
    let option = props.colorid;

    switch (option) {

        case 1:
            colorCode = "#FF0000";
            break;
        case 2:
            colorCode = "#00FF00";
            break;
        default:
            colorCode = "#0F00F0";
            break;

    }



    return (
        <div className="min-h-48 min-w-48 bg-[#{colorCode}] flex flex-col justify-between px-3 py-3 rounded-[1rem] gap-2 font-[Rubik] box-border" style={{ backgroundColor: colorCode }}>

            <div className="w-12">

                <CustomIcon icon={props.iconid}></CustomIcon>
            </div>


            <div className="bottom-side flex flex-col justify-between text-white">

                <span className="font-regular text-2xl">{props.name}</span>
                <span className="font-semibold text-4xl">${props.colorid}</span>
            </div>




        </div >
    );
};

export default CategoryCard;