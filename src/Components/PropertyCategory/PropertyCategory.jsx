import PropTypes from 'prop-types';
import UseCategoriesData from '../../Hooks/UseCategoriesData';
import Categories from "../../Components/Categories/Categories";


const PropertyCategory = () => {

    const { categoriesData } = UseCategoriesData()
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
                    categoriesData.map(categories =>
                        <Categories
                            key={categories.id}
                            categories={categories}>
                        </Categories>
                    )



                }






            </div>
        </div>




    );
};

PropertyCategory.propTypes = {
    category: PropTypes.object.isRequired

};



export default PropertyCategory;