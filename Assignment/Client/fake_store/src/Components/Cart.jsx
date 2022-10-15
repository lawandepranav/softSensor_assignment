import React from "react";
import axios from "axios";


const Cart=()=>{
    const [products, setproducts] = React.useState([]);

    
      const getData=()=>{
        axios
        .get("https://fakestoreapi.com/products")
        .then((res) => {
          setproducts(res.data);
        })
        .catch((err) => console.log(err));
      }
      React.useEffect(() => {
       getData()
      }, []);

return(
    <>
    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"5%", width:"95%",margin:"auto"}}>
     {products.map((item) => (
        <div className="container" style={{height:"auto",width:"300px"}}>
          <div className="container_content">
            <div className="img_div">
              {" "}
              <img src={item.image} style={{height:"100px",width:"60px"}}/>
            </div>
            <div className="title_div">
              {" "}
              <p>{item.title.substring(0, 27).toUpperCase() + "..."}</p>
            </div>
            <div className="cart_but_div">
              <button>ADD TO CART</button>
            </div>
          </div>
        </div>
      ))}
      </div>
    </>
)

}

export default Cart;



