import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    address: "",
    mobile: "",
  });

  const { name, email, address, mobile } = user;

  useEffect(() => {
    loadUser();
  }, []);

  const onChangeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleValidation = (e) => {
    if (!name || !email || !address || !mobile) {
      e.preventDefault();
      toast.error("please fill in all fields");
    }
    else{

      toast.success("Contact Updated Successfully")
    }
  };
  const formSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3003/users/${id}`, user);
    setTimeout(() =>{

      navigate("/list");

    }, 1600)
      };
  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3003/users/${id}`);
    console.log(result);
    setUser(result.data);
  };
  return (
    <div className="container">
      <ToastContainer position="top-right" autoClose={1500} theme="colored" />
      <Card className=" w-50 mt-5 shadow mx-auto  ">
        <Card.Header className="w-100 bg-warning " as="h5">
          EDIT CONTACT
        </Card.Header>
        <form onSubmit={formSubmit}>
          <Card.Body className="p-4 ">
            <input
              onChange={onChangeHandler}
              value={name}
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
              variant="warning"
              type="submit"
              onClick={handleValidation}
              className="form-control mt-3"
            >
              Update
            </Button>
          </Card.Body>
        </form>
      </Card>
    </div>
  );
};

export default Update;
