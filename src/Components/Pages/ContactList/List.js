import React, { useState, useEffect } from "react";
import {NavLink} from "react-router-dom"
import axios from "axios";
import "./List.css";
import { FiEdit,FiTrash2 } from "react-icons/fi";
import { ToastContainer,toast } from "react-toastify";


const List = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    getUsers();
    
    
  }, []);

  const getUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    console.log(result.data);
    setUsers(result.data);
  };

  const deleteUser =async (id) => {

   await axios.delete(`http://localhost:3003/users/${id}`);

    getUsers();
    toast.success(`User deleted successfully`)
  };
  return (
    <div className="container">
    <ToastContainer theme="colored" position="bottom-right" autoClose={1500} />
      <table className="table w-75 mx-auto border shadow mt-4">
        <thead>
          <tr>
            <th
              colSpan="5"
              className="fw-bold fs-4  heading text-white bg-primary"
            >
              Contact List
            </th>
          </tr>
          <tr className="fs-6 bg-warning">
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
    
          {users.map((user, index) => {
            const { id, name, email, mobile } = user;

            return (
              <tr className="align-middle" key={index}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{mobile}</td>
                <td>
                  <NavLink className="btn btn-primary "  to={`/edit/${id}`} ><FiEdit size={20} /></NavLink>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteUser(id)}
                  >
                    <FiTrash2 size={20}/>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default List;
