import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Error from "../pages/Error";
import Home from "../pages/Home";
import About from './../pages/About';
import AboutUs from './../pages/AboutUs';
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
import UpdateMaterials from "../pages/tutor/UpdateMaterials";
import AdminRoute from "./AdminRoute";
import AllSession from "../pages/AllSession";
import UpdateSession from './../pages/admin/UpdateSession';


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
          path: "/allSession",
          element: <AllSession></AllSession>,
        },
        {
          path: "/aboutUs",
          element: <AboutUs></AboutUs>,
        },
        {
          path: "/paymentPage/:id",
          element: <PrivateRoute><PaymentPage></PaymentPage></PrivateRoute>,
          loader: ({params})=>fetch(`https://study-alliance-server-virid.vercel.app/session/${params.id}`)
        },
        {
          path: "/sessionCardDetails/:id",
          element: <PrivateRoute><SessionCardDetails></SessionCardDetails></PrivateRoute>,
          loader: ({params})=>fetch(`https://study-alliance-server-virid.vercel.app/session/${params.id}`)
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
          path:'/dashboard',
          element:<About></About>,
        },
        {
          path:'/dashboard/updateNotes/:id',
          element:<PrivateRoute><UpdateNote></UpdateNote></PrivateRoute>,
          loader: ({params})=>fetch(`https://study-alliance-server-virid.vercel.app/notes/${params.id}`)
        },
        {
          path:'/dashboard/viewBookedSessionDetails/:id',
          element:<PrivateRoute><ViewBookedSessionDetails></ViewBookedSessionDetails></PrivateRoute>,
          loader: ({params})=>fetch(`https://study-alliance-server-virid.vercel.app/bookedSession/${params.id}`)
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
          element:<PrivateRoute><CreateStudySession></CreateStudySession></PrivateRoute>,
        },
        {
          path:'/dashboard/viewAllStudySessions',
          element:<PrivateRoute><ViewAllStudySessions></ViewAllStudySessions></PrivateRoute>,
        },
        {
          path:'/dashboard/uploadMaterials/:id',
          element:<PrivateRoute><UploadMaterials></UploadMaterials></PrivateRoute>,
          loader: ({params})=>fetch(`https://study-alliance-server-virid.vercel.app/session/${params.id}`)
        },
        {
          path:'/dashboard/updateMaterials/:id',
          element:<PrivateRoute><UpdateMaterials></UpdateMaterials></PrivateRoute>,
          loader: ({params})=>fetch(`https://study-alliance-server-virid.vercel.app/materials/${params.id}`)
        },
        {
          path:'/dashboard/viewAllMaterials',
          element:<PrivateRoute><ViewAllMaterials></ViewAllMaterials></PrivateRoute>,
        },
        // admin
        {
          path:'/dashboard/viewAllUsers',
          element:<AdminRoute><ViewAllUsers></ViewAllUsers></AdminRoute>,
        },
        {
          path:'/dashboard/updateSession/:id',
          element:<AdminRoute><UpdateSession></UpdateSession></AdminRoute>,
          loader: ({params})=>fetch(`https://study-alliance-server-virid.vercel.app/session/${params.id}`)
        },
        {
          path:'/dashboard/adminViewAllStudySession',
          element:<AdminRoute><AdminViewAllStudySession></AdminViewAllStudySession></AdminRoute>,
        },
        {
          path:'/dashboard/adminViewAllMaterials',
          element:<AdminRoute><AdminViewAllMaterials></AdminViewAllMaterials></AdminRoute>,
        },
      ]
    },
  ]);

export default router;

