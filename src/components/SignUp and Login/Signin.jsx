import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import googlePng from "/google.png";
import { BiSolidHide } from 'react-icons/bi';


const Signin = () => {
  const navigate = useNavigate();
  const { signin, googleLogin } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.password.value;
    console.log(email, pass);
    setError("");

    signin(email, pass)
      .then((result) => {
        console.log(result.user);
        Swal.fire("SuccessFully SignIn!", "Now press Okey!", "success");

        navigate("/");
      })
      .catch((err) => {
        console.error(err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${err.message}`,
        });
      });
  };
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        Swal.fire("SuccessFully SignIn!", "Now press Okey!", "success");

        navigate("/");
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  return (
    <div>
      <div className=" min-h-[70vh] ">
        <div className="hero">
          <img
            className="w-1/2"
            src={
              "https://img.freepik.com/free-vector/semiconductor-electronic-components-isometric-composition_1284-23810.jpg?w=1060&t=st=1697664839~exp=1697665439~hmac=80ff390ebf6049ea10f55bef9761634a0708d1a0a0836086901987d680c55939"
            }
            alt=""
          />

          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body text-black" onSubmit={handleLogin}>
              <div className="form-control ">
                {error && <p className="text-red-500">{error}</p>}
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={ showPass? 'text' : 'password'}
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <span
                  onClick={() => setShowPass(!showPass)}
                  className="text-blue-500 absolute right-10 top-44 hover:cursor-pointer"
                >
                  <BiSolidHide></BiSolidHide>
                </span>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-accent">SignIn</button>
              </div>
            </form>
            <p className="text-sm text-center mb-5 text-black">
              New User? Please{" "}
              <Link to="/signup" className="text-blue-700">
                SingUp
              </Link>
            </p>
            <h1 className="text-black text-sm text-center ">OR SignIn With</h1>
            <div className="flex justify-center mt-3">
              <img
                src={googlePng}
                onClick={handleGoogleLogin}
                alt="google"
                className="w-10 mb-5 "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
