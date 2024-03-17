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

    //   useEffect(() => {
    //     firebase.getImageURL(props.imageURL).then((url) => setURL(url));
    //   }, []);

    //   console.log(props);

    return (
        <Card style={{ width: "18rem", margin: "25px",border: "transparent" }}>
            {/* <Card.Img variant="top" src={url} /> */}
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    This book has a title {props.name} and this book is sold by{" "}
                    {props.owner} and this book costs Rs.{props.price}
                </Card.Text>
                <Button onClick={(e) => navigate(props.link)} variant="primary">
                    View
                </Button>
                <ProgressBar maxValue={100} completedValue={20} />
                <CustomIcon icon={props.icon} color={props.color}  />
            </Card.Body>
        </Card>
    );
};

export default BookCard;