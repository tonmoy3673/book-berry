import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";

const MainLayout = () => {
    return (
        <div>
            <div className="px-[5%]">
                <Header/>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;