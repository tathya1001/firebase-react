import React, { useEffect, useState } from "react";
import { useFirebase } from "../context/Firebase";

import CustomIcon from "./CustomIcon.jsx"

const LogCard = (props) => {
    const firebase = useFirebase();

    const [books, setBooks] = useState([]);
    const [categoryDetails, setCategoryDetails] = useState([]);


    let colorCode;
    let option = categoryDetails.colorid;

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



    useEffect(() => {
        if (firebase.user) {
            const fetchCategoryData = async () => {

                const userData = await firebase.getCategoryData(firebase.user.uid, props.categoryid);
                if (userData) {
                    setCategoryDetails(userData);
                }

            };

            fetchCategoryData();
        }
    }, [firebase.user]);




    return (



        ((props.categoryid == 1) &&

            <div className="min-h-16 max-h-16 max-w-80 flex flex-row justify-between items-center px-2 py-1 rounded-[0.75rem] font-[Rubik] box-border" style={{ backgroundColor: "grey" }}>
                <div className="w-72 flex flex-row items-center gap-3">
                    <div className="w-8">
                        <CustomIcon icon={categoryDetails.iconid}></CustomIcon>
                    </div>
                    <div className="flex flex-col items-start justify-center">
                        <div className="font-regular text-lg">{props.name}</div>
                        <div className="font-regular text-sm">{props.day} / {props.month} / {props.year}</div>
                    </div>
                </div>
                <div className="font-regular text-xl justify-self-end">${props.transaction}</div>
            </div>) ||

        ((props.categoryid != 1) &&

            <div className="min-h-16 max-h-16 max-w-80 flex flex-row justify-between items-center px-2 py-1 rounded-[0.75rem] font-[Rubik] box-border" style={{ backgroundColor: colorCode }}>
                <div className="w-72 flex flex-row items-center gap-3">
                    <div className="w-8">
                        <CustomIcon icon={categoryDetails.iconid}></CustomIcon>
                    </div>
                    <div className="flex flex-col items-start justify-center">
                        <div className="font-regular text-lg">{props.name}</div>
                        <div className="font-regular text-sm">{props.day} / {props.month} / {props.year}</div>
                    </div>
                </div>
                <div className="font-regular text-xl justify-self-end">${props.transaction}</div>
            </div>)
    );
};

export default LogCard;