import { Link } from "react-router-dom";

const Brands = ({ brand }) => {
//   console.log(brand);
const {id,brand_name}=brand

  return (
    <div >
   <Link to={`/brands/${brand_name}`}>
   <div className="card card-compact w-96 bg-base-100 hover:bg-orange-500 rounded-md  hover:text-white">
        <figure className="px-10 pt-10">
          <img
            src={brand.img}
            alt={brand.brand_name}
            className="w-full"

          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{brand.brand_name}</h2>


          </div>
        </div>
   </Link>
      </div>

  );
};

export default Brands;
