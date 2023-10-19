import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";

import Swal from 'sweetalert2'
import { BiSolidHide } from 'react-icons/bi';



const SignUp = () => {
  const { signup } = useContext(AuthContext);
  const navigate = useNavigate();
  const  [error,setError]=useState('')
  const [showPass,setShowPass]=useState(false)


  const handleSignup=e=>{
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.password.value;
    const name=e.target.name.value;
    const photo=e.target.photo.value;
    console.log(email, pass,name,photo);
    setError('')
    if(pass.length <6){
        setError('password should be at least 6 Character')
        return
      }
      else if(!/[A-Z]/.test(pass)){
        setError('password must contain at least one Upper latter')
        return
      }
      else if(!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(pass)){
        setError('password must contain at least one special character')
        return
      }

    signup(email,pass,name,photo)
    .then(result=>{
        console.log(result.user);
        updateProfile(result.user,{
            displayName:name,
            photoURL:photo
        })
        .then(()=>console.log("profile updated"))
        .catch(()=>console.log('failed to update'))
        Swal.fire("SuccessFully SignIn!", "Now press Okey!", "success");

        navigate("/");
    })
    .catch(err=>{
        console.log(err);
        setError(err.message);

    })
  }

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
            <form className="card-body text-black" onSubmit={handleSignup}>
              <div className="form-control ">
              {error && <p className="text-red-500">{error}</p>}
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoURL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="URL"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
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
                  name="password"
                  placeholder="password"
                  className="input input-bordered text-black"
                  required
                />
                <span onClick={()=>setShowPass(!showPass)} className="text-blue-500 absolute right-10 bottom-44 hover:cursor-pointer "><BiSolidHide></BiSolidHide></span>

              </div>
              <div className="form-control mt-6">
                <button className="btn btn-accent">SignUp</button>
              </div>
            </form>
            <p className="text-sm text-center mb-5 text-black">
              Already Have Account ?{" "}
              <Link to="/signin" className="text-blue-700">
                SignIn
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
