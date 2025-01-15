import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

export default function MainLayout(){
    return(
    <div>
        <Navbar></Navbar>
        <div className='min-h-[calc(100vh-347px)]'>
            <Outlet></Outlet>
        </div>
        <Footer></Footer>
    </div>
    )
}