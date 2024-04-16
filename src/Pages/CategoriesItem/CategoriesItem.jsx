import { useParams } from "react-router-dom";
import UseCategoriesData from "../../Hooks/UseCategoriesData";
import { useEffect, useState } from "react";
import category from "../../assets/category.jpg"
import Items from "../../Components/Items/Items";
import { Helmet } from "react-helmet-async";


const CategoriesItem = () => {
    const [items, setItems] = useState({})

    const { id } = useParams()
    const { categoriesData } = UseCategoriesData()
    useEffect(() => {
        if (categoriesData) {
            const categoryItems = categoriesData.find(item => item.id == id);
            setItems(categoryItems)
        }
    }, [categoriesData, id])


    console.log(items);
    const { category_name, estates } = items || {}
    return (
        <div >
              <Helmet>
                <title>CozyHome | Properties </title>
            </Helmet>
            <div className="p-24 bg-no-repeat bg-cover bg-center"
                style={{ backgroundImage: `linear-gradient(#2193b0CC, #4286f459 ), url(${category})` }}
            > <h1 className="text-center text-5xl text-navyBlue font-bold">{category_name}</h1>
            </div>
            <div className="grid grid-cols-3 max-w-7xl mx-auto gap-8 mt-14">

                <div className="col-span-2 space-y-5">
                    {
                        estates?.map(estate =>
                            <Items key={estate.id} estate={estate}></Items>)
                    }
                </div>

                <div className="bg-slate-50  h-[600px] rounded-lg">
                    <h1>hello</h1>

                </div>

            </div>


        </div>


    );
};

export default CategoriesItem;