import { createBrowserRouter } from "react-router-dom";
import Root from "../layOut/Root/Root";
import Home from "../Pages/Home/Home";
import Error from "../Error/Error";

import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import CategoriesItem from "../Pages/CategoriesItem/CategoriesItem";
import ItemDetails from "../Pages/ItemDetails/ItemDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement:<Error></Error>,
        children: [

            {
                path:"/",
                element: <Home></Home>
            },
            {
                path:"/login",
                element: <Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            },
            {
                path:"/categories/:id",
                element:<CategoriesItem></CategoriesItem>
            },
            {
                path:"/categoriesItem/:id",
                element:<ItemDetails></ItemDetails>
            },
         

        ]
    },
]);

export default router