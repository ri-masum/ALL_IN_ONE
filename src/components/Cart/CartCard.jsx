import PropTypes from "prop-types";
import { AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";

const CartCard = ({ data,cartData,setCartData }) => {
  console.log(data);

  const {_id}=data;



  return (
    <div>
      <div className="card w-96 md:w-1/2 mt-5 mx-auto bg-base-100 shadow-xl flex-row ">
        <figure>
          <img src={data.photo} alt="photo" />
        </figure>
        <div className="card-body">
          <h2 className="text-xl text-gray-500 font-semibold">{data.brand}</h2>
          <h2 className="card-title text-black">{data.name}</h2>
          <div className="flex justify-start gap-5">
            <h1 className="text-lg text-black font-bold">
              <span className="text-red-500">{data.type}</span>
            </h1>
            <h1 className="text-lg text-black font-bold">
              Price:<span className="text-red-500">{data.price}</span>BDT
            </h1>
          </div>
          <h1 className="text-lg font-bold text-black">
            Rating: <span className="text-gray-400">{data.rating}</span>
          </h1>

          {data.description.length > 80 ? (
            <p>{data.description.slice(0, 80)}</p>
          ) : (
            <p>{data.description}</p>
          )}

          <div className="  flex justify-end" >
            <h1 className="text-5xl text-black font-bold text-center" onClick={()=>handleDelete(_id)}>
              <AiFillDelete></AiFillDelete>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;

CartCard.propTypes = {
  data: PropTypes.object,
};
