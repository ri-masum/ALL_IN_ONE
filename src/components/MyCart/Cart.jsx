import { useEffect, useState } from "react";
import CartCard from "../Cart/CartCard";


const Cart = () => {

    const [cartProduct,setCartProduct]=useState([]);

    useEffect(()=>{

        fetch("http://localhost:2000/cartProducts")
        .then(res=>res.json())
        .then(data=>{

            console.log(data);
            setCartProduct(data);
        })

    },[])


    return (
        <div>
             <div className="gap-4">
        {
          cartProduct.map((data) => <CartCard key={data._id} data={data}></CartCard>)
        }
      </div>
        </div>
    );
};

export default Cart;