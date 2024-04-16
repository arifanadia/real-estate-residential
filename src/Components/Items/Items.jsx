
import PropTypes from 'prop-types';
import { TfiLocationPin } from "react-icons/tfi";
import { Link } from 'react-router-dom';

const Items = ({ estate }) => {
    const { id,estate_image, status, estate_title, description, price, area, location } = estate
    return (
        <div >
            <div className="flex bg-slate-50 shadow-xl rounded-xl gap-4">

                <div className='relative'>
                    <img className='rounded-xl w-[350px] h-[230px]  ' src={estate_image} alt="Album" />
                    <span className='bg-navyBlue px-3 p-1 top-1 rounded-2xl absolute'>
                        <p className='text-white'>{status}</p></span>
                </div>

                <div className="p-6">
                    <h2 className="text-xl font-bold">{estate_title}</h2>
                    <p className='font-medium mt-1'>{description}</p>
                    <p className='mt-3 flex items-center gap-2'><TfiLocationPin className='text-skyBlue'></TfiLocationPin>{location}</p>
                    <div className='my-2 flex gap-4'>
                        <p className='border-2 border-dashed border-skyBlue p-2 '>
                            <span className='font-bold'>Area</span> : {area}</p>
                        <p className='border-2 border-dashed border-skyBlue p-2 '>
                            <span className='font-bold'>Price</span>: {price}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <Link to={`/categoriesItem/${id}`}>
                            <button className="btn bg-navyBlue text-white">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

Items.propTypes = {
    estate: PropTypes.object.isRequired,


};
export default Items;