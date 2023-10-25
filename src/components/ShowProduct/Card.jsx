import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
const Card = ({ data }) => {
//   console.log(data);
  return (
    <div>
    {
        data?
        <div className="card w-96  h-[500px] bg-base-100 shadow-xl">
        <figure>
          <img
            src={data.photo}
            alt="photo"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-xl text-gray-500 font-semibold">{data.brand}</h2>
          <h2 className="card-title">{data.name}</h2>
            <div className='flex justify-between'>
            <h1 className='text-lg text-black font-bold'><span className='text-red-500'>{data.type}</span></h1>
            <h1 className='text-lg text-black font-bold'>Price:<span className='text-red-500'>{data.price}</span>BDT</h1>

            </div>
            <h1 className='text-lg font-bold'>Rating: <span className='text-gray-400'>{data.rating}</span></h1>
          {
            data.description.length> 80 ? <p>{data.description.slice(0,80)}</p> :<p>{data.description}</p>
          }
          <div className="card-actions justify-end">
          <Link to={`/details/${data._id}`}>
          <button className="btn btn-success" >View Details</button>

          </Link>
          <Link to={`/update/${data._id}`}>
          <button className="btn btn-primary">Update</button>

          </Link>
          </div>
        </div>
      </div>
      :
      <h1> np product avilable</h1>
    }


      
    </div>
  );
};

export default Card;

Card.propTypes ={
    data:PropTypes.object
}