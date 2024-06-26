import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Brands from "./Brands";
import News from "./News";

import { useState } from "react";

import OurProduct from "./ourproduct/OurProduct";

const Home = () => {
  const loadedBrands = useLoaderData();
  const [brands, setBrands] = useState(loadedBrands);
//   console.log(brands);
  return (
    <div className="min-h-screen">
      <div>
        <Banner></Banner>
        <div className=" p-16 bg-black">
            <h1 className="text-5xl font-semibold text-center mb-6 ">Our Top Sells</h1>
            <OurProduct></OurProduct>
        </div>

        <div>
          <div className="mt-10 bg-white">
            <h1 className="text-5xl text-center font-semibold text-black  mt-10">
              {" "}
              Choose Your Brand
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-10 gap-5 py-5">
              {brands.map((brand) => (
                <Brands key={brand.id} brand={brand}></Brands>
              ))}
            </div>
          </div>
        </div>

        <div className=" mb-10">
          <News></News>
        </div>


                
       
      </div>
    </div>
  );
};

export default Home;
