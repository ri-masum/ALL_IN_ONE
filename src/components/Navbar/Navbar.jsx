import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useContext } from "react";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);


  return (
    <div>
      <div className=" max-w-full bg-white text-white mx-auto py-5">
        <div className="max-w-7xl flex flex-col md:flex-row justify-between mx-auto  ">
         <div className=" flex justify-center">
         <button className="ml-3 flex items-center gap-2  " >
            <img
              src={"https://i.ibb.co/2c3mrch/AllInOne.png"}
              alt=""
              className="w-10 rounded-full"
            />
            <h1 className="gap-3 text-gray-950 text-lg">
              ALL <span className="text-[#C79A61] font-bold text-xl ">
                |
              </span>
              IN <span className="text-[#C79A61] font-bold text-xl ">|</span>
              ONE
            </h1>
          </button>
         </div>

          <div
            className="flex  md:w-3/4  mt-5  md:mt-0 justify-between  text-black items-center"

          >
             <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending "
                  : isActive
                  ? "uppercase  text-gray-700"
                  : ""
              }
            >
              Home
            </NavLink>
           {
            user ? <>
            
            <NavLink
              to="/addproduct"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending text-black"
                  : isActive
                  ? "uppercase text-gray-700"
                  : ""
              }
            >
              Add Product
            </NavLink>
            <NavLink
              to="/mycart"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending text-black"
                  : isActive
                  ? "uppercase text-gray-700"
                  : ""
              }
            >
              My Cart
            </NavLink>
            <div className="flex gap-3 items-center">
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    className="w-6 md:w-10 rounded-full"
                    data-aos="fade-right"
                  />
                ) : (
                  <img
                    src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1696843360~exp=1696843960~hmac=0004b2d3254e070798148e640c5dd5a807dfcd93967cb6e0919429c25564e71c"
                    className="w-10 rounded-full"
                  />
                )}
                {user.displayName ? (
                  <p
                    className="text-yellow-400 text-sm md:text-lg"
                    data-aos="zoom-in"
                  >
                    {user.displayName}
                  </p>
                ) : (
                  <p className="text-[#C79A61]">userName</p>
                )}

                <button
                  onClick={() => logOut()}
                  className="hover:cursor-pointer"
                  
                >
                  Logout
                </button>
              </div>
            
            </>
            :
            <>
            
                 <NavLink
              to="/signin"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending text-black"
                  : isActive
                  ? "uppercase text-gray-700"
                  : ""
              }
            >
              SignIn
            </NavLink>
            <NavLink
              to="/signup"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending text-black"
                  : isActive
                  ? "uppercase text-gray-700"
                  : ""
              }
            >
              SignUp
            </NavLink>
            </>

           }
       
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
