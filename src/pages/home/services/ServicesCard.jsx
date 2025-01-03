// eslint-disable-next-line react/prop-types
const ServicesCard = ({ service }) => {
  // eslint-disable-next-line react/prop-types
  const { title, img, price } = service;

  return (
    <div className="card bg-base-100 w-96 shadow-sm border-2 border-[#E8E8E8]">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-3xl">{title}</h2>
        <p className="text-2xl font-bold">Price {price}</p>
        <div className="card-actions">
          <button className="btn bg-orange-600 text-white">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;