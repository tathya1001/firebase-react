import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useFirebase } from '../context/Firebase';

import Button from "react-bootstrap/Button";

const MyNavbar = () => {
  const firebase = useFirebase();

  const handleLogout = async () => {
    try {
      await firebase.logout();
      console.log('User logged out successfully.');
    } catch (error) {
      console.error('Error logging out:', error.message);
    }
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/list">Add Listing</Nav.Link>
          <Nav.Link href="/book/orders">Orders</Nav.Link>
          <Nav.Link href="/create/credit">Credit</Nav.Link>
          <div className="logout-button">
            <Button variant="danger" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </Nav>

      </Container>
    </Navbar>
  );
};

export default MyNavbar;