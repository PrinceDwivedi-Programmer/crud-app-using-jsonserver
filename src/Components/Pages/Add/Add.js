import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button, Alert } from "react-bootstrap";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Add = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    address: "",
    mobile: "",
  });

  const { name, email, address, mobile } = user;

  const onChangeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleValidation = (e) => {
    if (!name || !email || !address || !mobile) {
      e.preventDefault();

      toast.error("please fill in all fields");
    } else {
      toast.success("Contact Added Successfully");
    }
  };
  const formSubmit = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:3003/users", user);

    setTimeout(() => {
      navigate("/list");
    }, 1600);
    // navigate("/list");
  };
  return (
    <div className="container">
      <ToastContainer position="top-right" autoClose={1500} theme="colored" />
      <Card className=" w-50 mt-5 shadow mx-auto  ">
        <Card.Header className="w-100 bg-primary text-white" as="h5">
          ADD CONTACT
        </Card.Header>
        <form onSubmit={formSubmit}>
          <Card.Body className="p-4 ">
            <input
              onChange={onChangeHandler}
              value={name.toUpperCase()}
              type="text"
              className="form-control mt-3"
              placeholder="Enter Your Name"
              name="name"
            />
            <input
              onChange={onChangeHandler}
              type="text"
              value={email}
              className="form-control mt-3"
              placeholder="Enter Your Email "
              name="email"
            />
            <input
              onChange={onChangeHandler}
              type="text"
              value={address}
              className="form-control mt-3"
              placeholder="Enter Your Address"
              name="address"
            />
            <input
              value={mobile}
              onChange={onChangeHandler}
              type="number"
              className="form-control mt-3"
              placeholder="Enter Your Mobile Number"
              name="mobile"
            />

            <Button
              variant="primary"
              type="submit"
              onClick={handleValidation}
              className="form-control mt-3"
            >
              Submit
            </Button>
          </Card.Body>
        </form>
      </Card>
    </div>
  );
};

export default Add;
