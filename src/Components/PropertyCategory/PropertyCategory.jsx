import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { BsArrowRightCircle } from "react-icons/bs";
import { useEffect } from 'react';

const PropertyCategory = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('category.json')
         .then(res =>res.json())
         .then(data => setCategories(data))


        
    }, [])




    return (
        <div className="my-40">
        <div className="text-center">
            <h2 className="font-openSans font-bold text-4xl ">Properties By Category</h2>
            <div className="flex justify-center items-center gap-2 my-6">
                <hr className="border border-dashed border-navyBlue w-60" />
                <div className="border-4 border-skyBlue w-6 h-6 rotate-45">
                </div>
                <hr className="border border-dashed border-navyBlue w-60" />
            </div>
            <p className="text-gray-700 mx-auto w-3/5">Property Category means each of Land Held for Development, Commercial Land, Lots Under Development, Finished Lots, Model Housing Units, Presold Housing Units and Speculative Housing Units.</p>
        </div>
        <div className="grid grid-cols-3 gap-4 max-w-7xl mx-auto mt-12">

            {
                propertyCategory.map(category => <PropertyCategory key={category.id} category={category}></PropertyCategory>)
            }
        </div>
        <div className="image-full pt-40  rounded-xl bg-cover bg-center bg-no-repeat "
            style={{ backgroundImage: `linear-gradient(#211f2fCC, #918ca926 ), url(${image})` }}>
            <div className='bg-white bg-opacity-40 p-4'>
                <h2 className="text-2xl text-navyBlue font-bold">{title}</h2>
                <Link to={`/categories/${id}`}> <button className="text-navyBlue rounded-lg font-medium flex items-center gap-2 ">View Details <BsArrowRightCircle /></button></Link>
            </div>
          
        

        </div>




    );
};

PropertyCategory.propTypes = {
    category: PropTypes.object.isRequired

};



export default PropertyCategory;