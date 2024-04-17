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
                element:<PrivateRoutes><CategoriesItem></CategoriesItem></PrivateRoutes>
            },
            {
                path:"/about",
                element:<About></About>
            },
            {
                path:"/categoriesItem/:id",
                element:<ItemDetails></ItemDetails>
            },
         

        ]
    },
]);

export default router