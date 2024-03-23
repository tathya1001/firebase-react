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
import HeroCard from "../components/HeroCard";

const Home = () => {

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
            container.scrollLeft += event.deltaY * 0.5;
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
            container.scrollLeft += event.deltaY * 0.5;
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
            container.scrollLeft += event.deltaY * 0.5;
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

    return (
        <div className="bg-[#05051f]">
            <div className="w-full py-3 flex flex-col container font-[Rubik]">

                <Welcome name={userName}></Welcome>

                <div className="flex flex-row gap-2">
                    <HeroCard title={"Expense"} trans={totalExpense} color={""}></HeroCard>
                    <HeroCard title={"Income"} trans={totalIncome} color={""}></HeroCard>
                    <AddButton link="/create/log"></AddButton>

                </div>

                <h3 className="font-normal mt-2 text-white">Categories</h3>

                <div className="category-section space-x-2 flex overflow-x-auto overflow-hidden">
                    <AddButton link="/create/category"></AddButton>
                    {categories.map((cate) => (
                        <CategoryCard
                            key={cate.id}
                            link={`/book/view/${cate.id}`}
                            id={cate.id}
                            {...cate.data()}
                        />
                    ))}
                </div>

                <h3 className="font-normal mt-2 text-white">Credit</h3>

                <div className="credit-section space-x-2 flex overflow-x-auto overflow-hidden">
                    <AddButton link="/create/credit"></AddButton>
                    {credits.map((creds) => (
                        <SampleCard
                            key={creds.id}
                            link={`/book/view/${creds.id}`}
                            id={creds.id}
                            {...creds.data()}
                        />
                    ))}
                </div>

                <h3 className="font-normal mt-2 text-white">Debit</h3>

                <div className="debit-section space-x-2 flex overflow-x-auto overflow-hidden">
                    <AddButton link="/create/debit"></AddButton>
                    {credits.map((creds) => (
                        <SampleCard
                            key={creds.id}
                            link={`/book/view/${creds.id}`}
                            id={creds.id}
                            {...creds.data()}
                        />
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Home;