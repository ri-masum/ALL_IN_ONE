

const Banner = () => {
    return (
        <div>
             <div
          className="hero min-h-[70vh]"
          style={{
            backgroundImage: "url(https://i.ibb.co/RDvD9bv/banner1.png)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">
                Enjoy Your life with our gadget
              </h1>
              <p className="mb-5 uppercase text-lg mt-10">
                UPcomming <span className="text-red-700 font-bold"> 50%</span>{" "}
                off
              </p>
            </div>
          </div>
        </div>
        </div>
    );
};

export default Banner;