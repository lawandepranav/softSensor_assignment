import React from "react";
import axios from "axios";


const Cart=()=>{
//     const items = useSelector((state) => state.cart.Carts);
//     let ListCart = [];
//     let TotalCart=0;
//     console.log(TotalCart)
  
//     const [status, setStatus]=React.useState("")
//     const [products, setProducts]=React.useState({})
//     const { loading, error, data } = products;
//     const total = useSelector((state) => state.cart.numberCart);
//    React.useEffect(()=>{
//     setProducts(total)
//    })
//    console.log(total)
//     React.useEffect(() => {
//     axios({
//         method: "get",
//         url: "http://localhost:8080/cart"
//     }).then(res => setProducts(prev => ({
//         ...prev,
//         loading: false,
//         error: false,
//         data: res.data
//     }))).catch(err => setProducts(prev => ({
//         ...prev,
//         loading: false,
//         error: true
//     })))
// }, []);

// const handleDelete= (itemId)=>{
  
//     axios.delete(`http://localhost:8080/cart/${itemId}`)
//     .then(() => setStatus('Delete successful'));

// }

// console.log(data)
return(
    <>
    <div>total</div>
    <div>total</div>
    </>
)

}

export default Cart;



