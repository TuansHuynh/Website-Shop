import { createBrowserRouter, Navigate } from "react-router-dom";
import NotFound       from "../component/layout/NotFound";
import DefaultLayout  from "../view/DefaulftLayout";
import Home           from "../page/home/Home";
import GuestLayout    from "../view/GuestLayout";
import SignIn         from "../component/layout/SignIn";
import SignUp         from "../component/layout/SignUp";
import Phone          from "../page/product/phone/Phone";
import Laptop         from "../page/product/laptop/Laptop";
import Cart           from "../page/cart/Cart";
import UserProfile    from "../page/user/UserProfile";

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout/>,
        children: [
            {
                path: '/',
                element: <Navigate to='/home'/>
            },
            {
                path: '/home',
                element: <Home/>
            },
            {
                path: 'phone',
                element: <Phone/>
            },
            {
                path: '/laptop',
                element: <Laptop/>
            },
            {
                path: '/cart',
                element: <Cart/>
            },
            {
                path: '/user',
                element: <UserProfile/>
            },
        ]
    },
    {
        path: '/',
        element: <GuestLayout/>,
        children:[
            {
                path: '/login',
                element: <SignIn/>
            },
            {
                path: '/signup',
                element: <SignUp/>
            }
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
])

export default router;