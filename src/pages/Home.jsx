import React, { useEffect, useState } from "react";
import CardGroup from "react-bootstrap/CardGroup";
// import HScrollGrid from "react-horizontal-scroll-grid"


import "./HomePage.css";

import Welcome from "../components/Welcome";
import BookCard from "../components/Card";
import SampleCard from "../components/SampleCard";
import CategoryCard from "../components/CategoryCard";
import AddButton from "../components/AddButton";

import { useFirebase } from "../context/Firebase";

const HomePage = () => {
    const firebase = useFirebase();

    const [books, setBooks] = useState([]);
    const [credits, setCredits] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        firebase.listAllBooks().then((books) => setBooks(books.docs));
    }, []);



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


    // useEffect(() => {
    //     const container = document.querySelector(".card-container");

    //     const handleScroll = (event) => {
    //         container.scrollLeft += event.deltaY * 0.5; // Adjust the scrolling speed
    //         event.preventDefault();
    //     };

    //     container.addEventListener("wheel", handleScroll);

    //     return () => {
    //         container.removeEventListener("wheel", handleScroll);
    //     };
    // }, []);

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



    // console.log(firebase.user)

    return (
        <div className="container flex flex-col gap-0 font-[Rubik]">
            <Welcome name={userName}></Welcome>

            {/* <div className="card-container flex gap-2 mt-1 mb-2 overflow-hidden overflow-x-auto">
            </div> */}

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