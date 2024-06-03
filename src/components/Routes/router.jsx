import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../HomePage/Home";
import MainLayout from "../Layout/MainLayout";
import About from "../Pages/About";
import Feedback from "../Pages/Feedback";
import Login from "../Pages/Login";
import Services from "../Pages/Services";
import SignUp from "../Pages/SignUp";

export const router=createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/',
                element:<Home/>,
                loader:()=>fetch('http://localhost:3000/books')
            },
            {
                path:'/home',
                element:<Home/>,
                loader:()=>fetch('http://localhost:3000/books')
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/services',
                element:<Services/>
            },
            {
                path:'/feedback',
                element:<Feedback/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/signUp',
                element:<SignUp/>
            },
        ]
    }
])