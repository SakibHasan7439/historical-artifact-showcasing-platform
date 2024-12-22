import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Signin from "../Pages/Authentication/Signin";
import Register from "../Pages/Authentication/Register";
import AllArtifacts from "../Pages/AllArtifacts/AllArtifacts";
import ErrorPage from "../Pages/errorPage/ErrorPage";
import AddArtifacts from "../Pages/AddArtifacts/AddArtifacts";
import PrivateRoute from "./PrivateRoute";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },

            {
                path: "/all-artifacts",
                element: <AllArtifacts></AllArtifacts>
            },

            {
                path: "/add-artifacts",
                element: <PrivateRoute><AddArtifacts></AddArtifacts></PrivateRoute>
            },

            {
                path: "/signin",
                element: <Signin></Signin>
            },

            {
                path: "/register",
                element: <Register></Register>
            },
        ]
    }
])

export default Router;