import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";


const ShowProduct = () => {
    const loadedData=useLoaderData();
    // console.log(loadedData);

    const {brand}=useParams()
// slider added 
    const slider=loadedData.find(name=>name.brand_name === brand)
    const {brand_name,banner_img1,banner_img2,banner_img3}=slider;




    const [products,setProduct]=useState([]);
    const [brandShow,setBrandShow]=useState(loadedData);
    // console.log(loadedData);


   
   console.log(brandShow);

    useEffect(()=>{
        fetch('http://localhost:2000/Products')
        .then(res=>res.json())
        .then(data=>{
            // console.log(data);
            const brandsProduct=data.filter((product)=>{
              return product.brand == brand
            })
            // console.log('filter kora product gula',brandsProduct);
            setProduct(brandsProduct)

           
           
        })
    },[])
  


    return (
        <div className="text-black">
            <h1 className="text-center text-4xl font-semibold">{brand_name}</h1>

          <div className="grid grid-cols-1 md:grid-cols-2">
          {
             products.map(data=><Card key={data._id} data={data}></Card>)
            }
       
          </div>


    
        <div className="carousel w-full" >
  <div id="slide1" className="carousel-item relative w-full">
    <img src={banner_img1} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={banner_img2} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={banner_img3} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
 
</div>
    

        </div>
    );
};

export default ShowProduct;