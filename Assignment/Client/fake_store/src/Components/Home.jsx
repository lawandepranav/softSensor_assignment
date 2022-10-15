import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "./home.css";
import { CartContext } from "../context";

const Home = () => {
  const {handleCount}=React.useContext(CartContext)
  const [products, setproducts] = useState([]);

const[newdata, setNewdata]=useState([])

  const getData=()=>{
    axios
    .get("https://fakestoreapi.com/products")
    .then((res) => {
      setproducts(res.data);
    })
    .catch((err) => console.log(err));
  }
  useEffect(() => {
   getData()
  }, []);

 

  return (
    <div className="homepage">
      
      {products.map((item) => (
        <div className="container">
          <div className="container_content">
            <div className="category_div">
              <h3>{item.category.toUpperCase()}</h3>
            </div>
            <div className="img_div">
              {" "}
              <img src={item.image} />
            </div>
            <div className="title_div">
              {" "}
              <h1 >{item.title.substring(0, 27).toUpperCase() + "..."}</h1>
            </div>
            <div className="desc_div">
              {" "}
              <p>{item.description.substring(0, 100) + "..."}</p>
            </div>

            <div className="price_div">
              <p>Price: ₹{item.price}</p>
            </div>
            <div className="cart_but_div">
              <button onClick={()=> handleCount(1)}>ADD TO CART</button>
            </div>
          </div>
        </div>
      ))}
   
    </div>
  );
};

export default Home;
