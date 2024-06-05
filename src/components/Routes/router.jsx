import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import BookDetails from "../HomePage/BooksItems/BookDetails";
import Home from "../HomePage/Home";
import DashboardLayout from "../Layout/DashboardLayout";
import MainLayout from "../Layout/MainLayout";
import About from "../Pages/About";
import AddProducts from "../Pages/Dashboard/AddProducts";
import AllProducts from "../Pages/Dashboard/AllProducts";
import Dashboard from "../Pages/Dashboard/Dashboard";
import UpdateProducts from "../Pages/Dashboard/UpdateProducts";
import Feedback from "../Pages/Feedback";
import Login from "../Pages/Login";
import Services from "../Pages/Services";
import SignUp from "../Pages/SignUp";
import PrivateRoute from "./PrivateRoute";

export const router=createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/',
                element:<Home/>,
                loader:()=>fetch('https://book-berry-server.vercel.app/books')
            },
            {
                path:'/home',
                element:<Home/>,
                loader:()=>fetch('https://book-berry-server.vercel.app/books')
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
                path:'/books/:id',
                element:<BookDetails/>,
                loader:({params})=>fetch(`https://book-berry-server.vercel.app/books/${params.id}`)
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
    },
    {
        path:'/dashboard',
        element:<PrivateRoute><DashboardLayout/></PrivateRoute>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/dashboard/user',
                element:<PrivateRoute><Dashboard/></PrivateRoute>,
                
            },
            {
                path:'/dashboard/add-products',
                element:<PrivateRoute><AddProducts/></PrivateRoute>
            },
            {
                path:'/dashboard/update/:id',
                element:<PrivateRoute><UpdateProducts/></PrivateRoute>,
                loader:({params})=>fetch(`https://book-berry-server.vercel.app/books/${params.id}`)
            },
            {
                path:'/dashboard/all-products',
                element:<PrivateRoute><AllProducts/></PrivateRoute>
            }
        ]
    }
])