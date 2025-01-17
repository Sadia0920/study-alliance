import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Error from "../pages/Error";
import Home from "../pages/Home";
// import AllSession from './../pages/AllSession';
import About from './../pages/About';
import Login from './../pages/Login';
import Register from './../pages/Register';
import Dashboard from './../layouts/Dashboard';
import ViewBookedSession from "../pages/student/ViewBookedSession";
import CreateNote from './../pages/student/CreateNote';
import ManagePersonalNotes from './../pages/student/ManagePersonalNotes';
import ViewAllStudyMaterials from './../pages/student/ViewAllStudyMaterials';
import CreateStudySession from "../pages/tutor/CreateStudySession";
import ViewAllStudySessions from './../pages/tutor/ViewAllStudySessions';
import UploadMaterials from './../pages/tutor/UploadMaterials';
import ViewAllMaterials from './../pages/tutor/ViewAllMaterials';
import ViewAllUsers from './../pages/admin/ViewAllUsers';
import AdminViewAllStudySession from './../pages/admin/AdminViewAllStudySession';
import AdminViewAllMaterials from './../pages/admin/AdminViewAllMaterials';

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
      errorElement: <Error></Error>,
      children: [
        {
          path:'/dashboard/about',
          element:<About></About>,
        },
        {
          path:'/dashboard/viewBookedSession',
          element:<ViewBookedSession></ViewBookedSession>,
        },
        {
          path:'/dashboard/createNote',
          element:<CreateNote></CreateNote>,
        },
        {
          path:'/dashboard/managePersonalNotes',
          element:<ManagePersonalNotes></ManagePersonalNotes>,
        },
        {
          path:'/dashboard/viewAllStudyMaterials',
          element:<ViewAllStudyMaterials></ViewAllStudyMaterials>,
        },
        // tutor
        {
          path:'/dashboard/createStudySession',
          element:<CreateStudySession></CreateStudySession>,
        },
        {
          path:'/dashboard/viewAllStudySessions',
          element:<ViewAllStudySessions></ViewAllStudySessions>,
        },
        {
          path:'/dashboard/uploadMaterials',
          element:<UploadMaterials></UploadMaterials>,
        },
        {
          path:'/dashboard/viewAllMaterials',
          element:<ViewAllMaterials></ViewAllMaterials>,
        },
        // admin
        {
          path:'/dashboard/viewAllUsers',
          element:<ViewAllUsers></ViewAllUsers>,
        },
        {
          path:'/dashboard/adminViewAllStudySession',
          element:<AdminViewAllStudySession></AdminViewAllStudySession>,
        },
        {
          path:'/dashboard/adminViewAllMaterials',
          element:<AdminViewAllMaterials></AdminViewAllMaterials>,
        },
      ]
    },
  ]);

export default router;

