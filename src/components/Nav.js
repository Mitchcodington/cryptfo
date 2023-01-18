import React from 'react'
import { Link } from "react-router-dom";
import './Nav.css'

const Navbar = () => {
    return (
        
     
        <div className='navbar'>
           
            <h1> <Link style={{textDecoration: 'none',"cursor" : "pointer",color:"#f1f1f1 "}} to="/"> Cryptfo</Link></h1>
        </div>
   
    )
}

export default Navbar