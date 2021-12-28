import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { FcAddDatabase } from "react-icons/fc";

const Navigation = () => {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <NavLink className=" nav-link text-white fw-bold fs-5 brand" to="/"><FcAddDatabase  size={40}/> CRUDAPP</NavLink>
          <Nav className="me-end">
            <NavLink className=" btn btn-light mx-3" to="/add">
              Add Contact
            </NavLink>
            <NavLink className=" btn btn-warning" to="/list">
              Contact List
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
