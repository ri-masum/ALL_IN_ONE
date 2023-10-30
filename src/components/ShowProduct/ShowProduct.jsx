import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";

const ShowProduct = () => {
  const loadedData = useLoaderData();
  // console.log(loadedData);

  const { brand } = useParams();
  // slider added
  const slider = loadedData.find((name) => name.brand_name === brand);
  const { brand_name, banner_img1, banner_img2, banner_img3 } = slider;

  const [products, setProduct] = useState([]);
  // loading
  const [loading, setLoading] = useState(true);

  const [brandShow, setBrandShow] = useState(loadedData);
  // console.log(loadedData);

  console.log(brandShow);

  useEffect(() => {
    fetch("http://localhost:2000/Products")
      .then((res) => res.json())
      .then((data) => {
        // matching the brand name
        const brandsProduct = data.filter((product) => {
          return product.brand == brand;
        });
        // set the data to show in web
        console.log(brandsProduct);
        setProduct(brandsProduct);
        setLoading(false);
      });
  }, []);

  return (
    <div className="text-black">
      <div className="carousel w-full h-[70vh]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={banner_img1} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={banner_img2} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={banner_img3} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>

      <h1 className="text-5xl font-semibold  text-center mt-5">
        {" "}
        Our Products
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:w-8/12 lg:mx-auto gap-5 mt-10 ">
        {
        products.length > 0 ? 
        (products.map((data) => <Card key={data._id} data={data}></Card>)  ) : loading ? (
          <div>
            <div className=" flex  items-center md:justify-end min-h-[30vh] text-3xl text-red-700">
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

export default ShowProduct;
