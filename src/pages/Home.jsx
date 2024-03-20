import React, { useEffect, useState } from "react";
import CardGroup from "react-bootstrap/CardGroup";
// import HScrollGrid from "react-horizontal-scroll-grid"


import "./HomePage.css";

import BookCard from "../components/Card";
import SampleCard from "../components/SampleCard";
import CategoryCard from "../components/CategoryCard";
import AddButton from "../components/AddButton";

import { useFirebase } from "../context/Firebase";

const HomePage = () => {
    const firebase = useFirebase();

    const [books, setBooks] = useState([]);
    const [credits, setCredits] = useState([]);

    useEffect(() => {
        firebase.listAllBooks().then((books) => setBooks(books.docs));
    }, []);



    useEffect(() => {
        if (firebase.user) {
            firebase.listAllCredits(firebase.user.uid).then((credit) => setCredits(credit.docs));
        }
    }, [firebase.user]);




    useEffect(() => {
        const container = document.querySelector(".card-container");

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

    // books.map((book) => (

    //     console.log(...book)
    // ))

    // console.log(firebase.user.uid)

    return (
        <div className="container flex flex-col gap-6 ">
            <div className="card-container flex gap-2 overflow-hidden overflow-x-auto">
                {books.map((book) => (
                    <BookCard
                        key={book.id}
                        link={`/book/view/${book.id}`}
                        id={book.id}
                        {...book.data()}
                    />
                ))}
            </div>



            <div className="category-section flex gap-2 overflow-x-auto overflow-hidden ">
                <AddButton></AddButton>
                <CategoryCard></CategoryCard>
                <CategoryCard></CategoryCard>
                <CategoryCard></CategoryCard>
                <CategoryCard></CategoryCard>
                <CategoryCard></CategoryCard>
                <CategoryCard></CategoryCard>
                <CategoryCard></CategoryCard>
                <CategoryCard></CategoryCard>
                <CategoryCard></CategoryCard>
                <CategoryCard></CategoryCard>

            </div>

            <div className="credit-section flex gap-2 overflow-x-auto overflow-hidden ">
                <AddButton></AddButton>
                {credits.map((creds) => (
                    <SampleCard
                        key={creds.id}
                        link={`/book/view/${creds.id}`}
                        id={creds.id}
                        {...creds.data()}
                    />
                ))}
                {/* <SampleCard></SampleCard>
                <SampleCard></SampleCard>
                <SampleCard></SampleCard>
                <SampleCard></SampleCard>
                <SampleCard></SampleCard>
                <SampleCard></SampleCard> */}

            </div>

            <div className="debit-section flex gap-2 overflow-x-auto overflow-hidden ">
                <AddButton></AddButton>
                <SampleCard></SampleCard>
                <SampleCard></SampleCard>
                <SampleCard></SampleCard>
                <SampleCard></SampleCard>
                <SampleCard></SampleCard>
                <SampleCard></SampleCard>

            </div>

            <div></div>
        </div>
    );
};

export default HomePage;