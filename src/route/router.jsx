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
import PrivateRoute from './PrivateRoute';
import SessionCardDetails from './../pages/SessionCardDetails';
import UpdateNote from './../pages/student/UpdateNote';
import PaymentPage from "../pages/PaymentPage";
import ViewBookedSessionDetails from "../pages/student/ViewBookedSessionDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <Error></Error>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/paymentPage",
          element: <PrivateRoute><PaymentPage></PaymentPage></PrivateRoute>,
          // loader: ({params})=>fetch(`http://localhost:5000/session/${params.id}`)
        },
        {
          path: "/sessionCardDetails/:id",
          element: <PrivateRoute><SessionCardDetails></SessionCardDetails></PrivateRoute>,
          loader: ({params})=>fetch(`http://localhost:5000/session/${params.id}`)
        },
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
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      errorElement: <Error></Error>,
      children: [
        {
          path:'/dashboard/about',
          element:<About></About>,
        },
        {
          path:'/dashboard/updateNotes/:id',
          element:<PrivateRoute><UpdateNote></UpdateNote></PrivateRoute>,
          loader: ({params})=>fetch(`http://localhost:5000/notes/${params.id}`)
        },
        {
          path:'/dashboard/viewBookedSessionDetails/:id',
          element:<PrivateRoute><ViewBookedSessionDetails></ViewBookedSessionDetails></PrivateRoute>,
          loader: ({params})=>fetch(`http://localhost:5000/bookedSession/${params.id}`)
        },
        {
          path:'/dashboard/viewBookedSession',
          element:<PrivateRoute><ViewBookedSession></ViewBookedSession></PrivateRoute>,
        },
        {
          path:'/dashboard/createNote',
          element:<PrivateRoute><CreateNote></CreateNote></PrivateRoute>,
        },
        {
          path:'/dashboard/managePersonalNotes',
          element:<PrivateRoute><ManagePersonalNotes></ManagePersonalNotes></PrivateRoute>,
        },
        {
          path:'/dashboard/viewAllStudyMaterials',
          element:<PrivateRoute><ViewAllStudyMaterials></ViewAllStudyMaterials></PrivateRoute>,
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

