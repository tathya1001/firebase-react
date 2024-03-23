import React, { useEffect, useState } from "react";
import CardGroup from "react-bootstrap/CardGroup";


import "./HomePage.css";

import Welcome from "../components/Welcome";
import BookCard from "../components/Card";
import SampleCard from "../components/SampleCard";
import CategoryCard from "../components/CategoryCard";
import LogCard from "../components/LogCard";
import AddButton from "../components/AddButton";
import TotalExpense from "../components/HeroCard";
import TotalIncome from "../components/TotalIncome";

import { useFirebase } from "../context/Firebase";
import HeroPills from "../components/HeroPillExpense";

const HomePage = () => {
    const firebase = useFirebase();

    const [books, setBooks] = useState([]);
    const [credits, setCredits] = useState([]);
    const [categories, setCategories] = useState([]);
    const [logs, setLogs] = useState([]);
    const [totalTransactions, setTotalTransactions] = useState(0);
    const [totalExpense, setTotalExpense] = useState(0);
    const [totalIncome, setTotalIncome] = useState(0);
    // const [totalTransactions, setTotalTransactions] = useState(0);

    useEffect(() => {
        firebase.listAllBooks().then((books) => setBooks(books.docs));
    }, []);


    //listing

    useEffect(() => {
        if (firebase.user) {
            firebase.listAllCredits(firebase.user.uid).then((credit) => setCredits(credit.docs));
        }
    }, [firebase.user]);

    useEffect(() => {
        if (firebase.user) {
            firebase.listAllCategory(firebase.user.uid).then((category) => setCategories(category.docs));
        }
    }, [firebase.user]);

    useEffect(() => {
        if (firebase.user) {
            const fetchLogs = async () => {
                const logsData = await firebase.listAllLogs(firebase.user.uid);
                setLogs(logsData.docs);

                // Calculate total transaction value
                let total = 0;
                logsData.docs.forEach((log) => {
                    if (log.data().categoryid == 1) {
                        total += parseInt(log.data().transaction);
                    }
                });
                setTotalIncome(total);

                total = 0;
                logsData.docs.forEach((log) => {
                    if (log.data().categoryid != 1) {
                        total += parseInt(log.data().transaction);
                    }
                });
                setTotalExpense(total);
            };

            fetchLogs();
        }
    }, [firebase.user]);

    //for horizontal scrolling
    useEffect(() => {
        const container = document.querySelector(".credit-section");

        const handleScroll = (event) => {
            container.scrollLeft += event.deltaY * 0.5; // Adjust the scrolling speed
            event.preventDefault();
        };

        container.addEventListener("wheel", handleScroll);

        return () => {
            container.removeEventListener("wheel", handleScroll);
        };
    }, []);

    useEffect(() => {
        const container = document.querySelector(".category-section");

        const handleScroll = (event) => {
            container.scrollLeft += event.deltaY * 0.5; // Adjust the scrolling speed
            event.preventDefault();
        };

        container.addEventListener("wheel", handleScroll);


        return () => {
            container.removeEventListener("wheel", handleScroll);
        };
    }, []);

    useEffect(() => {
        const container = document.querySelector(".debit-section");

        const handleScroll = (event) => {
            container.scrollLeft += event.deltaY * 0.5; // Adjust the scrolling speed
            event.preventDefault();
        };

        container.addEventListener("wheel", handleScroll);

        return () => {
            container.removeEventListener("wheel", handleScroll);
        };
    }, []);



    //get user data

    const [userName, setUserName] = useState("");

    useEffect(() => {
        if (firebase.user) {
            const fetchUserData = async () => {

                const userData = await firebase.getUserData(firebase.user.uid);
                if (userData) {
                    setUserName(userData.name);
                }

            };

            fetchUserData();
        }
    }, [firebase.user]);


    const [currency, setCurrency] = useState('');
    useEffect(() => {
        if (firebase.user) {
            const fetchUserData = async () => {

                const userData = await firebase.getUserData(firebase.user.uid);
                if (userData) {
                    setUserName(userData.name);
                }

            };

            fetchUserData();
        }
    }, [firebase.user]);



    // console.log(userData);

    // console.log(firebase.user)

    return (
        <div className="container flex flex-col gap-0 font-[Rubik]">
            <Welcome name={userName}></Welcome>

            {logs.map((log) => (
                <LogCard
                    key={log.id}
                    link={`/book/view/${log.id}`}
                    id={log.id}
                    {...log.data()}
                />
            ))}

            <div className="flex flex-row gap-2">
                <TotalExpense trans={totalExpense}></TotalExpense>
                <TotalIncome trans={totalIncome}></TotalIncome>
            </div>




            <h3 className="font-normal">Categories</h3>

            <div className="category-section flex gap-2 mt-1 mb-2 overflow-x-auto overflow-hidden ">
                <AddButton></AddButton>
                {categories.map((cate) => (
                    <CategoryCard
                        key={cate.id}
                        link={`/book/view/${cate.id}`}
                        id={cate.id}
                        {...cate.data()}
                    />
                ))}
            </div>

            <h3 className="font-normal">Credit</h3>

            <div className="credit-section flex gap-2 mt-1 mb-2 overflow-x-auto overflow-hidden ">
                <AddButton></AddButton>
                {credits.map((creds) => (
                    <SampleCard
                        key={creds.id}
                        link={`/book/view/${creds.id}`}
                        id={creds.id}
                        {...creds.data()}
                    />
                ))}

            </div>

            <h3 className="font-normal">Debit</h3>

            <div className="debit-section flex gap-2 overflow-x-auto overflow-hidden ">
                <AddButton></AddButton>
                <SampleCard></SampleCard>
                <SampleCard></SampleCard>
                <SampleCard></SampleCard>
                <SampleCard></SampleCard>
                <SampleCard></SampleCard>
                <SampleCard></SampleCard>

            </div>
        </div>
    );
};

export default HomePage;