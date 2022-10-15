import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "./home.css";
import InfiniteScroll from 'react-infinite-scroll-component';

const Home = () => {
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

  const fetchData= ()=>{
  const data = fetch('https://fakestoreapi.com/products/2')
  .then(res=>res.json())
  .then(json=>console.log(json))
return data
  }
 
  const newData=()=>{
    const updateData=fetchData();
    setproducts([...products, ...updateData])
  }

  return (
    <div className="homepage">
      <InfiniteScroll dataLength={products.length} next={()=>newData()} hasMore={true}>
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
              <button>ADD TO CART</button>
            </div>
          </div>
        </div>
      ))}
      </InfiniteScroll>
    </div>
  );
};

export default Home;
