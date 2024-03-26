import React, { useState, useEffect } from "react";
import { useFirebase } from "../context/Firebase";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { getAuth } from "firebase/auth"; // Import getAuth
import { onAuthStateChanged } from "firebase/auth"; // Import onAuthStateChanged

import { Radio } from "@material-tailwind/react";

import "./Category.css";
import CustomIcon from "../components/CustomIcon";

function Category() {
  const firebase = useFirebase();
  const [categoryName, setCategoryName] = useState("");
  const [iconId, setIconId] = useState("");
  const [colorId, setColorId] = useState("");
  // console.log(firebase.user)
  // const [currentUser, setCurrentUser] = useState(null); // State to store the current user

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if currentUser state has been set
    await firebase.handleNewCategory(
      categoryName,
      iconId,
      colorId,
      firebase.user.uid
    );
  };

  const handleRadioChange = (e) => {
    // console.log("Selected Radio Value:", e.target.value);
    console.log("Selected Radio Value:", iconId);
  };

  return (
    <div className="container">
      <h2>Add Category</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="crediterName">
          <Form.Label>Category Name:</Form.Label>
          <Form.Control
            type="text"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="leftAmount">
          <Form.Label>Icon:</Form.Label>
          <Form.Control type="number" value={iconId} />
        </Form.Group>
        <Form.Group controlId="completedAmount">
          <Form.Label>Color:</Form.Label>
          <Form.Control
            type="number"
            value={colorId}
            onChange={(e) => setColorId(e.target.value)}
          />
        </Form.Group>

        <div
          className="radio-tile-group flex flex-wrap justify-center"
          onChange={(e) => setIconId(e.target.value)}
        >
          <div className="input-container h-28 w-28 m-2 relative">
            <input
              id="walk"
              className="radio-button opacity-0 absolute top-0 left-0 h-full w-full cursor-pointer "
              type="radio"
              name="radio"
              value={1}
            />
            <div className="radio-tile flex flex-col items-center justify-center w-full h-full border-2 rounded-lg p-4 transition-transform ">
              <div className="w-12 fill-black">
                <CustomIcon icon={1}></CustomIcon>
              </div>
            </div>
          </div>

          <div className="input-container h-28 w-28 m-2 relative">
            <input
              id="walk"
              className="radio-button opacity-0 absolute top-0 left-0 h-full w-full cursor-pointer"
              type="radio"
              name="radio"
              value={2}
            />
            <div className="radio-tile flex flex-col items-center justify-center w-full h-full border-2 border-blue-500 rounded-lg p-4 transition-transform ">
              <div className="w-12">
                <CustomIcon icon={2}></CustomIcon>
              </div>
            </div>
          </div>

          <div className="input-container h-28 w-28 m-2 relative">
            <input
              id="walk"
              className="radio-button opacity-0 absolute top-0 left-0 h-full w-full cursor-pointer"
              type="radio"
              name="radio"
              value={3}
            />
            <div className="radio-tile flex flex-col items-center justify-center w-full h-full border-2 border-blue-500 rounded-lg p-4 transition-transform ">
              <div className="w-12">
                <CustomIcon icon={3}></CustomIcon>
              </div>
            </div>
          </div>

          <div className="input-container h-28 w-28 m-2 relative">
            <input
              id="walk"
              className="radio-button opacity-0 absolute top-0 left-0 h-full w-full cursor-pointer"
              type="radio"
              name="radio"
              value={3}
            />
            <div className="radio-tile flex flex-col items-center justify-center w-full h-full border-2 border-blue-500 rounded-lg p-4 transition-transform ">
              <div className="w-12">
                <CustomIcon icon={3}></CustomIcon>
              </div>
            </div>
          </div>

          <div className="input-container h-28 w-28 m-2 relative">
            <input
              id="walk"
              className="radio-button opacity-0 absolute top-0 left-0 h-full w-full cursor-pointer"
              type="radio"
              name="radio"
              value={3}
            />
            <div className="radio-tile flex flex-col items-center justify-center w-full h-full border-2 border-blue-500 rounded-lg p-4 transition-transform ">
              <div className="w-12">
                <CustomIcon icon={3}></CustomIcon>
              </div>
            </div>
          </div>

          <div className="input-container h-28 w-28 m-2 relative">
            <input
              id="walk"
              className="radio-button opacity-0 absolute top-0 left-0 h-full w-full cursor-pointer"
              type="radio"
              name="radio"
              value={3}
            />
            <div className="radio-tile flex flex-col items-center justify-center w-full h-full border-2 border-blue-500 rounded-lg p-4 transition-transform ">
              <div className="w-12">
                <CustomIcon icon={3}></CustomIcon>
              </div>
            </div>
          </div>

          <div className="input-container h-28 w-28 m-2 relative">
            <input
              id="walk"
              className="radio-button opacity-0 absolute top-0 left-0 h-full w-full cursor-pointer"
              type="radio"
              name="radio"
              value={3}
            />
            <div className="radio-tile flex flex-col items-center justify-center w-full h-full border-2 border-blue-500 rounded-lg p-4 transition-transform ">
              <div className="w-12">
                <CustomIcon icon={3}></CustomIcon>
              </div>
            </div>
          </div>
        </div>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Category;
