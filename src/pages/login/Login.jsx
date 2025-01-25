import { Link } from "react-router-dom";
import loginImg from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";

const Login = () => {
  const { signIn } = useContext(AuthContext);

  // const location = useLocation();
  // const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        // navigate(location?.state ? location?.state : "/");

        // get access token
        const user = { email };
        axios.post("http://localhost:5000/jwt", user).then((res) => {
          console.log(res.data);
        });
      })
      .catch((err) => {
        console.error("Error creating user:", err);
      });
  };

  return (
    <div className="hero min-h-screen mt-8">
      <div className="hero-content flex-col lg:flex-row gap-20">
        <div className="text-center lg:text-left w-1/2">
          <img src={loginImg} alt="" />
        </div>

        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-sm border-2 border-[#E8E8E8]">
          <form onSubmit={handleSignIn} className="card-body">
            <h1 className="text-5xl font-bold text-center my-8">Login</h1>
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
                <span className="label-text">Password</span>
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
                value="Login"
                className="btn bg-[#FF3811] text-white"
              />
            </div>
          </form>
          <p className="text-center mb-6">
            New to Car Doctors?{" "}
            <Link to="/signup" className="text-lg font-semibold text-[#FF3811]">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
