import { Link, useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Details = () => {
  const data = useLoaderData();

  const { id } = useParams();
//   const intID = parseInt(id);
  const detailsPage = data.find((d) => d._id === id);

  const { name, brand, price, type, description, rating, photo } = detailsPage;
  console.log(detailsPage);

  const handleCart=()=>{
    console.log('click to cart');

    fetch("https://assignment10-server-psi.vercel.app/addToCart",{
      method:"POST",
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(detailsPage)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      if(data.insertedId){
        Swal.fire(
          'Good job!',
          'You Added this product to cart',
          'success'
        )

      }
     

      

   
    })
    

  }
  return (
    <div>
      <div className="hero min-h-0 bg-base-500 text-black">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={photo}
            className="max-w-sm lg:max-w-xl "
          />
          <div className="space-y-2">
            <h1 className="text-4xl font-semibold">{name}</h1>
            <h1 className="text-3xl text-gray-400 ">{brand}</h1>
            <h1 className="text-xl font-bold">Type: <span className="text-red-400">{type}</span></h1>
            <h1 className="text-xl">Price: <span className="text-blue-600">{price}</span></h1>
            <h1 className="text-xl flex"> Rating: <span className="text-yellow-500">{rating}</span> 
            <img src={"https://img.freepik.com/free-vector/start_53876-25533.jpg?w=2000"} alt="" className="w-6" />
            </h1>
            
            
            <div className="card-actions justify-start mt-5">
            <button className="btn btn-accent" onClick={handleCart}> Add to Cart</button>

            </div>

            
          </div>
        </div>
      </div>
      <p className="py-6 text-gray-500 text-justify p-10 ">
        <p className="text-black font-bold text-4xl  mb-5">Description</p>
              {description}
            </p>
    </div>
  );
};

export default Details;
