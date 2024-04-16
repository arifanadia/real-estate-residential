import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import { Navigation } from 'swiper/modules';
import detail1 from '../../assets/details1.jpg'
import detail2 from '../../assets/details-2.jpg'
import detail3 from '../../assets/detail-3.jpg'
import detail4 from '../../assets/details-4.jpeg'
import detail5 from '../../assets/details-5.png'

const DetailSwiper = () => {
    return (
        <Swiper
            slidesPerView={3}
            navigation={true}
            modules={[Navigation]}
            loop={true}
            className='mySwiper relative font-openSans text-center '
        >
            <SwiperSlide>
                <div className="h-[350px] bg-no-repeat bg-cover bg-center pt-20" style={{ backgroundImage: `url(${detail1})` }} >
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="h-[350px] bg-no-repeat bg-cover bg-center pt-20" style={{ backgroundImage: `url(${detail2})` }} >
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="h-[350px] bg-no-repeat bg-cover bg-center pt-20" style={{ backgroundImage: `url(${detail3})` }} >
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="h-[350px] bg-no-repeat bg-cover bg-center pt-20" style={{ backgroundImage: `url(${detail4})` }} >
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="h-[350px] bg-no-repeat bg-cover bg-center pt-20" style={{ backgroundImage: `url(${detail5})` }} >
                </div>
            </SwiperSlide>

        </Swiper>
    );
};

export default DetailSwiper;