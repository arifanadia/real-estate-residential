import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UseCategoriesData from "../../Hooks/UseCategoriesData";
import DetailSwiper from "../../Components/DetailSwiper/DetailSwiper";
import { TfiLocationPin } from "react-icons/tfi";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { Helmet } from "react-helmet-async";
const ItemDetails = () => {

    const [estateDetails, setEstateDetails] = useState({})

    const { id } = useParams()
    const { categoriesData } = UseCategoriesData()
    useEffect(() => {
        if (categoriesData) {
            for (const category of categoriesData) {
                const estate = category.estates.find(estate => estate.id == id);
                if (estate) {

                    setEstateDetails(estate)
                }
            }
        }
    }, [categoriesData, id])

    const
        { estate_title, location, status, price, view_details, area, build, estate_type, facilities }
            = estateDetails || {}
    return (
        <div>
              <Helmet>
                <title>CozyHome | Property Featured</title>
            </Helmet>
            <DetailSwiper></DetailSwiper>
            <div className="max-w-7xl mx-auto">
                <h1 className="mt-10 text-4xl font-semibold text-navyBlue">{estate_title}</h1>
                <p className='mt-3 text-navyBlue flex items-center gap-2'><TfiLocationPin className='text-skyBlue'></TfiLocationPin>{location}</p>
                <div className="grid grid-cols-3 my-8 gap-8 ">
                    <div className="bg-slate-50 rounded-lg">

                        <h1>listed properties</h1>

                    </div>
                    <div className="col-span-2">
                        <div className="bg-slate-50 rounded-lg p-6 shadow-xl">
                            <h4 className="text-navyBlue text-xl font-semibold">Property Description</h4>
                            <hr className="border border-skyBlue w-52 my-2" />
                            <div className='mt-8 mb-6 flex gap-4'>
                                <p className='border-2 border-dashed border-skyBlue bg-white px-2 py-1 rounded-xl '>
                                    For {status}</p>
                                <p className='border-2 border-dashed border-skyBlue  bg-white px-2 py-1 rounded-xl '>
                                    {price}</p>
                            </div>
                            <p>{view_details}</p>
                            <div className="flex items-center gap-6 mt-6 mb-4">
                                <div
                                    className="text-center border-2 border-dashed border-skyBlue bg-white w-[220px] h-[80px] px-6 py-3 rounded-xl">
                                    <p className="font-semibold text-xl">Type</p>
                                    <p>{estate_type}</p>
                                </div>
                                <div
                                    className="text-center border-2 border-dashed border-skyBlue bg-white  px-6 py-3 rounded-xl  w-[220px] h-[80px]">
                                    <p className="font-semibold text-xl">Build</p>
                                    <p>{build}</p>
                                </div>
                                <div
                                    className="text-center border-2 border-dashed border-skyBlue bg-white px-6 py-3 rounded-xl  w-[220px] h-[80px]">
                                    <p className="font-semibold text-xl">Area</p>
                                    <p>{area}</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-slate-50 rounded-lg p-6 mt-6 shadow-xl">
                            <h4 className="text-navyBlue text-xl font-semibold"> Facilities</h4>
                            <hr className="border border-skyBlue w-52 my-2" />
                            {
                                facilities ? (
                                    <span className="flex text-white gap-8 mt-4">
                                        {
                                            facilities.map((facility, index) =>
                                                <p key={index}
                                                    className="flex gap-2 bg-navyBlue rounded-xl text-lg px-10 py-4 items-center">
                                                    <IoCheckmarkCircleSharp className="text-skyBlue"></IoCheckmarkCircleSharp>
                                                    {facility}
                                                </p>)
                                        }
                                    </span>
                                ) : null
                            }


                        </div>
                    </div>

                </div>

            </div>


        </div>
    );
};

export default ItemDetails;