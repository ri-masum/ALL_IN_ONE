import { Link } from "react-router-dom";

const Signin = () => {
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
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />

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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
