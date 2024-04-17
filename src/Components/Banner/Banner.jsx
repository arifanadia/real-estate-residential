import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import { Navigation, Autoplay } from 'swiper/modules';



import bg1 from '../../assets/singlefamilybanner.jpg'
import bg2 from '../../assets/luxury-vacation-rentals.jpg'
import bg3 from '../../assets/student-housing-skywall-photography-img~7c610c5c0b0f1e4d_4-2731-1-bb0913b.jpg'
import bg4 from '../../assets/townhouse.jpeg'
import bg5 from '../../assets/apartment.webp'
import { Link } from 'react-router-dom';





const Banner = () => {
    return (
        <div className=' mb-20'>
            <Swiper
                navigation={true}
                autoplay={{ delay: 2000 }}
                modules={[Navigation, Autoplay]}
                loop={true}
                className='mySwiper relative font-openSans text-center '
            >
                <SwiperSlide>
                    <div className="h-[600px] bg-no-repeat bg-cover bg-center  pt-20   " style={{ backgroundImage: `linear-gradient(#211f2fCC, #918ca926 ), url(${bg1})` }} >
                        <h1 className='text-4xl lg:text-6xl text-white -tracking-tight leading-snug font-semibold '>Find Your <br /> <span className='font-bold text-skyBlue'>Dream</span> Home !</h1>
                        <div className='flex justify-center my-6'>

                            <h4 className=' border border-dashed px-10 py-5 text-white text-xl font-medium'>6 Bedroom</h4>
                            <h4 className=' border border-dashed px-10 py-5 text-white text-xl font-medium'>4 Bathroom</h4>
                            <h4 className=' border border-dashed px-10 py-5 text-white text-xl font-medium'>1 Kitchen</h4>

                        </div>
                        <Link to={`/register`}><button className='mt-10 px-8 py-3 bg-skyBlue rounded-lg text-white text-xl'>Register Now</button></Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[600px] bg-no-repeat bg-cover bg-center py-20 " style={{ backgroundImage: `linear-gradient(#211f2fCC, #918ca926 ), url(${bg2})` }} >
                        <h1 className='text-4xl lg:text-6xl text-white -tracking-tight leading-snug font-semibold '>Find Your <br /> <span className='font-bold text-skyBlue'>Dream</span> Home !</h1>
                        <div className='flex justify-center my-6'>

                            <h4 className=' border border-dashed px-10 py-5 text-white text-xl font-medium'>6 Bedroom</h4>
                            <h4 className=' border border-dashed px-10 py-5 text-white text-xl font-medium'>4 Bathroom</h4>
                            <h4 className=' border border-dashed px-10 py-5 text-white text-xl font-medium'>1 Kitchen</h4>

                        </div>
                        <Link to={`/register`}><button className='mt-10 px-8 py-3 bg-skyBlue rounded-lg text-white text-xl'>Register Now</button></Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[600px] bg-no-repeat bg-cover bg-center py-20 " style={{ backgroundImage: `linear-gradient(#211f2fCC, #918ca926 ), url(${bg3})` }} >
                        <h1 className='text-4xl lg:text-6xl text-white -tracking-tight leading-snug font-semibold '>Find Your <br /> <span className='font-bold text-skyBlue'>Dream</span> Home !</h1>
                        <div className='flex justify-center my-6'>

                            <h4 className=' border border-dashed px-10 py-5 text-white text-xl font-medium'>6 Bedroom</h4>
                            <h4 className=' border border-dashed px-10 py-5 text-white text-xl font-medium'>4 Bathroom</h4>
                            <h4 className=' border border-dashed px-10 py-5 text-white text-xl font-medium'>1 Kitchen</h4>

                        </div>
                        <Link to={`/register`}><button className='mt-10 px-8 py-3 bg-skyBlue rounded-lg text-white text-xl'>Register Now</button></Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[600px] bg-no-repeat bg-cover bg-center py-20 " style={{ backgroundImage: `linear-gradient(#211f2fCC, #918ca926 ), url(${bg4})` }} >
                        <h1 className='text-4xl lg:text-6xl text-white -tracking-tight leading-snug font-semibold '>Find Your <br /> <span className='font-bold text-skyBlue'>Dream</span> Home !</h1>
                        <div className='flex justify-center my-6'>

                            <h4 className=' border border-dashed px-10 py-5 text-white text-xl font-medium'>6 Bedroom</h4>
                            <h4 className=' border border-dashed px-10 py-5 text-white text-xl font-medium'>4 Bathroom</h4>
                            <h4 className=' border border-dashed px-10 py-5 text-white text-xl font-medium'>1 Kitchen</h4>

                        </div>
                        <Link to={`/register`}><button className='mt-10 px-8 py-3 bg-skyBlue rounded-lg text-white text-xl'>Register Now</button></Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[600px] bg-no-repeat bg-cover bg-center py-20 " style={{ backgroundImage: `linear-gradient(#211f2fCC, #918ca926 ), url(${bg5})` }} >
                        <h1 className='text-4xl lg:text-6xl text-white -tracking-tight leading-snug font-semibold '>Find Your <br /> <span className='font-bold text-skyBlue'>Dream</span> Home !</h1>
                        <div className='flex justify-center my-6'>

                            <h4 className=' border border-dashed px-10 py-5 text-white text-xl font-medium'>6 Bedroom</h4>
                            <h4 className=' border border-dashed px-10 py-5 text-white text-xl font-medium'>4 Bathroom</h4>
                            <h4 className=' border border-dashed px-10 py-5 text-white text-xl font-medium'>1 Kitchen</h4>

                        </div>
                        <Link to={`/register`}><button className='mt-10 px-8 py-3 bg-skyBlue rounded-lg text-white text-xl'>Register Now</button></Link>
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className='md:max-w-6xl mx-auto  bg-white md:p-8 p-4 rounded-lg lg:absolute -bottom-5 shadow-xl left-[20%] z-10 '>
                <form className='flex justify-center'  >
                    <input className='lg:w-[330px] border border-skyBlue md:h-16 md:p-4 rounded-l-lg' type="text" placeholder='Search properties by title ' name="" id="" />
                    <select className='lg:w-[210px]  border-skyBlue border-y md:h-16 p-4'>
                        <option>Select your status</option>
                        <option>Rent</option>
                        <option>Sale</option>
                    </select>
                    <select className='lg:w-[210px] border-skyBlue border rounded-r-lg md:rounded-none md:h-16 md:p-4'>
                        <option>Select Type</option>
                        <option>Single-Family House</option>
                        <option>Vacation House</option>
                        <option>Town-House</option>
                        <option>Apartment</option>
                        <option>Student-Living House</option>
                    </select>
                    <button className='hidden md:block lg:block h-16 py-3.5 px-4 text-white bg-skyBlue text-lg rounded-r-lg'>Search</button>
                </form>
              <div className=' md:hidden lg:hidden flex justify-center'>
              <button className='py-2 px-4 mt-6  text-white bg-skyBlue text-lg rounded-lg'>Search</button>
              </div>
            </div>



        </div>
    );
};

export default Banner;