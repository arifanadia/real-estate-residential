import { BsArrowRightShort } from "react-icons/bs";
import aboutUs from "../../assets/aboutus.jpg"
import aboutUs2 from "../../assets/aboutus2.jpg"
import {  NavLink } from "react-router-dom";

const AboutUs = () => {
    return (
        <div className='md:grid grid-cols-2 max-w-7xl mx-4 md:mx-auto gap-6 mt-10 md:mt-28'>
            <div className='relative'>
                <img className="rounded-xl " src={aboutUs2} alt="" />
                <img data-aos="fade-up-right" data-aos-duration='1000' data-aos-delay="50"
                    className="absolute rounded-xl w-64 shadow-xl top-44 -left-10" src={aboutUs} alt="" />

            </div>
            <div className="mt-32 md:mt-0">
                <h4 className='font-medium text-4xl  text-skyBlue font-galada'>About Us</h4>
                <hr className="border-dashed w-44 my-4 border border-skyBlue" />
                <p className=" font-medium text-gray-700">Welcome to cozyHome, your premier destination for all your real estate needs. With a passion for excellence and a commitment to integrity, we strive to provide unparalleled service to our clients, helping them achieve their property goals with confidence and peace of mind.
                    At cozyHome, we understand that buying or selling a property can be a significant milestone in your life. That is why we are dedicated to guiding you through every step of the process, from initial consultation to closing, ensuring a seamless and rewarding experience.</p>
                <div className="flex gap-8">
                    <ul>
                        <li className="flex items-center gap-2 mt-2" >
                            <BsArrowRightShort
                                className="text-skyBlue text-xl">
                            </BsArrowRightShort>
                            Find Your Dream Home</li>
                        <li className="flex items-center gap-2 mt-2">
                            <BsArrowRightShort
                                className="text-skyBlue text-xl">
                            </BsArrowRightShort>
                            Buy, Rent, and Sell Homes</li>
                        <li className="flex items-center gap-2 mt-2">
                            <BsArrowRightShort
                                className="text-skyBlue text-xl">
                            </BsArrowRightShort>Free, Fair & Direct Listing</li>
                    </ul>
                    <ul>
                        <li className="flex items-center gap-2 mt-2" >
                            <BsArrowRightShort
                                className="text-skyBlue text-xl">
                            </BsArrowRightShort>
                            Find Your Dream Home</li>
                        <li className="flex items-center gap-2 mt-2">
                            <BsArrowRightShort
                                className="text-skyBlue text-xl">
                            </BsArrowRightShort>
                            Buy, Rent, and Sell Homes</li>
                        <li className="flex items-center gap-2 mt-2">
                            <BsArrowRightShort
                                className="text-skyBlue text-xl">
                            </BsArrowRightShort>Free, Fair & Direct Listing</li>
                    </ul>
                </div>
                <NavLink to={`/about`}><button className="bg-skyBlue text-white px-6 py-3 mt-8 rounded-lg">Read More</button></NavLink>

            </div>

        </div>
    );
};

export default AboutUs;