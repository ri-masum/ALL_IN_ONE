import { useEffect, useState } from "react";
import { useFetcher } from "react-router-dom";
import Product from "./Product";


const OurProduct = () => {

const [datas,setData]=useState([]);
useEffect(()=>{
    fetch("/oursell.json")
    .then(res=>res.json())
    .then(data=>setData(data))
},[])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 space-y-5 w-11/12 mx-auto">
            {
                datas.map(data=><Product key={data.id} data={data}></Product>)
            }
           
            
        </div>
    );
};

export default OurProduct;