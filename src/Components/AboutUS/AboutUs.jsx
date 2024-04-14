import about1 from '../../assets/about1.jpg'

const AboutUs = () => {
    return (
        <div className='flex max-w-7xl mx-auto'>
            <div className='grid grid-cols-2'>
                <figure className='row-span-2'>
                    <img src={about1} alt="" />
                    <img src={about1} alt="" />
                </figure>
                <figure className='row-span-2'>
                    <img src={about1} alt="" />
                    <img src={about1} alt="" />
                </figure>
            </div>
            <div>
                <h4 className='font-medium text-2xl  text-skyBlue font-galada'>Our</h4>

            </div>

        </div>
    );
};

export default AboutUs;