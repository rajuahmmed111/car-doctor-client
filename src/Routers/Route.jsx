import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/home/home/Home";
import Login from "../pages/login/Login";
import SignUP from "../pages/SignUp/SignUp";
import BookServices from "../pages/bookService/BookServices";
import Bookings from "../pages/bookings/Bookings";
import PrivateRoute from "./PrivateRoute";
import About from "../pages/home/about/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "signup",
        element: <SignUP />,
      },
      {
        path: "checkout/:id",
        element: (
          <PrivateRoute>
            <BookServices />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/checkout/${params.id}`),
      },
      {
        path: "bookings",
        element: (
          <PrivateRoute>
            <Bookings />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
