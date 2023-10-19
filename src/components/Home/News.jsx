const News = () => {
  return (
    <div className="text-black bg-white">
      <h1 className="text-5xl font-semibold text-center mb-10 ">Our News</h1>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-11/12 mx-auto">
     <div className="card card-compact w-96 bg-base-100 shadow-sm rounded-none">
        <figure>
          <img
            src="https://cdn.ndtv.com/tech/gadgets/headphones101_main4_cc0.jpg"
            alt="headphone"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">HOW TO CHOOSE HEADPHONES FOR YOUR SMARTPHONE</h2>
          <p>Praesent sit amet erat ornare, sodales risus quis, tempus risus. Sed leo enim, pharetra vestibulum metus lobortis, ultricies efficitur eros.</p>
          <div className="card-actions justify-between items-center">
            <h1>Dec <span className="text-red-600"> 9</span>,2022  </h1>
            <button className="font-serif font-semibold hover:underline">Read More</button>
          </div>
        </div>
      </div>
      <div className="card card-compact w-96 bg-base-100 shadow-sm rounded-none">
        <figure>
          <img
            src="https://i.pcmag.com/imagery/articles/06oauBJ604rd3GspwH7otu5-1..v1609964455.jpg"
            alt="headphone"
            className="h-[255px]"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">HOW TO CHOOSE LAPTOP FOR YOUR Work</h2>
          <p>Praesent sit amet erat ornare, sodales risus quis, tempus risus. Sed leo enim, pharetra vestibulum metus lobortis, ultricies efficitur eros.</p>
          <div className="card-actions justify-between items-center">
            <h1>Oct <span className="text-red-600"> 10</span>,2023  </h1>
            <button className="font-serif font-semibold hover:underline">Read More</button>
          </div>
        </div>
      </div>
      <div className="card card-compact w-96 bg-base-100 shadow-sm rounded-none">
        <figure>
          <img
            src="https://norwegianscitechnews.com/wp-content/uploads/2020/12/kafe-smarttelefon-3-illustrasjonsfoto-shutterstock-kopi-1100x551-1.jpg"
            alt="headphone"
            className="h-[256px]"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">HOW TO CHOOSE MOBILE FOR YOUR REGULAR USES</h2>
          <p>Praesent sit amet erat ornare, sodales risus quis, tempus risus. Sed leo enim, pharetra vestibulum metus lobortis, ultricies efficitur eros.</p>
          <div className="card-actions justify-between items-center">
            <h1>Sept <span className="text-red-600"> 15</span>,2023  </h1>
            <button className="font-serif font-semibold hover:underline">Read More</button>
          </div>
        </div>
      </div>
     </div>
    </div>
  );
};

export default News;
