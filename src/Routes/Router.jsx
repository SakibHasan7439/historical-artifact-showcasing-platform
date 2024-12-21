import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <h1>404 error</h1>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }
        ]
    }
])

export default Router;