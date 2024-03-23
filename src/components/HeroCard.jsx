import React, { useEffect, useState } from "react";
import { useFirebase } from "../context/Firebase.jsx";

import CustomIcon from "./CustomIcon.jsx"

import CurrencyComponent from "./CurrencyComponent.jsx";

const HeroCard = (props) => {
    const firebase = useFirebase();

    const [books, setBooks] = useState([]);



    const [currency, setCurrency] = useState('');

    useEffect(() => {
        if (firebase.user) {
            const fetchUserData = async () => {

                const userData = await firebase.getUserData(firebase.user.uid);
                if (userData) {
                    setCurrency(userData.currencyID);
                }

            };

            fetchUserData();
        }
    }, [firebase.user]);

    return (



        <div className="min-h-16 text-white min-w-36 max-w-36 flex flex-col justify-between px-3 py-3 rounded-[1rem] gap-2 font-[Rubik] box-border" style={{ backgroundColor: "#382F70" }}>

            <div className="w-12 flex flex-col">
                <span>Expense</span>
                <span className="font-medium text-xl"><CurrencyComponent />{props.trans}</span>

            </div>

        </div >
    );
};

export default HeroCard;