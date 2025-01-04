import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/home/home/Home";
import Login from "../pages/login/Login";
import SignUP from "../pages/SignUp/SignUp";
// import Checkout from "../pages/checkout/Checkout";
import BookServices from "../pages/bookService/BookServices";

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
        path: "signup",
        element: <SignUP />,
      },
      {
        path: "book/:id",
        element: <BookServices />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      // {
      //   path: "checkout/:id",
      //   element: <Checkout />,
      //   loader: ({ params }) =>
      //     fetch(`http://localhost:5000/services/${params.id}`),
      // },
    ],
  },
]);

export default router;
