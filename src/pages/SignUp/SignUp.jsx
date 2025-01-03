import { Link } from "react-router-dom";
import SignUpImg from "../../assets/images/login/login.svg";

const SignUP = () => {
  const handleSignUp = (e) => {
    e.preventDefault();
  };

  return (
    <div className="hero min-h-screen mt-8">
      <div className="hero-content flex-col lg:flex-row-reverse gap-20">
        <div className="text-center lg:text-left w-1/2">
          <img src={SignUpImg} alt="" />
        </div>

        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-sm border-2 border-[#E8E8E8]">
          <form onSubmit={handleSignUp} className="card-body">
            <h1 className="text-5xl font-bold text-center my-8">Sign Up</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
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
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Conform Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                value="Sign Up"
                className="btn bg-[#FF3811] text-white"
              />
            </div>
          </form>
          <p className="text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-lg font-semibold text-[#FF3811]">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUP;
