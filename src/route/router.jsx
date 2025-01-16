import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Error from "../pages/Error";
import Home from "../pages/Home";
// import AllSession from './../pages/AllSession';
import About from './../pages/About';
import Login from './../pages/Login';
import Register from './../pages/Register';
import Dashboard from './../layouts/Dashboard';

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <Error></Error>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        // {
        //   path: "/about",
        //   element: <About></About>,
        // },
      ]
    },
    {
      path: "/login",
      element: <Login></Login>,
    },
    {
      path: "/register",
      element: <Register></Register>,
    },
    {
      path: "/dashboard",
      element: <Dashboard></Dashboard>,
      children: [
        {
          path:'/dashboard/about',
          element:<About></About>
        }
      ]
    },
  ]);

export default router;

