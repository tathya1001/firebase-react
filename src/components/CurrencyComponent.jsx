import React, { useEffect, useState } from "react";

import { useFirebase } from "../context/Firebase";

const CurrencyComponent = () => {
    const firebase = useFirebase();
    let symbolPath;

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


    switch (currency) {
        case 1:
            symbolPath = "₹"; // Indian Rupee
            break;
        case 2:
            symbolPath = "€"; // Euro
            break;
        case 3:
            symbolPath = "£"; // Pound Sterling
            break;
        case 4:
            symbolPath = "¥"; // Japanese Yen
            break;
        case 5:
            symbolPath = "$"; // Dollar
            break;
        case 6:
            symbolPath = "₽"; // Russian Ruble
            break;
        case 7:
            symbolPath = "₺"; // Turkish Lira
            break;
        case 8:
            symbolPath = "₩"; // South Korean Won
            break;
        case 9:
            symbolPath = "฿"; // Thai Baht
            break;
        case 10:
            symbolPath = "₿"; // Bitcoin
            break;
        // Add more cases for other currencies as needed
        default:
            symbolPath = "$"; // Default to Dollar
            break;
    }

    return <span>{symbolPath}</span>;
};

export default CurrencyComponent;
