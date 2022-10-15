import React, { useContext, useRef } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from '../context';

const Navbar = () => {

  const {cartCount}=useContext(CartContext)

  return (
    <header style={{backgroundColor:"teal", display:"flex",justifyContent:"space-around",color:"white"}}>
       <Link style={{color:"white",textDecoration:"none",fontSize:"30px",fontWeight:"600"}} to={"/"}>HOME</Link>
       <Link style={{color:"white",textDecoration:"none",fontSize:"30px",fontWeight:"600"}} to={"/cart"}>CART:{cartCount} </Link>
    </header>
  );
};

export default Navbar;