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
            <div className="menu__bar">
                <div>
                    <MenuBar />
                </div>
                <div>
                    <Outlet />
                </div>
            </div>

            <Footer />
        </div>
    )
}