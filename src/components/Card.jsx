import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ProgressBar from "./ProgressBar";
import CustomIcon from "./CustomIcon";

import { useFirebase } from "../context/Firebase";

const BookCard = (props) => {
    const firebase = useFirebase();
    const navigate = useNavigate();

    const [url, setURL] = useState(null);

    // useEffect(() => {
    //     firebase.getImageURL(props.imageURL).then((url) => setURL(url));
    // }, []);

    // const handleAddComment = () => {
    //     // Call the addSubcollectionToDocument function with appropriate parameters
    //     firebase.addSubcollectionToDocument(props.id, "log", {
    //         text: "This is a comment",
    //         author: "John Doe",
    //         timestamp: new Date().toISOString(),
    //     }).then(() => {
    //         console.log("Added successfully");
    //     }).catch((error) => {
    //         console.error("Error adding:", error);
    //     });
    // };

    return (
        <Card style={{ width: "18rem", margin: "25px", border: "transparent" }}>
            {/* <Card.Img variant="top" src={url} /> */}
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <p>{props.userid}</p>
                <p>{props.totalexpense}</p>
                <p>{props.totalincome}</p>
                <p>{props.currencyid}</p>
                {/* <Button onClick={handleAddComment} variant="primary">
                    Add Comment
                </Button> */}
            </Card.Body>
        </Card>
    );
};

export default BookCard;
