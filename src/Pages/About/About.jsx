import { Helmet } from "react-helmet-async"
import aboutPage from "../../assets/aboutpage.jpeg"
import aboutPage2 from "../../assets/aboutpage2.webp"
import aboutPage3 from "../../assets/footerbg.jpg"
import team1 from "../../assets/team1.jpeg"
import team2 from "../../assets/team2.jpg"
import team3 from "../../assets/team3.jpg"


const About = () => {
    return (
        <div className="max-w-7xl lg:mx-auto mx-4 mb-80">
            <Helmet>
                <title>CozyHome | About</title>
            </Helmet>
            <div className="p-32 bg-no-repeat bg-cover bg-center"
                style={{ backgroundImage: `linear-gradient(#211f2fCC, #918ca926 ), url(${aboutPage})` }}
            > <h1 className="text-center text-5xl text-white font-bold font-galada">About Us</h1>
            </div>

            <div className="lg:flex items-center justify-between mt-10 gap-8">
                <div>
                    <h1 className="text-2xl font-semibold text-navyBlue">Our Story</h1>
                    <hr className="w-28 border-navyBlue border my-2 border-dashed" />
                    <p className="mt-8">At Cozy Homes, our story begins with a passion for providing exceptional real estate services that truly make a difference in peoples lives. Founded in [year], our journey began with a vision to redefine the real estate experience by prioritizing integrity, transparency, and personalized service. Since our inception, we have remained committed to these values, earning the trust and loyalty of our clients along the way.  Driven by a deep understanding of the importance of home, we strive to create meaningful connections between people and properties. Our team of experienced professionals brings a wealth of knowledge and expertise to every transaction, ensuring that each client receives tailored guidance and support from start to finish.
                        <br /> <br />
                        What sets us apart is our unwavering dedication to client satisfaction. We believe that every client deserves to feel valued and empowered throughout their real estate journey, whether they are buying, selling, or renting a property. By prioritizing open communication, honesty, and responsiveness, we strive to exceed our clients expectations at every turn <br /> <br />
                        As we look to the future, our commitment to innovation and excellence remains steadfast. We are excited to continue growing, evolving, and finding new ways to enhance the real estate experience for our clients. Whether you are searching for your dream home or looking to sell your property, we invite you to join us on this journey and experience the Cozy Homes difference for yourself.</p>
                </div>
                <div className="grid grid-rows-2 ">
                    <div className="px-72 rounded-xl bg-no-repeat bg-cover bg-center "
                        style={{ backgroundImage: `linear-gradient(#211f2fCC, #918ca926 ), url(${aboutPage3})` }}>

                    </div>
                    <div className="p-32 rounded-xl mt-8 bg-no-repeat bg-cover bg-center "
                        style={{ backgroundImage: `linear-gradient(#211f2fCC, #918ca926 ), url(${aboutPage2})` }}>

                    </div>

                </div>
            </div>
            <div className="mt-24">
                <h2 className="text-4xl text-center mt-10 font-semibold text-navyBlue">Meet Our Team</h2>
                <div className="flex justify-center items-center gap-2 my-6">
                    <hr className="border border-dashed border-navyBlue w-60" />
                    <div className="border-4 border-skyBlue w-6 h-6 rotate-45">
                    </div>
                    <hr className="border border-dashed border-navyBlue w-60" />
                </div>
                <div className="lg:grid lg:grid-cols-3 gap-6 my-10 mx-auto ">
                     <div className="h-[450px] mt-28 md:mt-36 ">
                        <img className="w-[450px] h-[450px] rounded-t-xl mx-auto " src={team1} alt="" />
                        <div className='bg-slate-300 p-4 md:w-[450px] mx-auto '
                            data-aos="fade-right"
                            data-aos-duration="2500">
                            <h2 className="text-2xl text-center text-navyBlue font-bold">Jhon Doe</h2>
                            <p className="text-center">Agent</p>
                        </div>
                    </div>
                    <div className="h-[450px] mt-28 md:mt-36 ">
                        <img className="w-[450px] h-[450px] rounded-t-xl mx-auto " src={team2} alt="" />
                        <div className='bg-slate-300 p-4 md:w-[450px] mx-auto '
                            data-aos="fade-right"
                            data-aos-duration="2500">
                            <h2 className="text-2xl text-center text-navyBlue font-bold">Jhon Doe</h2>
                            <p className="text-center">Agent</p>
                        </div>
                    </div>
                    <div className="h-[450px] mt-28 md:mt-36 ">
                        <img className="w-[450px] h-[450px] rounded-t-xl mx-auto " src={team3} alt="" />
                        <div className='bg-slate-300 p-4 md:w-[450px]  mx-auto  '
                            data-aos="fade-right"
                            data-aos-duration="2500">
                            <h2 className="text-2xl text-center text-navyBlue font-bold">Jhon Doe</h2>
                            <p className="text-center">Agent</p>
                        </div>
                    </div>

                </div>
            </div>



        </div>
    );
};

export default About;