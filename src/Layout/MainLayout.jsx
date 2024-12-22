import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

const MainLayout = () => {
    return (
        <div>
            <Nav></Nav>
            <div className="min-h-[calc(100vh-300px)]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;