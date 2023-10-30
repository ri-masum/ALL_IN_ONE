import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const loadedData = useLoaderData();
  const { _id, name, brand, price, type, description, rating, photo } =
    loadedData;
    const navigate=useNavigate()
  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const brand = e.target.brand.value;
    const price = e.target.price.value;
    const type = e.target.type.value;
    const description = e.target.description.value;
    const rating = e.target.rating.value;
    const photo = e.target.photo.value;

    const all = { name, brand, price, type, description, rating, photo };
    console.log(all);
    fetch(`http://localhost:2000/update/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(all),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if(data.modifiedCount>0){
            Swal.fire(
                "Successful!",
                "You Updated Product Successfully",
                "success"
              );

              navigate("/")
        }

      });
  };
  return (
    <div>
      <div className="bg-[#F4F3F0] p-12">
        <h1 className="font-Rancho font-semibold text-3xl text-center text-[#374151]">
          Update : {name}
        </h1>

        <form onSubmit={handleUpdateProduct} className="text-black">
          <div className="flex  gap-3">
            <div className="form-control md:w-1/2 ">
              <label className="label">
                <span className="label-text font-bold font-Raleway">
                  Product Name
                </span>
              </label>
              <label>
                <input
                  type="text"
                  name="name"
                  id=""
                 defaultValue={name}
                  placeholder="Enter Product name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ">
              <label className="label">
                <span className="label-text font-bold font-Raleway">
                  Brand Name{" "}
                </span>
              </label>
              <label>
                <input
                  type="text"
                  name="brand"
                  id=""
                  defaultValue={brand}
                  placeholder="Enter Brand Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="form-control md:w-1/2 ">
              <label className="label">
                <span className="label-text font-bold font-Raleway">Price</span>
              </label>
              <label>
                <input
                  type="number"
                  name="price"
                  id=""
                  defaultValue={price}
                  placeholder="Enter Product Price"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ">
              <label className="label">
                <span className="label-text font-bold font-Raleway">Type </span>
              </label>
              <label>
                <input
                  type="text"
                  name="type"
                  id=""
                  defaultValue={type}
                  placeholder="Enter Product type"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="form-control md:w-1/2 ">
              <label className="label">
                <span className="label-text font-bold font-Raleway">
                  Short Description{" "}
                </span>
              </label>
              <label>
                <input
                  type="text"
                  name="description"
                  id=""
                  defaultValue={description}
                  placeholder="Enter Product Desc"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ">
              <label className="label">
                <span className="label-text font-bold font-Raleway">
                  Rating{" "}
                </span>
              </label>
              <label>
                <input
                  type="text"
                  name="rating"
                  defaultValue={rating}
                  id=""
                  placeholder="Rating"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <div className="form-control  ">
            <label className="label">
              <span className="label-text">Photo </span>
            </label>
            <label>
              <input
                type="text"
                name="photo"
                defaultValue={photo}
                id=""
                placeholder="Enter Photo URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <button className="btn btn-block mt-5 bg-[#D2B48C] normal-case font-Rancho text-xl">
            Update Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
