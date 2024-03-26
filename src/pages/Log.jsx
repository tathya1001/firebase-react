import React, { useState, useEffect } from "react";
import { useFirebase } from "../context/Firebase";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Log() {
  const firebase = useFirebase();
  const [logName, setLogName] = useState("");
  const [expense, setExpense] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (firebase.user) {
      firebase
        .listAllCategory(firebase.user.uid)
        .then((category) => setCategories(category.docs));
    }
  }, [firebase.user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const currentDate = new Date();

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    const time = new Date();

    await firebase.handleNewLog(
      logName,
      categoryId,
      expense,
      day,
      month,
      year,
      firebase.user.uid
    );

    const oldExpense = await firebase.getCategoryData(
      firebase.user.uid,
      categoryId
    );

    console.log(oldExpense);
    console.log(parseInt(oldExpense.expense));

    await firebase.setCategoryData(
      parseInt(oldExpense.expense) + parseInt(expense),
      firebase.user.uid,
      categoryId
    );
    alert("Hello");
    // console.log(iconId);
  };

  return (
    <div className="container">
      <h2>Add Log</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="crediterName">
          <Form.Label>Log Name:</Form.Label>
          <Form.Control
            type="text"
            value={logName}
            onChange={(e) => setLogName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="categoryDropdown">
          <Form.Label>Category:</Form.Label>
          <Form.Control
            as="select"
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
            className="text-black"
          >
            <option value="" style={{ color: "black" }}>
              Select a category
            </option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.data().name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="completedAmount">
          <Form.Label>Expense:</Form.Label>
          <Form.Control
            type="number"
            value={expense}
            onChange={(e) => setExpense(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Log;
