import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Signin from "../Pages/Authentication/Signin";
import Register from "../Pages/Authentication/Register";
import AllArtifacts from "../Pages/AllArtifacts/AllArtifacts";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <h1>404 error</h1>,
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