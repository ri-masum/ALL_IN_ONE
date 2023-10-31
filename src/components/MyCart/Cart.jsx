import { useEffect, useState } from "react";
import CartCard from "../Cart/CartCard";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Cart = () => {

    const data=useLoaderData();

    const [cartProduct,setCartProduct]=useState([]);
    const [loading, setLoading] = useState(true);
    const [cartData,setCartData]=useState(data);
    const [change,setChange]=useState(true)

    useEffect(()=>{

        fetch("http://localhost:2000/cartProducts")
        .then(res=>res.json())
        .then(data=>{

            console.log(data);
            setCartProduct(data);
            setLoading(false);

        })

    },[change])

    const handleDelete=(_id)=>{
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          })
          .then(result=>{
            if(result.isConfirmed){
                fetch(`http://localhost:2000/cartProducts/${_id}`,{
                    method:"DELETE"
    
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data);
                    if(data.deletedCount>0){
                        Swal.fire("Deleted!", "Your file has been deleted.", "success");
                        
                        // const remaining=cartData.filter(cd=>cd._id !== _id)
                        // setCartData(remaining)
                        setChange(!change)
                        
                    }
                })
            }
          })
    
    
      }
    
    return (
        <div>
             <div className="gap-4">

        {/* {
          cartProduct.map((data) => <CartCard key={data._id} data={data}></CartCard>)
        }
         */}
        {
        cartProduct.length > 0 ? 
        (cartProduct.map((data) => <CartCard key={data._id} data={data}
        cartData={cartData}
        setCartData={setCartData}
        handleDelete={handleDelete}
        ></CartCard>)  ) : loading ? (
          <div>
            <div className=" flex  items-center justify-center min-h-screen text-3xl text-red-700">
             Loading <span className="loading loading-dots loading-lg"></span>
            </div>
          </div>
        ) : (
          <div className="  ">
            <img
              src={"https://dlinkmea.com/images/no-product.png"}
              className="min-h-0 lg:min-h-[60vh] ml-0 lg:ml-52 md:ml-32"
            />
          </div>
        )}
      </div>
        </div>
    );
};

export default Cart;