import React, { useContext, useRef } from 'react';
import { Link } from "react-router-dom";


const Navbar = () => {



  return (
    <header style={{backgroundColor:"teal", display:"flex",justifyContent:"space-around",color:"white"}}>
       <Link style={{color:"white",textDecoration:"none",fontSize:"30px",fontWeight:"600"}} to={"/"}>HOME</Link>
       <Link style={{color:"white",textDecoration:"none",fontSize:"30px",fontWeight:"600"}} to={"/cart"}>CART </Link>
    </header>
  );
};

export default Navbar;