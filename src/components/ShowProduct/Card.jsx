const Card = ({ data }) => {
//   console.log(data);
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={data.photo}
            alt="photo"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{data.name}</h2>
          <p>{data.description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-success">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
