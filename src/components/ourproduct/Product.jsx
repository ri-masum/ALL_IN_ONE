const Product = ({ data }) => {
  console.log(data);
  return (
    <div className="flex gap-5  w-72 justify-center">
      <img src={data.img} alt="" 
      className="w-12 h-12"/>
      <div className="space-y-3">
        <h1 className="text-xl font-bold">{data.name}</h1>
        <h1>{data.small_desc}</h1>
      </div>
    </div>
  );
};

export default Product;
