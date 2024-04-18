import { createBrowserRouter } from "react-router-dom";
import Root from "../layOut/Root/Root";
import Home from "../Pages/Home/Home";
import Error from "../Error/Error";

import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import CategoriesItem from "../Pages/CategoriesItem/CategoriesItem";
import ItemDetails from "../Pages/ItemDetails/ItemDetails";
import PrivateRoutes from "./PrivateRoutes";
import About from "../Pages/About/About";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import FeaturedProperties from "../Pages/FeaturedProperties/FeaturedProperties";
import Blog from "../Pages/Blog/Blog";

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
                path:"/update-profile",
                element:<PrivateRoutes><UpdateProfile></UpdateProfile></PrivateRoutes>
            },
            {
                path:"/categories/:id",
                element:<PrivateRoutes><CategoriesItem></CategoriesItem></PrivateRoutes>
            },
            {
                path:"/about",
                element:<PrivateRoutes><About></About></PrivateRoutes>
            },
            {
                path:"/categoriesItem/:id",
                element:<ItemDetails></ItemDetails>
            },
            {
                path:"/listing",
                element:<FeaturedProperties></FeaturedProperties>
            },
            {
                path:"/blog",
                element:<Blog></Blog>
            },
         

        ]
    },
]);

export default router