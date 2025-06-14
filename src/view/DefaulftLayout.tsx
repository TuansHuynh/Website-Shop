import '../assets/style/App.scss'
import { Outlet } from "react-router-dom";
import Navbar from "../component/layout/Navbar";
import Footer from "../component/layout/Footer";
import MenuBar from "../component/layout/MenuBar";
// import { Navigate } from "react-router-dom";
// import { useStateContext } from "../context/ContextProvider";

export default function DefaultLayout() {
    // const {token} = useStateContext();

    // if(!token){
    //     return <Navigate to='/login' />
    // }

    return (
        <div>
            <Navbar />

            <div>
                <MenuBar />
            </div>

            <div className="menu__bar">
                <Outlet />
            </div>

            <Footer />
        </div>
    )
}