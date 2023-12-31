import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../component/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import ErrorPage from "../component/ErrorPage/ErrorPage";
import Classes from "../pages/Classes/Classes";
import Instructors from "../pages/Instructors/Instructors";
import DashBoard from "../layout/DashBoard";
import MySelected from "../pages/DashBoard/MySelected";
import MyEnrolled from "../pages/DashBoard/MyEnrolled";
import AddAClass from "../pages/DashBoard/AddAClass";
import Payment from "../pages/DashBoard/Payment/Payment";
import ManageClasses from "../pages/DashBoard/ManageClasses";
import ManageUsers from "../pages/DashBoard/ManageUsers";
import MyClasses from "../pages/DashBoard/MyClasses";
import PaymentHistory from "../pages/DashBoard/PaymentHistory";
import InstructorRoute from "./InstructorRoute";
import AdminRoute from "./AdminRoute";
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/signup',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/classes',
                element: <Classes></Classes>
            },
            {
                path: '/instructors',
                element: <Instructors></Instructors>
            }
        ]

    },
    {
        path: 'dashboard',
        element: <DashBoard></DashBoard>,
        children: [
            {
                path: '/dashboard/selected',
                element: <MySelected></MySelected>
            },
            {
                path: '/dashboard/myenrolled',
                element: <MyEnrolled></MyEnrolled>
            },

            {
                path: '/dashboard/paymentHistory',
                element: <PaymentHistory></PaymentHistory>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>
            },
            {
                path: '/dashboard/addClass',
                element: <InstructorRoute> <AddAClass></AddAClass></InstructorRoute>
            },
            {
                path: '/dashboard/myClass',
                element: <InstructorRoute><MyClasses></MyClasses></InstructorRoute>
            },
            {
                path: '/dashboard/manageclasses',
                element: <AdminRoute> <ManageClasses></ManageClasses></AdminRoute>
            },
            {
                path: '/dashboard/manageusers',
                element: <AdminRoute> <ManageUsers></ManageUsers></AdminRoute>
            },
        ]
    }


])
export default router;