import { Outlet } from "react-router-dom";
// import { Navigate } from "react-router-dom";
// import { useStateContext } from "../contexts/ContextProvider";
import Navbar from "../component/layout/Navbar";
import Footer from "../component/layout/Footer";

export default function DefaultLayout(){
    // const {token} = useStateContext()

    // if(!token){
    //     return <Navigate to='/login' />
    // }

    return (
        <div>
            <Navbar/>

            <main>
                <Outlet/>
            </main>

            <Footer/>
        </div>
    )
}