import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const BookServices = () => {
  const service = useLoaderData();
  const { title, price } = service;

  const { user } = useContext(AuthContext);
  if (!user) {
    return <h2>Please Sign In to Book Services</h2>;
  }

  const handleBookService = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    const order = {
      name,
      email,
      date,
      serviceId: service.id,
      price,
    };

    console.log(order);
  };

  return (
    <div>
      <h3 className="text-3xl text-center">BooK Service: {title}</h3>

      <form onSubmit={handleBookService} className="card-body">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={user?.name}
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              name="date"
              defaultValue={new Date().toISOString().split("T")[0]}
              placeholder="date"
              className="input input-bordered"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Due Amount</span>
            </label>
            <input
              type="text"
              name="due_amount"
              defaultValue={`$ ` + price}
              className="input input-bordered"
              required
            />
          </div>
        </div>

        <div className="form-control mt-6">
          <input
            type="submit"
            value="Order Conform"
            className="btn btn-block bg-orange-600 text-white "
          />
        </div>
      </form>
    </div>
  );
};

export default BookServices;
