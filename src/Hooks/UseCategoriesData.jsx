import { useEffect, useState } from "react";


const UseCategoriesData = () => {

    const [categoriesData, setCategoriesData] = useState([]);

    useEffect(() => {
        const fetchCategoriesData = async () => {
            const res = await fetch("/category.json");
            const data = await res.json();
            setCategoriesData(data)
        };
        fetchCategoriesData()

    }, [])
    return  {categoriesData}
};

export default UseCategoriesData;