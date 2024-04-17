import footerBg from "../../../assets/footerbg.jpg"
import logo from "../../../assets/cozy-home.png"
import { Link, NavLink } from "react-router-dom";
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoLogoYoutube } from "react-icons/io5";
import { BsArrowRightShort, BsTelephoneForward, BsPhone } from "react-icons/bs";
import { MdLocationCity } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
    return (
        <div className="mt-40">

            <footer className="bg-no-repeat relative bg-cover bg-center flex gap-32 justify-center px-10 py-16"
                style={{ backgroundImage: `linear-gradient(#27187eD6, #003973A8 ),url(${footerBg})` }}>
                <aside>
                    <Link to={`/`}>
                        <div className="flex text-left items-center bg-navyBlue pr-4 bg-opacity-35 rounded-xl w-44">
                            <img className="lg:w-[80px] w-[30px]" src={logo} alt="" />
                            <h2 className="font-galada text-white text-3xl lg:text-5xl">Cozy
                                <span className="text-[#319ff6]">Home</span></h2>

                        </div>
                    </Link>
                    <p className="text-white text-left my-6 ">We can find you the perfect property and help <br /> you locate
                        the home of your dreams.</p>

                    <span className=" text-white flex gap-6 text-2xl" >
                        <IoLogoFacebook></IoLogoFacebook>
                        <IoLogoInstagram></IoLogoInstagram>
                        <IoLogoTwitter></IoLogoTwitter>
                        <IoLogoYoutube></IoLogoYoutube>
                    </span>

                </aside>
                <div className="mt-10 flex gap-28">
                    <nav className="text-white">
                        <h6 className="font-semibold text-xl">General info</h6>
                        <ul>
                            <NavLink to={"/"}><li className="flex items-center gap-2 mt-2" >
                                <BsArrowRightShort
                                    className="text-skyBlue text-xl">
                                </BsArrowRightShort>
                                Home</li></NavLink>
                            <NavLink to={"/listing"}><li className="flex items-center gap-2 mt-2">
                                <BsArrowRightShort
                                    className="text-skyBlue text-xl">
                                </BsArrowRightShort>
                                Listing</li></NavLink>
                            <NavLink to={"/about"}><li className="flex items-center gap-2 mt-2">
                                <BsArrowRightShort
                                    className="text-skyBlue text-xl">
                                </BsArrowRightShort>About</li></NavLink>
                            <NavLink to={"/blog"}><li className="flex items-center gap-2 mt-2">
                                <BsArrowRightShort
                                    className="text-skyBlue text-xl">
                                </BsArrowRightShort>Blog</li></NavLink>
                        </ul>
                    </nav>
                    <nav className="text-white">
                        <h6 className="font-semibold text-xl">Quick Links</h6>
                        <ul>
                            <NavLink to={"/"}><li className="flex items-center gap-2 mt-2" >
                                <BsArrowRightShort
                                    className="text-skyBlue text-xl">
                                </BsArrowRightShort>
                                Home</li></NavLink>
                            <NavLink to={"/listing"}><li className="flex items-center gap-2 mt-2">
                                <BsArrowRightShort
                                    className="text-skyBlue text-xl">
                                </BsArrowRightShort>
                                Listing</li></NavLink>
                            <NavLink to={"/about"}><li className="flex items-center gap-2 mt-2">
                                <BsArrowRightShort
                                    className="text-skyBlue text-xl">
                                </BsArrowRightShort>About</li></NavLink>
                            <NavLink to={"/blog"}><li className="flex items-center gap-2 mt-2">
                                <BsArrowRightShort
                                    className="text-skyBlue text-xl">
                                </BsArrowRightShort>Blog</li></NavLink>
                        </ul>
                    </nav>
                    <nav className="text-white">
                        <h6 className="font-semibold text-xl">Contacts</h6>
                        <ul className="">
                            <NavLink to={"/"}><li className="flex items-center gap-2 mt-2" >
                                <BsTelephoneForward
                                    className="text-white text-xl">
                                </BsTelephoneForward  >
                                +123 456 7890</li></NavLink>
                            <NavLink to={"/listing"}><li className="flex items-center gap-2 mt-2">
                                <BsPhone
                                    className="text-white text-xl">
                                </BsPhone  >
                                +123 456 7890</li></NavLink>
                            <NavLink to={"/about"}><li className="flex items-center gap-2 mt-2">
                                <AiOutlineMail
                                    className="text-white text-xl">
                                </AiOutlineMail>cozyhome@gmail.com</li></NavLink>
                            <NavLink to={"/blog"}><li className="flex items-center gap-2 mt-2">
                                <MdLocationCity
                                    className="text-white text-xl">
                                </MdLocationCity>Sylhet,Bangladesh</li></NavLink>
                        </ul>
                    </nav>
                </div>
                <div className="bg-navyBlue flex rounded-xl absolute px-10 py-10 gap-8 -top-24 "
                 data-aos="fade-in"
                 data-aos-duration='2000'
                 data-aos-delay="500">
                    <div>
                        <h2
                            className="font-bold text-4xl text-white">
                            Subscribe Our Newsletter</h2>
                        <p className="text-xl text-white">
                            Join our email subscription now to get updates and notifications.</p>
                    </div>
                    <div className="relative ">
                        <input type="email" name="" placeholder="Your Email Address" id=""
                            className="px-6 w-[350px] py-3 rounded-lg " />
                        <button className="text-white bg-skyBlue px-6 py-2 rounded-lg absolute right-1 top-1">Sign Up</button>
                    </div>
                </div>

            </footer>
            <div className="bg-navyBlue py-4 ">
                <p className="font-medium text-center text-white">
                    © 2024 CozyHome. All Rights Reserved By Arifa Nadia
                </p>

            </div>
        </div>
    );
};

export default Footer;