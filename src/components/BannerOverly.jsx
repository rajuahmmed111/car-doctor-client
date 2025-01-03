const BannerOverly = () => {
  return (
    <div className="absolute rounded-xl flex items-center lg:pl-24 md:pl-16 pl-8  h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
      <div className="space-y-7 md:w-1/2">
        <h2 className="text-6xl text-white font-semibold">
          Affordable Price For Car Servicing
        </h2>
        <p className="text-xl text-white">
          There are many variations of passages of available, but the majority
          have suffered alteration in some form
        </p>
        <div>
          <button className="btn btn-error text-white">Discover More</button>
          <button className="btn btn-outline btn-warning text-white ml-4">
            Latest Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerOverly;
