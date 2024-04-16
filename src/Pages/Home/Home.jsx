

import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner/Banner";
import PropertyCategory from "../../Components/PropertyCategory/PropertyCategory";





const Home = () => {

    return (
        <div>
            <Helmet>
                <title>CozyHome | Home</title>
            </Helmet>
            <Banner></Banner>
            <PropertyCategory></PropertyCategory>


        </div>












    );
};

export default Home;