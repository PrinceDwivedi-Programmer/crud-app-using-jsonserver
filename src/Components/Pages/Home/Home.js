import React from 'react'
import {ToastContainer,toast} from "react-toastify"

const Home = () => {

      const handleUpdate=()=>{


            toast.success("wow! you are awesome")
      }
                return (
                                <div>
                                      <h1>Homepage</h1>
                                      <ToastContainer/> 
                                      <button className="btn btn-primary" onClick={handleUpdate}>Click Me</button>         
                                </div>
                )
}

export default Home
