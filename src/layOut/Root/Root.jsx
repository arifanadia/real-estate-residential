import Footer from "../../Shared/Header/Footer/Footer";
import Header from "../../Shared/Header/Header";
import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div className="font-openSans">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>

            
        </div>
    );
};

export default Root;