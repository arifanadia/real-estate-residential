

import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner/Banner";
import PropertyCategory from "../../Components/PropertyCategory/PropertyCategory";
import AboutUs from "../../Components/AboutUS/AboutUs";





const Home = () => {

    return (
        <div>
            <Helmet>
                <title>CozyHome | Home</title>
            </Helmet>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <PropertyCategory></PropertyCategory>


        </div>












    );
};

export default Home;