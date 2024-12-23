import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Signin from "../Pages/Authentication/Signin";
import Register from "../Pages/Authentication/Register";
import AllArtifacts from "../Pages/AllArtifacts/AllArtifacts";
import ErrorPage from "../Pages/errorPage/ErrorPage";
import AddArtifacts from "../Pages/AddArtifacts/AddArtifacts";
import PrivateRoute from "./PrivateRoute";
import Artifact_details from "../Pages/Artifact_details/Artifact_details";
import MyArtifacts from "../Pages/MyArtifacts/MyArtifacts";
import UpdateArtifact from "../Pages/UpdateArtifact/UpdateArtifact";
import LikedArtifacts from "../Pages/LikedArtifacts/LikedArtifacts";

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
                path: "/artifact-details/:id",
                element: <PrivateRoute><Artifact_details></Artifact_details></PrivateRoute>
            },

            {
                path: "/my-artifacts",
                element: <PrivateRoute><MyArtifacts></MyArtifacts></PrivateRoute>
            },

            {
                path: "/update-artifact/:id",
                element: <PrivateRoute><UpdateArtifact></UpdateArtifact></PrivateRoute>
            },

            {
                path: "/liked-artifacts",
                element: <PrivateRoute><LikedArtifacts></LikedArtifacts></PrivateRoute>
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