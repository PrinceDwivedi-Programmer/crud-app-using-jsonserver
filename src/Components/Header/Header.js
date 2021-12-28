import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "../../Components/Pages/Navigation/Navigation"
import Add from '../../Components/Pages/Add/Add'
import List from '../../Components/Pages/ContactList/List'
import Update from '../../Components/Pages/Update/Update'
import Home from '../../Components/Pages/Home/Home'
import Error from "../Pages/Error/Error";

const Header = () => {
  return (
    <div>
      <Router>
      <Navigation/>
        <Routes>
                 <Route path="/" element={<Home/>}/>       
                 <Route path="/add" element={<Add/>}/>       
                 <Route path="/list" element={<List/>}/>       
                 <Route path="/edit/:id" element={<Update/>}/>       
                 <Route path="*" element={<Error/>}/>       
        </Routes>
      </Router>
    </div>
  );
};

export default Header;
