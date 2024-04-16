
import PropTypes from 'prop-types';
import { BsArrowRightCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Categories = ({ categories }) => {
    const { id, category_name,image } = categories
    return (
        <div className='pt-40 bg-no-repeat bg-cover bg-center rounded-lg' style={{backgroundImage: `linear-gradient(#211f2fCC, #918ca926 ), url(${image})`}}>
                 <div className='bg-white bg-opacity-40 p-4'>
            <h2 className="text-2xl text-navyBlue font-bold">{category_name}</h2>
            <Link to={`/categories/${id}`}>
                <button
                    className="text-navyBlue rounded-lg font-medium flex items-center gap-2 ">
                    View Properties <BsArrowRightCircle/>
                </button>
            </Link>
        </div>

        </div>
    );
};

Categories.propTypes = {
    categories: PropTypes.object.isRequired

};

export default Categories;