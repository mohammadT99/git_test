import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Mainlayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import Register from "../pages/Auth/register";
import Login from "../pages/Auth/login";
import Dashboard from "../pages/dashboard";
import Product from "../pages/dashboard/product";
import AddProduct from "../pages/dashboard/addProduct";
import UpdateProducts from "../pages/dashboard/updateProducts";
import Vaiter from "../pages/dashboard/vaiter";
import Bill from "../pages/dashboard/bills";
import AddSub from "../pages/dashboard/addsub";
import Sub from "../pages/dashboard/sub";
import Gallery from "../pages/gallery";
import Reserve from "../pages/Reserve";

const router = createBrowserRouter([
  {
    path: "/",
    index: false,
    element: <Mainlayouts />,
    children: [
      {
        path: "/",
        index: true,
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/dashboard/products",
    element: <Product />,
  },
  {
    path: "/dashboard/products/add",
    element: <AddProduct />,
  },
  {
    path: "/products/?:id",
    element: <UpdateProducts />,
  },
  {
    path: "/dashboard/viter",
    element: <Vaiter />,
  },
  {
    path: "/dashboard/bill",
    element: <Bill />,
  },
  {
    path: "/dashboard/addsub",
    element: <AddSub />,
  },
  {
    path: "/dashboard/sub",
    element: <Sub />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/addreserve",
    element: <Reserve />,
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
