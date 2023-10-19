import { Link } from "react-router-dom";
import ErrorCSS from "./ErrorCSS.css";

const Error = () => {
  return (
    // <div className="text-center  h-screen ">
    //   <div className=" mt-40">
    //     <h1 className="text-red-600 font-bold text-5xl">OPPS!</h1>
    //     <Link to="/" className="uppercase btn btn-warning">
    //       {" "}
    //       back
    //     </Link>
    //   </div>
    // </div>
    <div>
      <div className="bl_page404 h-screen " >
        <h1 className="text-center  font-extrabold text-4xl  mb-5">Error 404. The page does not exist</h1>
       <div className=" w-1/3 mx-auto">
       <p className="text-center">
          Sorry! The page you are looking for can not be found. Perhaps the page
          you requested was moved or deleted. It is also possible that you made
          a small typo when entering the address. Go to the main page.
        </p>
       </div>
        <div className="bl_page404__wrapper">
          <img
            src="https://github.com/BlackStar1991/Pictures-for-sharing-/blob/master/404/bigBoom/cloud_warmcasino.png?raw=true"
            alt=""
          ></img>
          <div className="bl_page404__el1"></div>
          <div className="bl_page404__el2"></div>
          <div className="bl_page404__el3"></div>
          <a className="bl_page404__link" href="/">
            go home
          </a>
        </div>
      </div>
    </div>
  );
};

export default Error;
